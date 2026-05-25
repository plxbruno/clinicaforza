import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/logo.svg"
              alt="Clínica Forza"
              width={100}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert opacity-60"
            />
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-xs">
            <p>Dr. Bruno Galdino · CRM-MG 98375</p>
            <p>Rua Rio Grande do Norte, 726 · Sala 305</p>
            <p>Savassi · Belo Horizonte, MG</p>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-center">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Clínica Forza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
