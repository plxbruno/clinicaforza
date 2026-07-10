import Reveal from './Reveal'

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
    <section id="servicos" className="py-20 md:py-44">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="max-w-2xl mb-12 mx-auto text-center">
          <p className="flex items-center justify-center gap-3 text-gold/80 text-xs font-medium tracking-[0.25em] uppercase mb-5">
            <span className="h-px w-8 bg-gold/40" />
            O que fazemos
          </p>
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08]">
            Para cada objetivo,
            <br />
            uma solução.
          </h2>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] rounded-2xl overflow-hidden border border-white/[0.08]">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 80}
              className="bg-night/60 p-10 flex flex-col gap-4 hover:bg-white/[0.04] transition-colors duration-300 group"
            >
              <span className="text-gold text-2xl font-light transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                {service.icon}
              </span>
              <h3 className="font-display text-white text-2xl font-normal group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-white/55 leading-relaxed text-sm">{service.description}</p>
            </Reveal>
          ))}

          {/* Fill sixth cell */}
          <Reveal
            delay={services.length * 80}
            className="bg-forest p-10 flex flex-col justify-end gap-4"
          >
            <p className="font-display text-white text-[1.7rem] italic leading-relaxed">
              &ldquo;Cuide do seu corpo. É o único lugar que você tem para viver.&rdquo;
            </p>
            <span className="text-gold/60 text-sm font-medium tracking-wide">— Jim Rohn</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
