import Logo from './Logo'
import { addressLine, clinic } from '@/lib/clinic'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left gap-8">
        <div>
          <Logo className="h-7 w-auto text-white mx-auto md:mx-0" />
          <p className="text-sm mt-4">
            {clinic.doctor.name} · {clinic.doctor.crm}
          </p>
        </div>

        <address className="not-italic text-sm leading-relaxed text-balance md:text-right">
          {addressLine}
        </address>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-6 py-6 pb-24 md:pb-6 text-xs text-white/50 text-center md:text-left">
          © {new Date().getFullYear()} {clinic.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
