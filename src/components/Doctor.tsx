import Image from 'next/image'
import Reveal from './Reveal'
import { clinic } from '@/lib/clinic'

export default function Doctor() {
  const { photo } = clinic.doctor

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-paper-2 py-16 md:py-24">
      {/* No celular a ordem e a do DOM: rotulo, foto, nome e texto.
          No desktop o grid recoloca a foto na coluna da esquerda, ocupando as
          duas linhas — assim nao ha texto duplicado para leitor de tela. */}
      <div
        className={
          photo
            ? 'max-w-6xl mx-auto px-6 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-y-8 lg:gap-x-16 lg:gap-y-4 lg:items-center'
            : 'max-w-3xl mx-auto px-6 text-center'
        }
      >
        <Reveal variant={photo ? 'right' : 'up'} className={photo ? 'lg:col-start-2 lg:row-start-1 lg:self-end' : ''}>
          <p
            className="text-gold-ink text-xs font-semibold tracking-[0.25em] uppercase"
          >
            Quem cuida de você
          </p>
        </Reveal>

        {photo && (
          <Reveal
            variant="left"
            className="lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center"
          >
            <div className="relative aspect-[3/4] w-full sm:max-w-[20rem] sm:mx-auto lg:max-w-md lg:ml-auto lg:mr-0 overflow-hidden rounded-2xl border border-line shadow-xl shadow-navy/10">
              <Image
                src={photo}
                alt={`${clinic.doctor.name}, ${clinic.doctor.crm}`}
                fill
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 20rem, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        )}

        <div className={photo ? 'lg:col-start-2 lg:row-start-2 lg:self-start' : ''}>
          <Reveal variant={photo ? 'right' : 'up'}>
            <h2
            id="sobre-titulo"
            className="font-display text-navy text-[1.9rem] sm:text-3xl md:text-4xl font-semibold leading-[1.12] text-balance">
              {clinic.doctor.name}
            </h2>

            <span className="inline-block rounded-full border border-gold bg-gold/10 px-4 py-1.5 text-gold-ink text-xs font-semibold tracking-[0.15em] uppercase mt-5">
              {clinic.doctor.crm}
            </span>
          </Reveal>

          <Reveal variant={photo ? 'right' : 'up'} delay={120}>
            <div className="mt-7 space-y-4 text-ink-soft text-base sm:text-lg leading-relaxed text-pretty">
              <p>
                Médico formado pela{' '}
                <strong className="text-navy font-semibold">UFMG</strong> e
                pós-graduando em Nutrologia, com experiência no manejo de
                agonistas de GLP-1 e no cuidado da saúde hormonal e metabólica.
              </p>
              <p>
                O trabalho aqui parte de uma avaliação clínica criteriosa:
                exames, bioimpedância e história completa antes de qualquer
                prescrição. Sem protocolo de prateleira e sem promessa que a
                medicina não pode cumprir.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
