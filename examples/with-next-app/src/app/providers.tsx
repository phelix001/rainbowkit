'use client';

import type React from 'react';
import dynamic from 'next/dynamic';

const WalletProviders = dynamic(
  () => import('./wallet-providers').then((mod) => mod.WalletProviders),
  { ssr: false },
);

export function Providers({ children }: { children: React.ReactNode }) {
  return <WalletProviders>{children}</WalletProviders>;
}
