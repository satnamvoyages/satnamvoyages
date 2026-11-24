import Link from 'next/link';
import { SITE_URL } from '@/lib/constants';

// Shared shell for static information pages (About, Contact, policies).
// Server component: all content is in the initial HTML.

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...data }) }}
    />
  );
}

export function InfoPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="bg-[#141210] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-stone-400 mb-4">
            <Link href="/" className="hover:text-[#EA580C]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-200">{eyebrow}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-headline font-extrabold leading-tight">{title}</h1>
          {intro && <p className="mt-4 text-stone-300 text-base md:text-lg max-w-2xl leading-relaxed">{intro}</p>}
          {updated && <p className="mt-4 text-xs text-stone-500">Last updated: {updated}</p>}
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-stone-700 leading-relaxed space-y-8 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-stone-900 [&_h2]:mb-3 [&_h3]:font-bold [&_h3]:text-stone-900 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-[#C2410C] [&_a]:underline">
        {children}
      </div>
    </div>
  );
}
