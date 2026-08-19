import Reveal from './Reveal'
import { testimonials } from '@/lib/testimonials'

export default function Testimonials() {
  // A secao so existe no HTML quando ha depoimentos reais cadastrados
  // em src/lib/testimonials.ts.
  if (testimonials.length === 0) return null

  return (
    <section id="depoimentos" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-gold-ink text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Depoimentos
          </p>
          <h2 className="font-display text-navy text-4xl md:text-5xl font-semibold leading-[1.1]">
            Quem já passou por aqui.
          </h2>
        </Reveal>

        <div
          className={`grid gap-5 ${
            testimonials.length === 1
              ? 'max-w-xl mx-auto'
              : testimonials.length === 2
                ? 'md:grid-cols-2 max-w-3xl mx-auto'
                : 'md:grid-cols-3'
          }`}
        >
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 90} className="h-full">
              <figure className="h-full flex flex-col rounded-2xl border border-line bg-paper p-7">
                <span aria-hidden className="font-display text-gold text-5xl leading-none">
                  “
                </span>
                <blockquote className="text-ink text-base leading-relaxed mt-2 flex-1">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-line">
                  <span className="block text-navy text-sm font-semibold">
                    {testimonial.name}
                  </span>
                  {testimonial.result && (
                    <span className="block text-gold-ink text-sm font-medium mt-0.5">
                      {testimonial.result}
                    </span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
