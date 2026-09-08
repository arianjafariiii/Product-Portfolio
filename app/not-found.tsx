import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-shell flex min-h-screen items-center justify-center py-16">
      <div className="card-surface max-w-lg p-8 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900">
          Return home
        </Link>
      </div>
    </main>
  );
}
