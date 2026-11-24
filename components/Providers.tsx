'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { Currency } from '@/lib/types';
import { InquiryModal } from './InquiryModal';

interface AppContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  openInquiry: (packageTitle?: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within <Providers>');
  }
  return ctx;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryPackageTitle, setInquiryPackageTitle] = useState<string | undefined>(undefined);

  const openInquiry = useCallback((packageTitle?: string) => {
    setInquiryPackageTitle(packageTitle);
    setInquiryOpen(true);
  }, []);

  const value = useMemo(
    () => ({ currency, setCurrency, openInquiry }),
    [currency, openInquiry]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        prefilledPackageTitle={inquiryPackageTitle}
      />
    </AppContext.Provider>
  );
}
