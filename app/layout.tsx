import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SiteFooter, SiteHeader } from '@/app/components/site-chrome';
import { siteConfig } from '@/data/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: `${siteConfig.name} | Product Research & Strategy`, template: `%s | ${siteConfig.name}` },
  description: 'Product-focused professional working across competitive research, user research, market analysis, product discovery, and early-stage business development.',
  keywords: siteConfig.seoKeywords,
  openGraph: { title: `${siteConfig.name} | Product Research & Strategy`, description: 'Research → Insight → Product Decision → Execution', url: 'https://example.com', siteName: siteConfig.name, locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image', title: `${siteConfig.name} | Product Research & Strategy`, description: 'Product-focused professional working across competitive research, user research, market analysis, product discovery, and early-stage business development.' },
  alternates: { canonical: 'https://example.com' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
