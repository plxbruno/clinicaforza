import type { Metadata } from 'next'
import Link from 'next/link'
import { clinic } from '@/lib/clinic'

// O Next ja emite noindex sozinho em not-found; nao repetimos a diretiva
// aqui para nao servir duas meta robots na mesma pagina.
export const metadata: Metadata = {
  title: 'Página não encontrada',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-gold-ink text-xs font-semibold tracking-[0.25em] uppercase mb-5">
        Erro 404
      </p>
      <h1 className="font-display text-navy text-[1.9rem] sm:text-3xl md:text-4xl font-semibold leading-[1.12] text-balance">
        Esta página não existe.
      </h1>
      <p className="text-ink-soft text-base leading-relaxed text-pretty mt-5 max-w-md">
        O endereço que você acessou pode ter mudado ou nunca existiu. Volte para
        a página inicial da {clinic.name}.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-9 rounded-full bg-navy px-8 py-4 text-white text-base font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
      >
        Voltar ao início
      </Link>
    </main>
  )
}
