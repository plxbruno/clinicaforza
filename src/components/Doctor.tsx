export default function Doctor() {
  return (
    <section id="sobre" className="py-28 bg-forest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

          {/* Photo */}
          <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 lg:pl-24">
            {/* Gold accent border */}
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40 rounded-br-2xl" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/doctor.webp"
              alt="Dr. Bruno Galdino"
              className="w-full h-auto object-contain rounded-2xl relative z-10"
            />

            {/* CRM badge */}
            <div className="absolute bottom-6 -right-6 z-20 bg-white/90 border border-gold/30 rounded-xl px-4 py-3 flex flex-col gap-0.5">
              <span className="text-gold text-xs font-medium tracking-widest uppercase">CRM-MG</span>
              <span className="text-forest font-serif text-[1.375rem] font-medium">98375</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Quem cuida de você
              </p>
              <h2 className="font-serif text-white text-4xl md:text-5xl font-medium leading-tight mb-2">
                Dr. Bruno Galdino
              </h2>
            </div>

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

          </div>

        </div>
      </div>
    </section>
  )
}
