import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { projects } from '@/data/portfolio';

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="container-shell py-12 sm:py-16">
      <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)]"><ArrowLeft className="h-4 w-4" /> Back to selected work</Link>
      <article className="mt-12">
        <header className="grid gap-8 border-b border-[var(--line)] pb-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div><p className="eyebrow">{project.type} / {project.year}</p><h1 className="mt-5 text-5xl font-semibold leading-[.92] tracking-[-.07em] text-[var(--ink)] sm:text-7xl">{project.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--ink-muted)]">{project.subtitle}</p></div>
          <div className="rounded-2xl bg-[var(--accent)] p-6 text-[var(--ink)]"><p className="section-label text-[var(--ink)]">Contribution</p><p className="mt-4 text-xl font-semibold leading-7 tracking-[-.035em]">{project.role}</p><div className="mt-8 flex flex-wrap gap-2">{project.tags.slice(0, 5).map((tag) => <span key={tag} className="rounded-full border border-[var(--ink)]/20 px-2.5 py-1 text-xs font-medium">{tag}</span>)}</div></div>
        </header>

        <div className="grid gap-10 py-12 lg:grid-cols-[.58fr_1.42fr] lg:py-16"><aside><p className="section-label">The brief</p><p className="mt-4 text-xl font-semibold leading-7 tracking-[-.035em] text-[var(--ink)]">{project.problem}</p></aside><section><p className="section-label">Context</p><p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">{project.summary}</p></section></div>

        <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
          <CaseSection number="01" title="Research" items={project.research} />
          <CaseSection number="02" title="Insight" items={project.insights} />
          <CaseSection number="03" title="Decision" items={project.decisions} />
        </div>

        {project.slug === 'habit-creator' && <HabitCreatorArtefacts />}
        {project.slug === 'ai-agents-simplified' && <AiAgentsAutomation />}

        <section className="mt-10 grid gap-8 rounded-[1.5rem] bg-[var(--ink)] p-8 text-white sm:p-10 lg:grid-cols-[.7fr_1.3fr] lg:p-12"><p className="section-label text-[#c5e86c]">Outcome / recommendation</p><div><p className="text-2xl font-semibold leading-8 tracking-[-.04em] sm:text-3xl">{project.outcome}</p><div className="mt-8 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-white/75">{tool}</span>)}</div></div></section>

        <section className="mt-14 border-t border-[var(--line)] pt-10 sm:mt-16">
          <div className="grid gap-5 md:grid-cols-[.7fr_1.3fr] md:items-end"><div><p className="eyebrow">Project resources</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.055em] text-[var(--ink)]">Source material & deliverables</h2></div><p className="max-w-2xl text-sm leading-6 text-[var(--ink-muted)]">Original research documentation, supporting analysis, and project files created during the {project.title} case study.</p></div>
          <div className="mt-7 flex flex-wrap gap-3">{project.links.filter((link) => link.href !== '#' && link.href !== `/projects/${project.slug}`).map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-3 text-sm font-bold text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--accent-soft)]">{link.label}<ArrowUpRight className="h-4 w-4" /></a>)}</div>
        </section>
      </article>
    </main>
  );
}

function CaseSection({ number, title, items }: { number: string; title: string; items: string[] }) {
  return <section className="bg-[var(--card)] p-7 sm:p-8"><p className="text-sm font-semibold text-[#76961d]">{number}</p><h2 className="mt-8 text-2xl font-semibold tracking-[-.045em] text-[var(--ink)]">{title}</h2><ul className="mt-5 space-y-4 text-sm leading-6 text-[var(--ink-muted)]">{items.map((item) => <li key={item} className="border-t border-[var(--line)] pt-4">{item}</li>)}</ul></section>;
}

function AiAgentsAutomation() {
  return <section className="mt-20 border-t border-[var(--line)] pt-12 sm:mt-24 sm:pt-16">
    <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="eyebrow">Growth operations</p><h2 className="mt-4 text-4xl font-semibold leading-[.98] tracking-[-.06em] text-[var(--ink)] sm:text-5xl">Reply-aware, personalized outreach at campaign scale.</h2></div><p className="max-w-xl text-base leading-7 text-[var(--ink-muted)]">I designed this n8n workflow to transform Apollo prospect data into controlled, personalized outreach without continuing to message people who had already responded.</p></div>
    <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[#262d2a] bg-[#101412] p-2 shadow-soft sm:p-4"><Image src="/images/ai-agents-simplified/reply-aware-outreach-automation.png" alt="n8n workflow for reply-aware personalized outreach" width={2356} height={962} className="h-auto w-full rounded-xl" /></div>
    <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-3"><AutomationDetail number="01" title="Personalized sending" text="Apollo contacts were prepared for tailored messages sent through four to five sender inboxes." /><AutomationDetail number="02" title="Structured follow-up" text="Campaign batches of 20 contacts received two sequenced follow-ups after three and four days." /><AutomationDetail number="03" title="Reply-aware stop rule" text="Gmail reply checks and contact-state updates prevented follow-ups after a recipient replied." /></div>
    <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Content operations</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.045em] text-[var(--ink)]">The systems behind a reliable content cadence.</h3></div><p className="max-w-md text-sm leading-6 text-[var(--ink-muted)]">Early operating structures for prioritisation, assignment, publishing, and team visibility.</p></div>
    <div className="mt-5 grid gap-4 md:grid-cols-2"><OperationsArtefact src="/images/ai-agents-simplified/content-idea-prioritization-sheet.png" title="Content idea & prioritisation sheet" description="A shared view for evaluating content ideas by priority, approval, category, platform, and ownership." /><OperationsArtefact src="/images/ai-agents-simplified/content-production-tracker.png" title="Content production tracker" description="A pre-Notion/Trello tracker for assigning work, managing deadlines, and keeping content production visible." /></div>
  </section>;
}

