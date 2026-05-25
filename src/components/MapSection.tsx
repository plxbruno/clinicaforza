import Logo from './Logo'

export default function MapSection() {
  return (
    <section id="localizacao" className="bg-sand-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <Logo className="h-[4.69rem] w-auto mx-auto mb-3 text-forest" />
          <p className="text-muted text-sm">
            Rua Rio Grande do Norte, 726 · Sala 305 · Savassi · Belo Horizonte, MG
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
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
        </div>

        <div className="mt-4 flex justify-end">
          <a
            href="https://maps.app.goo.gl/RSGhp7P69Mqa55ZB6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-forest transition-colors flex items-center gap-1"
          >
            Abrir no Google Maps →
          </a>
        </div>
      </div>
    </section>
  )
}
