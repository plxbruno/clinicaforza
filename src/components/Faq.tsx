import Reveal from './Reveal'
import { faq } from '@/lib/faq'

export default function Faq() {
  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-titulo"
      className="py-16 md:py-24 bg-paper"
    >
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <p className="text-gold-ink text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Dúvidas frequentes
          </p>
          <h2
            id="duvidas-titulo"
            className="font-display text-navy text-[1.9rem] sm:text-3xl md:text-4xl font-semibold leading-[1.12] text-balance"
          >
            O que perguntam antes de começar.
          </h2>
        </Reveal>

        {/*
          <details>/<summary> nativo de proposito: sem JS, sem estado, e o
          texto da resposta ja vem no HTML do servidor — fechado visualmente,
          mas presente para o crawler e para o Ctrl+F. Uma sanfona feita com
          useState esconderia o conteudo do rastreamento.
        */}
        <div className="divide-y divide-line border-y border-line">
          {faq.map((item, i) => (
            <Reveal key={item.question} delay={Math.min(i, 6) * 60}>
              <details className="group">
                <summary className="flex w-full cursor-pointer items-start justify-between gap-4 py-5 list-none [&::-webkit-details-marker]:hidden">
                  {/* Espelho do "+" a esquerda, so no mobile: com ele a
                      pergunta fica opticamente centrada na linha em vez de
                      empurrada para a esquerda pelo icone. */}
                  <span aria-hidden className="mt-1 h-5 w-5 shrink-0 sm:hidden" />
                  <h3 className="grow font-display text-navy text-base sm:text-lg font-semibold leading-snug text-balance text-center sm:text-left">
                    {item.question}
                  </h3>
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className="mt-1 h-5 w-5 shrink-0 text-gold-ink transition-transform duration-300 group-open:rotate-45"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="text-ink-soft text-sm leading-relaxed pb-6 text-center sm:text-left sm:pr-9">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
