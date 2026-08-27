import Reveal from './Reveal'
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
            className="font-display text-white text-[1.9rem] sm:text-3xl md:text-4xl font-semibold leading-[1.12] text-balance"
          >
            O preço, antes de você perguntar.
          </h2>
        </Reveal>

        {/* Sem `items-start`: os dois cartoes esticam ate a mesma altura
            mesmo com o plano carregando o balao de medicacao inclusa, e o
            `justify-center` de cada um centra o proprio conteudo na sobra. */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Consulta avulsa */}
          <Reveal variant="scale" className="h-full">
            <div className="flex h-full flex-col items-center justify-center text-center rounded-3xl bg-paper border border-line p-6 sm:p-8">
              <p className="text-navy text-sm font-semibold tracking-wide">
                {consultation.name}
              </p>

              <div className="mt-6 flex items-baseline justify-center gap-2">
                <span
                  aria-hidden
                  className="font-display text-navy text-2xl font-medium self-start mt-1.5"
                >
                  R$
                </span>
                <span className="font-display text-navy text-[3.25rem] sm:text-[3.75rem] font-semibold leading-[0.85] tracking-tight">
                  {brl(consultation.price)}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Plano de acompanhamento — o cartao que leva o destaque */}
          <Reveal variant="scale" delay={120} className="h-full">
            <div className="flex h-full flex-col items-center justify-center text-center rounded-3xl bg-paper border border-gold shadow-xl shadow-navy/20 p-6 sm:p-8">
              <p className="text-navy text-sm font-semibold tracking-wide">
                {plan.name}
              </p>

              {/* "a partir de" antes e "/mes" depois do numero: as duas
                  metades da frase ficam onde a leitura as espera, em vez de
                  virarem um "a partir de · por mes" solto embaixo. */}
              <p className="mt-6 text-ink-soft text-sm">
                a partir de
              </p>

              <div className="mt-1 flex items-baseline justify-center gap-2">
                <span
                  aria-hidden
                  className="font-display text-navy text-2xl font-medium self-start mt-1.5"
                >
                  R$
                </span>
                <span className="font-display text-navy text-[3.25rem] sm:text-[3.75rem] font-semibold leading-[0.85] tracking-tight">
                  {brl(plan.from)}
                </span>
                <span className="text-ink-soft text-base font-medium">
                  /mês
                </span>
              </div>

              <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-gold-ink text-sm font-semibold">
                <Check />
                Medicação inclusa
              </p>
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
