/**
 * Depoimentos de pacientes.
 *
 * A secao <Testimonials /> nao renderiza nada enquanto este array estiver vazio.
 * Para ligar a secao, basta adicionar entradas no formato abaixo:
 *
 *   { name: 'Marina S.', result: '−17 kg em 5 meses', quote: 'texto do paciente...' }
 *
 * Use apenas depoimentos reais e autorizados pelo paciente.
 */

export type Testimonial = {
  name: string
  /** Resultado objetivo, ex.: "−17 kg em 5 meses". Opcional. */
  result?: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Renato Maia',
    quote:
      'Dr. Bruno é extremamente atencioso e educado. Fui muito bem atendido e, mesmo após semanas da última consulta, o contato a distância continua com a mesma excelência do presencial. Muito obrigado pela dedicação.',
  },
  {
    name: 'Davi Dias',
    quote:
      'Dr. Bruno é um médico ímpar. Muito obrigado pelo cuidado e profissionalismo.',
  },
  {
    name: '@danii_sarmento',
    quote: 'Profissional excelente!! \u2764\uFE0F Obrigada por todo cuidado.',
  },
]
