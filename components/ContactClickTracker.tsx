'use client';

import { useEffect } from 'react';
import { trackContactClick } from '@/lib/analytics';

// Sends whatsapp_click / phone_click events to GTM for every matching link.
export function ContactClickTracker() {
  useEffect(() => {
    document.addEventListener('click', trackContactClick, true);
    return () => document.removeEventListener('click', trackContactClick, true);
  }, []);
  return null;
}
