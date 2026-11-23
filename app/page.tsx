import type { Metadata } from 'next';
import { HomeClient } from '@/components/HomeClient';
import { GLOBAL_FAQS } from '@/lib/data/faqsData';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Explore India with Comfort & Confidence — Premier Cabs & Tours',
  description:
    "Satnam Voyages is India's premier travel agency and outstation cab provider. Private Golden Triangle tours, Rajasthan circuits, Himachal hill retreats, and verified chauffeur cabs.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Explore India with Comfort & Confidence — Premier Cabs & Tours',
    description:
      "Satnam Voyages is India's premier travel agency and outstation cab provider. Private Golden Triangle tours, Rajasthan circuits, Himachal hill retreats, and verified chauffeur cabs.",
    url: SITE_URL,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GLOBAL_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
