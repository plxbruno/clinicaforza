import Reveal from './Reveal'
import WhatsAppLink from './WhatsAppLink'
import { brl, plan } from '@/lib/clinic'

export default function Plan() {
  return (
    <section id="plano" aria-labelledby="plano-titulo" className="bg-paper-2 py-16 md:py-14">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-6">
          <p className="text-gold-ink text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            {plan.badge}
          </p>
          <h2
            id="plano-titulo"
            className="font-display text-navy text-[1.9rem] sm:text-3xl md:text-4xl font-semibold leading-[1.12] text-balance mb-4">
            Comece seu tratamento por{'\u00A0'}R${'\u00A0'}{brl(plan.firstMonth)}.
          </h2>
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed text-pretty">
            Um plano, um preço, tudo incluso. Sem taxa de adesão e sem
            surpresas ao longo do caminho.
          </p>
        </Reveal>

        <Reveal variant="scale">
          <div className="relative rounded-3xl bg-paper border border-line shadow-xl shadow-navy/5 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-7">
              <p className="text-center text-navy text-sm font-semibold tracking-wide">
                {plan.name}
              </p>
              <p className="text-center text-ink-soft text-sm mt-1">
                {plan.months} meses de acompanhamento
              </p>

              {/* O maior numero da pagina */}
              <div className="mt-6 flex items-start justify-center gap-2">
                <span className="font-display text-navy text-2xl md:text-3xl font-medium mt-2 md:mt-3">
                  R$
                </span>
                <span className="font-display text-navy text-[4.25rem] sm:text-[5rem] md:text-[5rem] font-semibold leading-[0.85] tracking-tight">
                  {brl(plan.firstMonth)}
                </span>
              </div>
              <p className="text-center text-gold-ink text-base font-semibold mt-2">
                no 1º mês
              </p>

              <ul className="mt-7 pt-6 border-t border-line grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      aria-hidden
                      viewBox="0 0 20 20"
                      className="h-5 w-5 shrink-0 text-gold-ink mt-px"
                      fill="currentColor"
                      fillRule="evenodd"
                    >
                      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.7a1 1 0 0 0-1.4-1.4L9 10.18l-1.3-1.3a1 1 0 0 0-1.4 1.42l2 2a1 1 0 0 0 1.4 0l4-4Z" />
                    </svg>
                    <span className="text-ink leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppLink
                source="plano"
                className="group mt-8 flex items-center justify-center gap-2 w-full whitespace-nowrap rounded-full bg-gold px-5 sm:px-8 py-4 text-navy text-[0.95rem] sm:text-base font-semibold transition-all duration-200 hover:bg-navy hover:text-white"
              >
                <span>
                  Quero começar por R${'\u00A0'}{brl(plan.firstMonth)}
                </span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </WhatsAppLink>
            </div>
          </div>
        </Reveal>

        <p className="text-center text-ink-soft/70 text-xs mt-5">
          A prescrição de tirzepatida depende de avaliação clínica e não é
          indicada para todos os pacientes.
        </p>
      </div>
    </section>
  )
}
