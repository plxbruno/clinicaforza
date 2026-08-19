import Logo from './Logo'
import WhatsAppLink from './WhatsAppLink'
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

        {/*
          NAP completo (nome, endereco, telefone) mais horario. O Google cruza
          esses quatro dados com o Google Business — precisam ser identicos
          nos dois lugares, ou ele ve dois negocios parecidos em vez de um.

          O numero fica visivel por isso, mas o link abre o WhatsApp, nao o
          discador: atendimento por telefone nao existe aqui.
        */}
        <address className="not-italic text-sm leading-relaxed text-balance md:text-right">
          {addressLine}
          <br />
          <WhatsAppLink
            source="rodape"
            className="inline-block -m-1 p-1 transition-colors duration-200 hover:text-white"
          >
            {clinic.phone.display} · WhatsApp
          </WhatsAppLink>
          {clinic.hours.map((h) => (
            <span key={h.label} className="block text-white/50">
              {h.label}
            </span>
          ))}
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
