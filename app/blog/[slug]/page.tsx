import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPost } from '@/lib/data/blogData';
import { ALL_TOURS } from '@/lib/data/toursData';
import { SITE_URL, SITE_NAME, PHONE_WHATSAPP, OG_IMAGE } from '@/lib/constants';
import { JsonLd } from '@/app/_components/InfoPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.metaDescription,
      url,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [OG_IMAGE],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  // Only link tours that exist, so a renamed or pending tour never produces a 404 link.
  const relatedTours = post.relatedTourSlugs
    .map((s) => ALL_TOURS.find((t) => t.slug === s))
    .filter((t): t is (typeof ALL_TOURS)[number] => Boolean(t));
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const waText = encodeURIComponent(`Hello ${SITE_NAME}, I read "${post.title}" and would like help planning my India trip.`);

  const jsonLd = {
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        url,
        mainEntityOfPage: url,
        image: post.heroImage.startsWith('http') ? post.heroImage : `${SITE_URL}${post.heroImage}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: 'en',
        keywords: post.keywords.join(', '),
        author: { '@id': `${SITE_URL}/#agency` },
        publisher: { '@id': `${SITE_URL}/#agency` },
        isPartOf: { '@id': `${SITE_URL}/blog#blog` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      <JsonLd data={jsonLd} />

      {/* Header */}
      <div className="bg-[#141210] text-white px-4 sm:px-6 lg:px-8 py-12 border-b border-stone-800">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-stone-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>
          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">{post.title}</h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">{post.excerpt}</p>
          <p className="mt-4 text-xs text-stone-500">
            By {SITE_NAME} · <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time> · {post.readMinutes} min read
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-stone-200">
          <Image src={post.heroImage} alt={post.heroAlt} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>

        {/* Table of contents */}
        <nav aria-label="In this guide" className="mb-10 rounded-2xl border border-[#E8DFD3] bg-white p-5">
          <p className="font-headline text-sm font-bold uppercase text-[#1C1917]">In this guide</p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-stone-700">
            {post.sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${slugify(s.heading)}`} className="hover:text-[#C2410C] hover:underline">{s.heading}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10 text-stone-700 leading-relaxed">
          {post.sections.map((s) => (
            <section key={s.heading} aria-labelledby={slugify(s.heading)}>
              <h2 id={slugify(s.heading)} className="scroll-mt-24 font-headline text-xl sm:text-2xl font-extrabold text-[#1C1917] mb-3">
                {s.heading}
              </h2>
              <div className="space-y-4 text-[15px] sm:text-base">
                {s.paragraphs.slice(0, s.bullets ? 1 : undefined).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="list-disc space-y-2 pl-6">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {s.bullets &&
                  s.paragraphs.slice(1).map((p, i) => (
                    <p key={`after-${i}`}>{p}</p>
                  ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-[#141210] p-6 sm:p-8 text-white">
          <h2 className="font-headline text-xl sm:text-2xl font-extrabold uppercase">Plan your private India tour</h2>
          <p className="mt-2 text-sm text-stone-300 leading-relaxed">
            Tell us your dates, the places you want to see and how many are travelling. We reply with a day-by-day plan and a
            written quote. Prices depend on season, vehicle and hotels, so every trip is quoted individually.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm uppercase tracking-wider transition-all"
            >
              Get a Free Quote on WhatsApp
            </a>
            <Link
              href="/tours"
              className="px-6 py-3 rounded-xl border border-stone-700 bg-stone-900 hover:bg-black text-white font-bold text-sm uppercase tracking-wider transition-all"
            >
              Browse All Tours
            </Link>
          </div>
        </div>

        {/* FAQs: plain HTML, always visible */}
        {post.faqs.length > 0 && (
          <section aria-labelledby="faq" className="mt-12">
            <h2 id="faq" className="font-headline text-xl sm:text-2xl font-extrabold text-[#1C1917] mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-[#E8DFD3] bg-white p-5">
                  <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">{f.q}</h3>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related tours */}
        {relatedTours.length > 0 && (
          <section aria-labelledby="related-tours" className="mt-12">
            <h2 id="related-tours" className="font-headline text-xl sm:text-2xl font-extrabold text-[#1C1917] mb-4">
              Related tours
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedTours.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tours/${t.slug}`}
                    className="block h-full rounded-xl border border-[#E8DFD3] bg-white px-4 py-3 transition-colors hover:border-[#EA580C]"
                  >
                    <span className="block font-semibold text-[#1C1917] text-sm">{t.title}</span>
                    <span className="block text-xs text-stone-500">{t.durationLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-10 text-sm text-stone-700">
          More ideas: see all <Link href="/tours" className="font-semibold text-[#C2410C] underline">private tour packages</Link>,{' '}
          <Link href="/destinations/rajasthan" className="font-semibold text-[#C2410C] underline">Rajasthan tour packages</Link> and{' '}
          <Link href="/cabs" className="font-semibold text-[#C2410C] underline">outstation cabs with driver</Link>.
        </p>

        {/* More posts */}
        <section aria-labelledby="more-posts" className="mt-12 border-t border-[#E8DFD3] pt-10">
          <h2 id="more-posts" className="font-headline text-xl font-extrabold text-[#1C1917] mb-4">More travel guides</h2>
          <ul className="space-y-3">
            {otherPosts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="text-sm font-semibold text-[#C2410C] hover:underline">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
