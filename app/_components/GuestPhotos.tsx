import Image from 'next/image';
import Link from 'next/link';
import type { ClientMoment } from '@/lib/data/clientPhotosData';
import { TRIPADVISOR_URL } from '@/lib/constants';

/** Real guest photos with visible captions, linking to the full client gallery. */
export function GuestPhotos({
  photos,
  heading = 'From our recent trips',
  intro = 'Real photos of our guests and drivers on their trips.',
}: {
  photos: ClientMoment[];
  heading?: string;
  intro?: string;
}) {
  if (photos.length === 0) return null;
  return (
    <section aria-labelledby="guest-photos" className="not-prose mt-12">
      <h2 id="guest-photos" className="font-headline text-xl sm:text-2xl font-extrabold text-[#1C1917] uppercase mb-2">
        {heading}
      </h2>
      <p className="text-sm text-stone-600 mb-4">{intro}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((p) => (
          <figure key={p.id} className="overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white">
            <div className="relative aspect-[4/5] bg-stone-200">
              <Image src={p.image} alt={p.alt} fill sizes="(min-width: 640px) 260px, 100vw" className="object-cover" />
            </div>
            <figcaption className="px-3 py-2 text-xs text-stone-600 leading-snug">{p.alt}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-sm text-stone-700">
        <Link href="/gallery" className="font-semibold text-[#C2410C] underline">
          See all our guest photos
        </Link>{' '}
        or{' '}
        <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#C2410C] underline">
          read what our guests say on Tripadvisor
        </a>
        .
      </p>
    </section>
  );
}
