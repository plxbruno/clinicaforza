import Reveal from './Reveal'
import { clinic } from '@/lib/clinic'

export default function MapSection() {
  const { address } = clinic

  return (
    <section id="localizacao" aria-labelledby="localizacao-titulo" className="bg-paper-2 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center text-center lg:text-left">
        <Reveal variant="left">
          <p className="text-gold-ink text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Onde estamos
          </p>
          <h2
            id="localizacao-titulo"
            className="font-display text-navy text-[1.9rem] sm:text-3xl md:text-4xl font-semibold leading-[1.12] text-balance">
            No coração da Savassi.
          </h2>
          <address className="not-italic text-ink-soft text-base sm:text-lg leading-relaxed mt-6">
            {address.street}
            <br />
            {address.unit} · {address.district}
            <br />
            {address.city}, {address.state}
          </address>
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-7 rounded-full bg-navy px-6 py-3 text-white text-sm font-semibold transition-colors duration-200 hover:bg-gold hover:text-navy"
          >
            Abrir no Google Maps
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal variant="right" className="w-full">
          <div className="relative overflow-hidden rounded-2xl border border-line shadow-lg shadow-navy/5">
            <iframe
              title={`Mapa — ${clinic.name}, ${address.district}, ${address.city}`}
              src={clinic.mapsEmbedUrl}
              width="100%"
              height="340"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block border-0 grayscale-[35%]"
            />

            {/* Marcador proprio: o embed sem chave de API nao desenha pino, e o
                mapa centraliza exatamente nas coordenadas da clinica. */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full drop-shadow-md"
            >
              <svg viewBox="0 0 24 24" className="h-9 w-9 text-gold" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" />
                <circle cx="12" cy="9" r="2.6" fill="#0D1B2A" />
              </svg>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
