import Reveal from './Reveal'

export default function Doctor() {
  return (
    <section id="sobre" className="py-20 md:py-44">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="mb-8 lg:mb-10 lg:pl-24">
          <p className="flex items-center justify-center lg:justify-start gap-3 text-gold/80 text-xs font-medium tracking-[0.25em] uppercase">
            <span className="h-px w-8 bg-gold/40" />
            Quem cuida de você
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

          {/* Photo */}
          <Reveal variant="left" className="relative w-full max-w-[420px] mx-auto lg:mx-0 lg:pl-24">
            {/* Gold accent border */}
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40 rounded-br-2xl" />

            {/* CRM badge */}
            <div className="absolute bottom-6 -right-6 z-20 bg-white/90 border border-gold/30 rounded-xl px-4 py-3 flex flex-col gap-0.5">
              <span className="text-gold text-xs font-medium tracking-widest uppercase">CRM-MG</span>
              <span className="text-forest font-display text-[1.375rem] font-medium">98375</span>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal variant="right" delay={120} className="flex flex-col gap-6">
            <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08]">
              Dr. Bruno Galdino
            </h2>

            <div className="w-12 h-px bg-gold" />

            <p className="text-white/70 text-base leading-relaxed">
              Médico formado pela <strong className="text-white font-semibold">Universidade Federal de Minas Gerais</strong> e pós-graduando em Nutrologia,
              dedica sua prática ao cuidado integral do paciente, unindo rigor científico
              e escuta clínica para construir tratamentos verdadeiramente individualizados.
            </p>

            <p className="text-white/70 text-base leading-relaxed">
              Possui ampla experiência com as novas gerações de medicamentos para emagrecimento,
              como os agonistas de GLP-1, e acompanha de perto a literatura sobre saúde hormonal,
              abordando desequilíbrios com base nas evidências científicas.
            </p>

            <p className="text-white/70 text-base leading-relaxed">
              Integra com cuidado a prática esportiva ao tratamento médico, orientando atletas e
              praticantes de atividade física para que alcancem seus objetivos com saúde e segurança.
            </p>

          </Reveal>

        </div>
      </div>
    </section>
  )
}
