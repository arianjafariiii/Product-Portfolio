import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check, Linkedin, Mail } from 'lucide-react';
import { projects, siteConfig } from '@/data/portfolio';

const featuredProjects = projects.filter((project) => project.featured);

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid overflow-hidden border-b border-[var(--line)]">
        <div className="container-shell grid min-h-[calc(100vh-76px)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow mb-7 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[var(--accent-strong)]" /> Independent product thinker</p>
            <h1 className="text-[clamp(3.25rem,7vw,6.6rem)] font-semibold leading-[.91] tracking-[-.075em] text-[var(--ink)]">
              Clarity for the <span className="relative inline-block">next<span className="absolute -bottom-1 left-0 h-3 w-full -rotate-1 bg-[var(--accent)] -z-10" /></span> product move.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--ink-muted)] sm:text-xl">
              I turn market signals, user behaviour, and competitive research into sharper product positioning and decisions that teams can act on.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#work" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a3932]">Explore selected work <ArrowDown className="h-4 w-4" /></Link>
              <Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--ink)]">About my approach <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-[var(--ink-muted)]">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#6d8c17]" /> Product research</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#6d8c17]" /> Competitive intelligence</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#6d8c17]" /> Product strategy</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto lg:mr-0">
            <div className="absolute -right-3 -top-3 h-32 w-32 rounded-full bg-[var(--accent)] sm:h-40 sm:w-40" />
            <div className="relative aspect-[.82] overflow-hidden rounded-[2rem] bg-[#d6ddd0] shadow-[18px_18px_0_#17211d]">
              <Image src="/images/arian-jafari.jpg" alt="Arian Jafari" fill priority sizes="(max-width: 1024px) 90vw, 510px" className="object-cover object-[52%_36%] saturate-[.92] contrast-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#17211d]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-xl border border-white/25 bg-[#17211d]/80 px-4 py-3 text-white backdrop-blur-sm"><p className="text-[.62rem] font-bold uppercase tracking-[.18em] text-[#c5e86c]">Based in</p><p className="mt-1 text-sm font-semibold">Isfahan, Iran</p></div>
            </div>
            <div className="absolute -bottom-7 -left-4 hidden max-w-[205px] rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 shadow-soft sm:block"><p className="text-2xl font-semibold tracking-[-.06em] text-[var(--ink)]">Research → action</p><p className="mt-2 text-xs leading-5 text-[var(--ink-muted)]">Making the messy early-stage landscape useful.</p></div>
          </div>
        </div>
      </section>

      <section id="work" className="container-shell py-24 sm:py-32">
        <div className="grid gap-8 border-b border-[var(--line)] pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow">01 / Selected work</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[.98] tracking-[-.06em] text-[var(--ink)] sm:text-6xl">Signals are only useful when they change a decision.</h2></div>
          <p className="max-w-xs text-sm leading-6 text-[var(--ink-muted)]">A selection of research, product, and strategy engagements across B2B, consumer, and early-stage ventures.</p>
        </div>

        <div className="mt-5">
          {featuredProjects.map((project, index) => (
            <article key={project.slug} className="project-card grid gap-6 border-b border-[var(--line)] py-8 md:grid-cols-[84px_1fr_auto] md:items-start md:gap-8">
              <p className="pt-1 text-sm font-semibold text-[var(--ink-muted)]">0{index + 1}</p>
              <div><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[.65rem] font-bold uppercase tracking-[.1em] text-[var(--ink)]">{project.year}</span><span className="text-xs text-[var(--ink-muted)]">{project.type}</span></div><h3 className="mt-4 text-3xl font-semibold tracking-[-.055em] text-[var(--ink)] sm:text-4xl">{project.title}</h3><p className="mt-2 text-base text-[var(--ink-muted)]">{project.subtitle}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.slice(0, 4).map((tag) => <span key={tag} className="text-xs text-[var(--ink-muted)]">#{tag}</span>)}</div></div>
              <div className="flex h-full flex-col items-start md:max-w-[270px]"><p className="text-sm leading-6 text-[var(--ink-muted)]">{project.summary}</p><Link href={`/projects/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)] hover:text-[#607b12]">Read case study <ArrowUpRight className="h-4 w-4" /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24 sm:pb-32"><div className="grid overflow-hidden rounded-[1.75rem] bg-[var(--ink)] text-white lg:grid-cols-[1.25fr_.75fr]"><div className="p-8 sm:p-12 lg:p-16"><p className="eyebrow text-[#c5e86c]">Let&apos;s make the next move clearer</p><h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.06em] sm:text-5xl">Have a product question worth investigating?</h2><a href={`mailto:${siteConfig.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--ink)] transition hover:bg-white">Start a conversation <Mail className="h-4 w-4" /></a></div><div className="flex flex-col justify-between border-t border-white/15 p-8 text-sm text-white/60 lg:border-l lg:border-t-0 sm:p-12"><p>Research-led product strategy for teams who want to see the signal before they commit.</p><div className="mt-12 flex gap-4"><a href={siteConfig.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white hover:bg-white hover:text-[var(--ink)]"><Linkedin className="h-4 w-4" /></a><a href={`mailto:${siteConfig.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white hover:bg-white hover:text-[var(--ink)]"><Mail className="h-4 w-4" /></a></div></div></div></section>
    </main>
  );
}
