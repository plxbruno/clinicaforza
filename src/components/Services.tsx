import Reveal from './Reveal'

type Service = {
  title: string
  description: string
  /** Path de um icone 24x24 com stroke, desenhado inline (sem lib externa). */
  icon: string
}

const services: Service[] = [
  {
    title: 'Emagrecimento',
    description:
      'Perda de peso com acompanhamento médico contínuo e, quando indicado, medicação de última geração.',
    icon: 'M2 8l6.5 6.5 5-5L22 18M16 18h6v-6',
  },
  {
    title: 'Estilo de vida',
    description:
      'Sono, rotina, alimentação e hábitos ajustados ao seu dia real — não a um plano genérico.',
    icon: 'M2 12h4l2.5 7 4-14 2.5 7h7',
  },
  {
    title: 'Esporte',
    description:
      'Suporte clínico para quem treina: recuperação, disponibilidade e prevenção de lesão.',
    icon: 'M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 12h11',
  },
  {
    title: 'Performance',
    description:
      'Energia, foco e composição corporal trabalhados a partir de exames e bioimpedância.',
    icon: 'M3 21h18M6.5 21v-5M12 21v-10M17.5 21v-15',
  },
  {
    title: 'Longevidade',
    description:
      'Acompanhamento hormonal e metabólico guiado por exames, para chegar mais longe com disposição, força e autonomia.',
    icon: 'M20.8 6.6a5.5 5.5 0 0 0-8.8-1.4l-.7.7-.7-.7A5.5 5.5 0 0 0 3.2 12l8.1 8.1a1 1 0 0 0 1.4 0L20.8 12a5.5 5.5 0 0 0 0-5.4Z',
  },
]

export default function Services() {
  return (
    <section id="tratamentos" aria-labelledby="tratamentos-titulo" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-gold-ink text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            O que fazemos
          </p>
          <h2
            id="tratamentos-titulo"
            className="font-display text-navy text-[1.9rem] sm:text-3xl md:text-4xl font-semibold leading-[1.12] text-balance">
            Para cada objetivo, uma solução.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-7 text-center sm:text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-navy/5">
                <span className="mx-auto sm:mx-0 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[22px] w-[22px] text-gold-ink"
                  >
                    <path d={service.icon} />
                  </svg>
                </span>
                <h3 className="font-display text-navy text-xl font-semibold mt-4">
                  {service.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed mt-2">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={services.length * 90}>
            <blockquote className="h-full flex flex-col justify-center rounded-2xl bg-navy p-6 sm:p-7 text-center sm:text-left">
              <p className="font-display text-white text-xl leading-snug font-medium">
                “Cuide do seu corpo. É o único lugar que você tem para viver.”
              </p>
              <footer className="text-gold text-xs tracking-[0.18em] uppercase mt-4">
                Jim Rohn
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