function AutomationDetail({ number, title, text }: { number: string; title: string; text: string }) {
  return <div className="bg-[var(--card)] p-5"><p className="text-sm font-bold text-[#76961d]">{number}</p><h3 className="mt-5 text-lg font-semibold tracking-[-.035em] text-[var(--ink)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{text}</p></div>;
}

function OperationsArtefact({ src, title, description }: { src: string; title: string; description: string }) {
  return <figure className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card)]"><a href={src} target="_blank" rel="noreferrer" className="block aspect-[16/8] bg-[#ecece9] p-2"><Image src={src} alt={title} width={2200} height={1100} className="h-full w-full rounded-lg object-contain" /></a><figcaption className="p-4"><h4 className="text-base font-semibold tracking-[-.035em] text-[var(--ink)]">{title}</h4><p className="mt-1.5 text-sm leading-5 text-[var(--ink-muted)]">{description}</p></figcaption></figure>;
}

const habitArtefacts = {
  journey: { src: '/images/habit-creator/user-journey.png', title: 'User journey', label: 'Experience mapping', description: 'Mapped the moments where motivation drops and identified specific opportunities to support continuity.' },
  persona: { src: '/images/habit-creator/persona.png', title: 'Persona: Kourosh', label: 'Research synthesis', description: 'A behaviour-led persona grounded in the tension between independence, encouragement, and comparison.' },
  empathy: { src: '/images/habit-creator/empathy-map.png', title: 'Empathy map', label: 'Research synthesis', description: 'Captured what users say, think, do, and feel when building and maintaining habits.' },
  stories: { src: '/images/habit-creator/user-stories.png', title: 'User stories', label: 'Requirements', description: 'Translated recurring motivation problems into concise, testable product requirements.' },
  priority: { src: '/images/habit-creator/priority-matrix.png', title: 'Priority matrix', label: 'Feature prioritisation', description: 'Compared user value against implementation effort to focus the first product direction.' },
  flow: { src: '/images/habit-creator/user-flow.png', title: 'User flow', label: 'Interaction design', description: 'Defined the core path from browsing a habit to action and optional social sharing.' },
  prototype: { src: '/images/habit-creator/low-fi-prototype.png', title: 'Low-fidelity prototype', label: 'Prototype', description: 'Explored the onboarding sequence before committing to visual design or development.' },
  crazy8: { src: '/images/habit-creator/crazy-8.png', title: 'Crazy 8 ideation', label: 'Divergent thinking', description: 'Rapid concept sketching used to explore multiple ways of maintaining momentum.' },
};

function HabitCreatorArtefacts() {
  return <section className="mt-20 border-t border-[var(--line)] pt-12 sm:mt-24 sm:pt-16">
    <div className="grid gap-6 lg:grid-cols-[.62fr_1.38fr] lg:items-end"><div><p className="eyebrow">Evidence in the process</p><h2 className="mt-4 text-4xl font-semibold leading-[.98] tracking-[-.06em] text-[var(--ink)] sm:text-5xl">From user friction to an actionable product flow.</h2></div><p className="max-w-xl text-base leading-7 text-[var(--ink-muted)]">These artefacts show how research findings were translated into product requirements, prioritised concepts, and a testable experience.</p></div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <ArtefactCard artefact={habitArtefacts.journey} className="xl:col-span-2" wide />
      <ArtefactCard artefact={habitArtefacts.persona} />
      <ArtefactCard artefact={habitArtefacts.empathy} />
      <ArtefactCard artefact={habitArtefacts.stories} />
      <ArtefactCard artefact={habitArtefacts.priority} />
      <ArtefactCard artefact={habitArtefacts.flow} className="xl:col-span-2" wide />
      <ArtefactCard artefact={habitArtefacts.prototype} />
      <ArtefactCard artefact={habitArtefacts.crazy8} />
    </div>
  </section>;
}

function ArtefactCard({ artefact, className = '', wide = false }: { artefact: { src: string; title: string; label: string; description: string }; className?: string; wide?: boolean }) {
  return <figure className={`group overflow-hidden rounded-[1.15rem] border border-[var(--line)] bg-[var(--card)] transition hover:-translate-y-1 hover:shadow-soft ${className}`}><div className={`overflow-hidden bg-[#ecece9] p-2 ${wide ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}><Image src={artefact.src} alt={artefact.title} width={1800} height={1100} className="h-full w-full rounded-lg object-contain transition duration-300 group-hover:scale-[1.015]" /></div><figcaption className="p-4"><p className="section-label text-[#76961d]">{artefact.label}</p><h3 className="mt-2 text-lg font-semibold tracking-[-.04em] text-[var(--ink)]">{artefact.title}</h3><p className="mt-1.5 text-sm leading-5 text-[var(--ink-muted)]">{artefact.description}</p></figcaption></figure>;
}
