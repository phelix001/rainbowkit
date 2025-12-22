'use client';

import type React from 'react';
import dynamic from 'next/dynamic';
import type { Locale } from '@rainbow-me/rainbowkit';

const WalletProviders = dynamic(
  () => import('./wallet-providers').then((mod) => mod.WalletProviders),
  { ssr: false },
);

export function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return <WalletProviders locale={locale}>{children}</WalletProviders>;
}
