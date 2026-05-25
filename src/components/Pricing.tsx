const plans = [
  {
    name: 'Consulta Médica',
    price: '500',
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
    price: '1.890',
    period: 'por mês no plano trimestral',
    installment: '6x de R$ 945,00 sem juros',
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
  },
]

export default function Pricing() {
  return (
    <section id="valores" className="py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Investimento
          </p>
          <h2 className="font-serif text-forest text-4xl md:text-5xl font-medium leading-tight mb-6">
            Transparência em cada etapa.
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Valores claros e sem surpresas. Porque cuidar da sua saúde deve ser
            uma decisão simples.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="flex flex-col">
              {plan.highlight ? (
                <div className="flex items-center gap-2 bg-gold text-forest text-xs font-semibold tracking-wide px-4 py-2 rounded-2xl w-fit self-center -mb-4 z-10">
                  <span>★</span>
                  <span>Medicação incluída</span>
                </div>
              ) : (
                <div className="h-4" />
              )}
            <div
              className={`relative rounded-2xl p-8 flex flex-col gap-6 border ${
                plan.highlight
                  ? 'bg-forest border-forest text-white'
                  : 'bg-white border-border'
              }`}
            >
              <div>
                <p className="text-sm font-medium tracking-wide mb-3 text-gold">
                  {plan.name}
                </p>
                <div className="flex items-end gap-2">
                  <span
                    className={`text-sm font-medium ${
                      plan.highlight ? 'text-white/60' : 'text-muted'
                    }`}
                  >
                    R$
                  </span>
                  <span
                    className={`font-serif text-5xl font-medium ${
                      plan.highlight ? 'text-white' : 'text-forest'
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlight ? 'text-white/60' : 'text-muted'
                  }`}
                >
                  {plan.period}
                </p>
                {'installment' in plan && plan.installment && (
                  <p className="text-gold text-xs font-medium mt-2 border-t border-white/10 pt-2">
                    {plan.installment}
                  </p>
                )}
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  plan.highlight ? 'text-white/70' : 'text-muted'
                }`}
              >
                {plan.description}
              </p>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    <span className={plan.highlight ? 'text-white/80' : 'text-ink'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-8">
          Aceitamos as principais formas de pagamento. Entre em contato para mais informações.
        </p>
      </div>
    </section>
  )
}
