import type { Metadata } from 'next';
import { HomeClient } from '@/components/HomeClient';
import { GLOBAL_FAQS } from '@/lib/data/faqsData';
import { SITE_URL, OG_IMAGE } from '@/lib/constants';

// The layout's title template doesn't apply to the root page, so include the brand explicitly.
const HOME_TITLE = 'Satnam Voyages | Private India Tours by Car & Driver from Delhi';
const HOME_DESCRIPTION =
  'Private India tour packages for international travellers: Golden Triangle, Rajasthan and same day Taj Mahal tours with your own English-speaking driver.';

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    images: [OG_IMAGE],
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
