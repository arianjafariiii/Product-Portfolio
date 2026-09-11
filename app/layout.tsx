import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SiteFooter, SiteHeader } from '@/app/components/site-chrome';
import { siteConfig } from '@/data/portfolio';

const siteUrl = 'https://product-portfolio-rho-three.vercel.app';
const socialDescription = 'Selected work across product research, competitive intelligence, AI product strategy, product marketing, workflow automation, and B2B digital growth.';
const socialImage = `${siteUrl}/images/social/arian-jafari-og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Arian Jafari | Product Research & Strategy', template: `%s | ${siteConfig.name}` },
  description: socialDescription,
  keywords: siteConfig.seoKeywords,
  openGraph: {
    title: 'Arian Jafari | Product Research & Strategy',
    description: socialDescription,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: socialImage, width: 1200, height: 630, alt: 'Arian Jafari product research and strategy portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arian Jafari | Product Research & Strategy',
    description: socialDescription,
    images: [socialImage],
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
