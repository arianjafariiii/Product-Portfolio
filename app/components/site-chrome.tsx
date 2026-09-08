import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <Link href="/" className="group flex items-center gap-3" aria-label="Arian Jafari — home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] text-xs font-bold tracking-tight text-[var(--paper)] transition-transform duration-300 group-hover:rotate-12">AJ</span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] text-[var(--ink)] sm:block">Arian Jafari</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--ink-muted)] md:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>)}
        </nav>
        <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3.5 py-2 text-xs font-semibold text-[var(--ink)] transition hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white sm:px-4 sm:text-sm">
          <Mail className="h-3.5 w-3.5" /><span className="hidden sm:inline">Let&apos;s talk</span><ArrowUpRight className="h-3.5 w-3.5 sm:hidden" />
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="container-shell flex flex-col gap-3 text-sm text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Arian Jafari. Built with intention.</p>
        <div className="flex gap-5"><a href={siteConfig.linkedIn} target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">LinkedIn</a><a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--ink)]">Email</a></div>
      </div>
    </footer>
  );
}
