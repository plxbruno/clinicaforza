import Reveal from './Reveal'
import WhatsAppLink from './WhatsAppLink'
import { brl, pricing } from '@/lib/clinic'

/**
 * A secao de valores, no lugar da antiga promocao de lancamento.
 *
 * Tres decisoes que valem o comentario:
 *
 *   - Fundo navy. Ela entra entre <Doctor /> (paper-2) e <Testimonials />
 *     (paper), e qualquer um dos dois tons faria a secao encostar na vizinha
 *     e sumir. O navy tambem e o unico momento escuro entre o hero e o
 *     rodape, o que da a pagina um segundo ponto de parada — justamente onde
 *     esta o pedido.
 *   - Dois cartoes, nao um pacote. A consulta e um preco fechado; o plano e
 *     um piso. Quem so quer ser avaliado precisa ver que existe essa porta,
 *     sem ter que perguntar no WhatsApp qual e o valor da consulta.
 *   - Nenhum selo de escassez, contagem regressiva ou preco riscado. Isso era
 *     a gramatica da promocao antiga; consultorio nao vende com ela.
 *
 * `aria-hidden` no "R$" de cada cifra: o leitor de tela le o valor a partir
 * do texto visivel do cartao, e o simbolo solto no meio viraria "erre cifrao"
 * antes do numero.
 */

const { consultation, plan } = pricing

function Check() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className="h-5 w-5 shrink-0 text-gold-ink mt-px"
      fill="currentColor"
      fillRule="evenodd"
    >
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.7a1 1 0 0 0-1.4-1.4L9 10.18l-1.3-1.3a1 1 0 0 0-1.4 1.42l2 2a1 1 0 0 0 1.4 0l4-4Z" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section
      id="plano"
      aria-labelledby="plano-titulo"
      className="bg-navy py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-12">
          <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Valores
          </p>
          <h2
            id="plano-titulo"
            className="font-display text-white text-[1.9rem] sm:text-3xl md:text-4xl font-semibold leading-[1.12] text-balance mb-4"
          >
            O preço, antes de você perguntar.
          </h2>
          <p className="mx-auto max-w-xl text-white/70 text-base sm:text-lg leading-relaxed text-pretty">
            Sem taxa de adesão e sem pacote fechado no escuro. Você pode começar
            só pela consulta e decidir o resto depois dela.
          </p>
        </Reveal>

        {/* Sem `items-start`: os dois cartoes esticam ate a mesma altura
            mesmo com um deles tendo uma linha a mais de inclusos, e os dois
            botoes ficam alinhados na base. */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Consulta avulsa */}
          <Reveal variant="scale" className="h-full">
            <div className="flex h-full flex-col rounded-3xl bg-paper border border-line p-6 sm:p-8">
              <p className="text-navy text-sm font-semibold tracking-wide">
                {consultation.name}
              </p>
              <p className="text-ink-soft text-sm mt-1 text-pretty">
                {consultation.note}
              </p>

              <div className="mt-6 flex items-start gap-2">
                <span
                  aria-hidden
                  className="font-display text-navy text-2xl font-medium mt-1.5"
                >
                  R$
                </span>
                <span className="font-display text-navy text-[3.25rem] sm:text-[3.75rem] font-semibold leading-[0.85] tracking-tight">
                  {brl(consultation.price)}
                </span>
              </div>

              <ul className="mt-7 pt-6 border-t border-line space-y-3 grow">
                {consultation.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check />
                    <span className="text-ink leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppLink
                source="consulta"
                className="group mt-8 flex items-center justify-center gap-2 w-full whitespace-nowrap rounded-full border border-navy px-5 sm:px-8 py-4 text-navy text-[0.95rem] sm:text-base font-semibold transition-all duration-200 hover:bg-navy hover:text-white"
              >
                <span>Agendar consulta</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </WhatsAppLink>
            </div>
          </Reveal>

          {/* Plano de acompanhamento — o cartao que leva o destaque */}
          <Reveal variant="scale" delay={120} className="h-full">
            <div className="flex h-full flex-col rounded-3xl bg-paper border border-gold shadow-xl shadow-navy/20 p-6 sm:p-8">
              <p className="text-navy text-sm font-semibold tracking-wide">
                {plan.name}
              </p>
              <p className="text-ink-soft text-sm mt-1 text-pretty">
                {plan.note}
              </p>

              <div className="mt-6 flex items-start gap-2">
                <span
                  aria-hidden
                  className="font-display text-navy text-2xl font-medium mt-1.5"
                >
                  R$
                </span>
                <span className="font-display text-navy text-[3.25rem] sm:text-[3.75rem] font-semibold leading-[0.85] tracking-tight">
                  {brl(plan.from)}
                </span>
              </div>
              <p className="text-gold-ink text-base font-semibold mt-2">
                a partir de · {plan.period}
              </p>

              <ul className="mt-7 pt-6 border-t border-line space-y-3 grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check />
                    <span className="text-ink leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppLink
                source="plano"
                className="group mt-8 flex items-center justify-center gap-2 w-full whitespace-nowrap rounded-full bg-gold px-5 sm:px-8 py-4 text-navy text-[0.95rem] sm:text-base font-semibold transition-all duration-200 hover:bg-navy hover:text-white"
              >
                <span>Falar sobre o plano</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </WhatsAppLink>
            </div>
          </Reveal>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-white/55 text-xs leading-relaxed text-pretty">
          A tirzepatida entra inclusa no plano quando há indicação clínica. Ela é
          um medicamento de prescrição, depende de avaliação médica e não é
          indicada para todos os pacientes. O valor mensal varia conforme a dose
          e a duração do acompanhamento definidos na consulta.
        </p>
      </div>
    </section>
  )
}
