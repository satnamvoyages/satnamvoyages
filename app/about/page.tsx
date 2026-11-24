import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPage, JsonLd, breadcrumbJsonLd } from '../_components/InfoPage';
import { SITE_URL, SITE_NAME, ADDRESS } from '@/lib/constants';

const TITLE = 'About Us: Private Tours & Chauffeur Cabs from Delhi';
const DESCRIPTION =
  'Satnam Voyages is a Delhi-based company running private chauffeur-driven tours and outstation cabs across the Golden Triangle, Rajasthan, Himachal and Uttarakhand.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          '@graph': [
            {
              '@type': 'AboutPage',
              '@id': `${SITE_URL}/about#page`,
              url: `${SITE_URL}/about`,
              name: `About ${SITE_NAME}`,
              inLanguage: 'en-IN',
              about: { '@id': `${SITE_URL}/#agency` },
            },
            breadcrumbJsonLd('About', '/about'),
          ],
        }}
      />
      <InfoPage
        eyebrow="About"
        title="About Satnam Voyages"
        intro={`A private tour and chauffeur company based in ${ADDRESS.street}, ${ADDRESS.locality}.`}
      >
        {/* TODO: owner name, founding year, registration/GSTIN.
            Only publish details you can back with documents. */}
        <section>
          <h2>What we do</h2>
          <p>
            We plan and run private road trips in North India. Every trip uses a dedicated
            air-conditioned vehicle with its own driver, so you travel only with your own group and
            set your own pace.
          </p>
          <ul>
            <li>
              <Link href="/tours">Private tour packages</Link>: the Golden Triangle (Delhi, Agra,
              Jaipur), Rajasthan, Himachal Pradesh, Uttarakhand and the Gwalior, Orchha and Khajuraho
              circuit.
            </li>
            <li>
              <Link href="/cabs">Outstation cabs</Link>: one-way and round-trip hire from Delhi in a
              sedan, Toyota Innova Crysta or Tempo Traveller, charged per kilometre.
            </li>
            <li>Same-day trips from Delhi to Agra and Jaipur, and Delhi airport transfers.</li>
          </ul>
        </section>

        <section>
          <h2>How a trip works</h2>
          <ul>
            <li>You send your dates, group size and the places you want to see.</li>
            <li>We reply with an itinerary and an itemised quote showing what is and is not included.</li>
            <li>A deposit confirms the booking; the balance is paid during the trip.</li>
            <li>
              Your driver stays with you for the whole trip, and our Delhi desk is reachable 24/7 on
              phone and WhatsApp.
            </li>
          </ul>
        </section>

        <section>
          <h2>Who travels with us</h2>
          <p>
            Most of our guests are families, couples and small groups visiting India for the first
            time, along with domestic travellers heading to the hills. You can see photos from real
            trips in our <Link href="/gallery">client gallery</Link>.
          </p>
        </section>

        <section>
          <h2>Get in touch</h2>
          <p>
            Visit or call our desk in Connaught Place. All contact details are on the{' '}
            <Link href="/contact">contact page</Link>. Booking terms are in our{' '}
            <Link href="/terms">terms and conditions</Link> and{' '}
            <Link href="/cancellation-policy">cancellation policy</Link>.
          </p>
        </section>
      </InfoPage>
    </>
  );
}
