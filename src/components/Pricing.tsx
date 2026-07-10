import Reveal from './Reveal'

const plans = [
  {
    name: 'Consulta Médica',
    price: '450',
    period: 'por consulta',
    description: 'Avaliação clínica completa com o Dr. Bruno Galdino.',
    features: [
      'Anamnese completa',
      'Avaliação física completa com bioimpedância',
      'Orientações personalizadas',
      'Solicitação de exames',
      'Retorno incluso',
    ],
    highlight: false,
  },
  {
    name: 'Plano de Emagrecimento',
    price: '1.790',
    period: 'por mês no plano trimestral',
    installment: '6x de R$ 895,00 sem juros',
    description:
      'Tratamento completo com medicação incluída após criteriosa avaliação clínica.',
    features: [
      'Consulta médica',
      'Consulta nutricional',
      'Avaliação física completa com bioimpedância',
      'Medicação incluída',
      'Monitoramento semanal',
      'Suporte via WhatsApp',
      'Consultas de retorno inclusas',
    ],
    highlight: true,
  },
  {
    name: 'Consulta com Nutricionista',
    price: '300',
    period: 'por consulta',
    description: 'Avaliação nutricional e planejamento alimentar personalizado.',
    features: [
      'Avaliação nutricional',
      'Plano alimentar individualizado',
      'Orientação de suplementação',
      'Educação alimentar',
      'Acompanhamento evolutivo',
    ],
    highlight: false,
    // Oculto temporariamente — defina como false (ou remova) para reexibir o card.
    hidden: true,
  },
]

export default function Pricing() {
  const visiblePlans = plans.filter((plan) => !('hidden' in plan && plan.hidden))

  return (
    <section id="valores" className="py-20 md:py-44">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="max-w-2xl mb-16 mx-auto text-center">
          <p className="flex items-center justify-center gap-3 text-gold/80 text-xs font-medium tracking-[0.25em] uppercase mb-5">
            <span className="h-px w-8 bg-gold/40" />
            Investimento
          </p>
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] mb-6">
            Transparência em cada etapa.
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Valores claros e sem surpresas. Porque cuidar da sua saúde deve ser
            uma decisão simples.
          </p>
        </Reveal>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 gap-6 ${
            visiblePlans.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 md:max-w-3xl md:mx-auto'
          }`}
        >
          {visiblePlans.map((plan, i) => (
            <Reveal key={plan.name} variant="scale" delay={i * 120} className="flex flex-col">
              {plan.highlight ? (
                <div className="flex items-center gap-2 bg-gold text-forest text-xs font-semibold tracking-wide px-4 py-2 rounded-2xl w-fit self-center -mb-4 z-10">
                  <span>★</span>
                  <span>Medicação incluída</span>
                </div>
              ) : (
                <div className="h-4" />
              )}
            <div
              className={`relative rounded-2xl p-8 flex flex-col gap-6 border transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? 'bg-forest border-gold/30 shadow-2xl shadow-black/40 hover:shadow-gold/10'
                  : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
              }`}
            >
              <div>
                <p className="text-sm font-medium tracking-wide mb-3 text-gold">
                  {plan.name}
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-sm font-medium text-white/50">
                    R$
                  </span>
                  <span className="font-display text-5xl font-light text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm mt-1 text-white/55">
                  {plan.period}
                </p>
                {'installment' in plan && plan.installment && (
                  <p className="text-gold text-xs font-medium mt-2 border-t border-white/10 pt-2">
                    {plan.installment}
                  </p>
                )}
              </div>

              <p className="text-sm leading-relaxed text-white/60">
                {plan.description}
              </p>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    <span className="text-white/80">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-4">
          Aceitamos as principais formas de pagamento. Entre em contato para mais informações.
        </p>

        {/* Comparativo */}
        <Reveal variant="scale" className="mt-6 md:mt-10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-center text-white/55 text-sm mb-8">
              Veja quanto custaria montar o mesmo tratamento fora do plano:
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Consulta médica</span>
                <span className="text-white/70">R$ 450</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Consulta nutricional</span>
                <span className="text-white/70">R$ 350</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Mounjaro 7,5 mg</span>
                <span className="text-white/70">R$ 2.500</span>
              </div>

              <div className="h-px bg-white/10 my-2" />

              <div className="flex items-center justify-between">
                <span className="text-white/80 font-medium">Total avulso</span>
                <span className="text-white/80 font-medium">R$ 3.300</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gold font-medium">Na Clínica Forza</span>
                <span className="text-gold font-medium">R$ 1.790</span>
              </div>
            </div>

            <p className="text-center text-white/40 text-xs mt-8">
              Economia de mais de R$ 1.500 por mês em relação ao tratamento avulso.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
