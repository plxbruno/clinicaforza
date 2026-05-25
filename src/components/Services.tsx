const services = [
  {
    icon: '◈',
    title: 'Emagrecimento',
    description:
      'Protocolos médicos individualizados para perda de peso sustentável, com acompanhamento contínuo e suporte medicamentoso quando indicado.',
  },
  {
    icon: '◈',
    title: 'Estilo de Vida',
    description:
      'Orientação completa para mudança de hábitos — sono, nutrição, rotina e bem-estar — transformando sua qualidade de vida de forma duradoura.',
  },
  {
    icon: '◈',
    title: 'Esporte',
    description:
      'Avaliação médica voltada para praticantes de atividade física, otimizando saúde, segurança e evolução no treino.',
  },
  {
    icon: '◈',
    title: 'Performance',
    description:
      'Para quem busca excelência física e mental. Estratégias que maximizam resultados com base em ciência e dados individuais.',
  },
  {
    icon: '◈',
    title: 'Longevidade',
    description:
      'Estratégias baseadas em evidências para envelhecer com vitalidade e funcionalidade.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            O que fazemos
          </p>
          <h2 className="font-serif text-forest text-4xl md:text-5xl font-medium leading-tight">
            Para cada objetivo, uma solução.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-sand p-10 flex flex-col gap-4 hover:bg-white transition-colors duration-300 group"
            >
              <span className="text-gold text-2xl font-light">{service.icon}</span>
              <h3 className="font-serif text-forest text-2xl font-medium group-hover:text-forest-mid transition-colors">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}

          {/* Fill sixth cell */}
          <div className="bg-forest p-10 flex flex-col justify-end gap-4">
            <p className="font-serif text-white text-[1.7rem] italic leading-relaxed">
              &ldquo;Cuide do seu corpo. É o único lugar que você tem para viver.&rdquo;
            </p>
            <span className="text-gold/60 text-sm font-medium tracking-wide">— Jim Rohn</span>
          </div>
        </div>
      </div>
    </section>
  )
}
