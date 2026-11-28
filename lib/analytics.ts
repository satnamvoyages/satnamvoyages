// Pushes events into the GTM dataLayer. No personal data (name, phone,
// email) is ever sent; only the form name and the tour title.
type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function trackLead(formName: string, tourTitle?: string) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'generate_lead',
    form_name: formName,
    ...(tourTitle ? { tour_title: tourTitle } : {}),
  });
}

// Where on the page a link sits, so reports can tell the floating WhatsApp
// button apart from the navbar, footer or in-page buttons.
function linkLocation(el: Element): string {
  if (el.closest('#mobile-bottom-navbar')) return 'mobile_bottom_bar';
  if (el.closest('footer')) return 'footer';
  if (el.closest('header, nav')) return 'navbar';
  if (el.closest('.fixed')) return 'floating_button';
  return 'page_content';
}

// One document-level listener tracks every WhatsApp and phone link on the
// site, including ones added later, without touching each component.
export function trackContactClick(event: MouseEvent) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const link = target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href') || '';

  let eventName: string | null = null;
  if (/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(href)) eventName = 'whatsapp_click';
  else if (href.startsWith('tel:')) eventName = 'phone_click';
  if (!eventName) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    link_location: linkLocation(link),
    link_text: (link.textContent || link.getAttribute('aria-label') || '').trim().slice(0, 100),
    page_path: window.location.pathname,
  });
}
