import Logo from './Logo'
import Reveal from './Reveal'

export default function MapSection() {
  return (
    <section id="localizacao">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Reveal className="text-center mb-8">
          <Logo className="h-[4.69rem] w-auto mx-auto mb-3 text-white/90" />
          <p className="text-white/50 text-sm">
            Rua Rio Grande do Norte, 726 · Sala 305 · Savassi · Belo Horizonte, MG
          </p>
        </Reveal>

        <Reveal delay={120} className="rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/30">
          <iframe
            src="https://maps.google.com/maps?q=-19.9319633,-43.9312381&z=17&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Clínica Forza"
          />
        </Reveal>

        <div className="mt-4 flex justify-end">
          <a
            href="https://maps.app.goo.gl/RSGhp7P69Mqa55ZB6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-1"
          >
            Abrir no Google Maps →
          </a>
        </div>
      </div>
    </section>
  )
}
