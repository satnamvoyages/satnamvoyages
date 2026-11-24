import type { Metadata } from 'next';
import { GalleryClient } from '@/components/GalleryClient';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const GALLERY_TITLE = 'Client Photo Gallery: Real Trips Across India';
const GALLERY_DESCRIPTION =
  'Real photos of travellers on Satnam Voyages private tours and chauffeur cabs across Delhi, Agra, Rajasthan, Himachal and Uttarakhand.';

export const metadata: Metadata = {
  title: GALLERY_TITLE,
  description: GALLERY_DESCRIPTION,
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: GALLERY_TITLE,
    description: GALLERY_DESCRIPTION,
    url: `${SITE_URL}/gallery`,
  },
};

export default function GalleryPage() {
  const galleryJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ImageGallery',
        '@id': `${SITE_URL}/gallery#gallery`,
        name: `${SITE_NAME} client travel photo gallery`,
        description: GALLERY_DESCRIPTION,
        url: `${SITE_URL}/gallery`,
        inLanguage: 'en-IN',
        publisher: { '@id': `${SITE_URL}/#agency` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_URL}/gallery` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }} />
      <GalleryClient />
    </>
  );
}
