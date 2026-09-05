import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  jsonLdSchema?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  jsonLdSchema
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | Satnam Voyages India`;

    // 2. Update Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update OpenGraph Tags
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) ogTitle.setAttribute('content', title);
    let ogDesc = document.querySelector("meta[property='og:description']");
    if (ogDesc) ogDesc.setAttribute('content', description);
    let ogUrl = document.querySelector("meta[property='og:url']");
    const fullUrl = `https://satnamvoyages.com${canonicalPath}`;
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // 5. Inject / Update Dynamic JSON-LD Structured Data
    const scriptId = 'satnam-json-ld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    if (jsonLdSchema) {
      scriptTag.textContent = JSON.stringify(jsonLdSchema, null, 2);
    } else {
      // Default Global Schema
      const defaultSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "TravelAgency",
            "@id": "https://satnamvoyages.com/#agency",
            "name": "Satnam Voyages",
            "url": "https://satnamvoyages.com/",
            "logo": "https://satnamvoyages.com/logo.png",
            "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
            "description": "Premier travel agency and outstation chauffeur cab provider in India specializing in Golden Triangle, Rajasthan, Himachal and Uttarakhand tours.",
            "telephone": "+91-9811776525",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Connaught Place, New Delhi",
              "addressLocality": "New Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110001",
              "addressCountry": "IN"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1450"
            }
          },
          {
            "@type": "TaxiService",
            "@id": "https://satnamvoyages.com/#taxiservice",
            "name": "Satnam Voyages Outstation Cabs",
            "provider": {
              "@id": "https://satnamvoyages.com/#agency"
            },
            "serviceArea": {
              "@type": "Country",
              "name": "India"
            },
            "areaServed": ["Delhi NCR", "Agra", "Jaipur", "Rajasthan", "Himachal Pradesh", "Uttarakhand"]
          }
        ]
      };
      scriptTag.textContent = JSON.stringify(defaultSchema, null, 2);
    }
  }, [title, description, canonicalPath, jsonLdSchema]);

  return null;
};
