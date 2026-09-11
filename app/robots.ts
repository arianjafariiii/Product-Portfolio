import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://product-portfolio-rho-three.vercel.app/sitemap.xml',
    host: 'https://product-portfolio-rho-three.vercel.app',
  };
}
