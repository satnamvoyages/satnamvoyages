import type { Metadata } from 'next';
import { GalleryClient } from '@/components/GalleryClient';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Client Photo Gallery & Real Traveler Moments',
  description:
    'Browse genuine photos and stories from international and domestic travelers who experienced India with Satnam Voyages private tours and chauffeur cabs.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Client Photo Gallery & Real Traveler Moments',
    description:
      'Browse genuine photos and stories from international and domestic travelers who experienced India with Satnam Voyages private tours and chauffeur cabs.',
    url: `${SITE_URL}/gallery`,
  },
};

export default function GalleryPage() {
  const galleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Satnam Voyages Real Client Travel Photo Gallery',
    description:
      'Authentic travel moments, guest reviews, and scenic photographs taken by real travelers across Golden Triangle, Rajasthan, Himachal and Uttarakhand with Satnam Voyages.',
    url: `${SITE_URL}/gallery`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }} />
      <GalleryClient />
    </>
  );
}
