import type { Metadata } from 'next';
import { InfoPage, JsonLd, breadcrumbJsonLd } from '../_components/InfoPage';
import {
  SITE_URL,
  SITE_NAME,
  PHONE_TEL,
  PHONE_DISPLAY,
  PHONE_WHATSAPP,
  CONTACT_EMAIL,
  ADDRESS,
  MAP_URL,
  INSTAGRAM_URL,
  TRIPADVISOR_URL,
  OG_IMAGE,
} from '@/lib/constants';

const TITLE = 'Contact Us: Delhi Office, Phone & WhatsApp';
const DESCRIPTION =
  'Contact Satnam Voyages in Connaught Place, New Delhi. Call or WhatsApp +91 97184 50905, 24/7, for private tours, outstation cabs and airport transfers.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/contact`, images: [OG_IMAGE] },
};

const fullAddress = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode}, India`;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          '@graph': [
            {
              '@type': 'ContactPage',
              '@id': `${SITE_URL}/contact#page`,
              url: `${SITE_URL}/contact`,
              name: `Contact ${SITE_NAME}`,
              inLanguage: 'en-IN',
              about: { '@id': `${SITE_URL}/#agency` },
            },
            breadcrumbJsonLd('Contact', '/contact'),
          ],
        }}
      />
      <InfoPage
        eyebrow="Contact"
        title="Contact Satnam Voyages"
        intro="Our booking desk in Connaught Place, New Delhi answers calls and WhatsApp messages 24 hours a day, 7 days a week."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <section className="orange-card rounded-2xl p-6 space-y-4">
            <h2>Office &amp; booking desk</h2>
            <div>
              <h3>Address</h3>
              <address className="not-italic">
                {SITE_NAME}
                <br />
                {ADDRESS.street}
                <br />
                {ADDRESS.locality}, {ADDRESS.region} {ADDRESS.postalCode}
                <br />
                India
              </address>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            </div>
            <div>
              <h3>Phone</h3>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </div>
            <div>
              <h3>WhatsApp</h3>
              <a
                href={`https://wa.me/${PHONE_WHATSAPP}?text=Hello%20Satnam%20Voyages%2C%20I%20would%20like%20to%20plan%20a%20trip.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp ({PHONE_DISPLAY})
              </a>
            </div>
            <div>
              <h3>Email</h3>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div>
              <h3>Hours</h3>
              <p>Booking desk: 24 hours, Monday to Sunday</p>
            </div>
            <div>
              <h3>Instagram</h3>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                @satnamvoyages
              </a>
            </div>
            <div>
              <h3>Guest reviews</h3>
              <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer">
                Read our reviews on Tripadvisor
              </a>
            </div>
          </section>

          <section className="rounded-2xl overflow-hidden border border-[#E8DFD3] bg-white min-h-[360px]">
            <iframe
              title={`Map of ${fullAddress}`}
              src="https://www.google.com/maps?q=Connaught+Place,+New+Delhi+110001&output=embed"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </div>

        <section>
          <h2>What to include in your message</h2>
          <ul>
            <li>Travel dates and pickup point (for example, Delhi airport or your hotel)</li>
            <li>Number of adults and children, and how many bags</li>
            <li>The tour or route you are interested in, or the places you want to see</li>
            <li>Preferred vehicle: sedan, Innova Crysta or Tempo Traveller</li>
          </ul>
          <p>We reply with an itemised quote. No payment is needed to ask for a quote.</p>
        </section>
      </InfoPage>
    </>
  );
}
