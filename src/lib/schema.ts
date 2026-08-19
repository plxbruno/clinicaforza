/**
 * JSON-LD da home, como um @graph.
 *
 * Antes era um unico no MedicalClinic solto. Um grafo com nos ligados por
 * `@id` diz ao Google que a clinica, o medico, o site e a pagina sao
 * entidades distintas e relacionadas — e nao um bloco de texto so. E o que
 * sustenta painel de conhecimento e pacote local.
 *
 * Tudo aqui sai de src/lib/clinic.ts e src/lib/faq.ts. Nenhum dado nasce
 * neste arquivo: se um numero mudar la, muda aqui junto.
 *
 * Fora de proposito: Review e AggregateRating. O Google descarta avaliacao
 * auto-hospedada marcada na propria LocalBusiness — e violacao da politica
 * de dados estruturados e pode render acao manual. Estrela na busca vem do
 * Google Business, nao daqui. Os depoimentos seguem so como copy visivel.
 */

import { clinic, plan, brl } from './clinic'
import { faq, faqLastReviewed } from './faq'

const id = (fragment: string) => `${clinic.site}/#${fragment}`

const CLINIC_ID = id('clinica')
const DOCTOR_ID = id('dr-bruno-galdino')
const WEBSITE_ID = id('website')
const WEBPAGE_ID = id('webpage')

/** Fotos reais da clinica, as mesmas do slideshow do hero. */
const clinicPhotos = Array.from(
  { length: 10 },
  (_, i) => `${clinic.site}/clinica/${i + 1}.jpeg`
)

const medicalClinic = {
  '@type': 'MedicalClinic',
  '@id': CLINIC_ID,
  name: clinic.name,
  legalName: clinic.legalName,
  url: clinic.site,
  description: `Clínica médica especializada em emagrecimento, performance e longevidade em ${clinic.address.city}.`,
  image: clinicPhotos,
  logo: `${clinic.site}/icon.svg`,
  telephone: clinic.phone.e164,
  /**
   * Indicador simbolico, nao numerico. O unico preco visivel na pagina e o
   * R$ 599 do primeiro mes — anunciar aqui uma faixa que o visitante nao ve
   * na tela seria dado estruturado divergente do conteudo.
   */
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${clinic.address.street}, ${clinic.address.unit}`,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.state,
    postalCode: clinic.address.postalCode,
    addressCountry: clinic.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: clinic.geo.lat,
    longitude: clinic.geo.lng,
  },
  hasMap: clinic.mapsUrl,
  openingHoursSpecification: clinic.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [...h.days],
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: { '@type': 'City', name: clinic.address.city },
  medicalSpecialty: ['Nutrition', 'PrimaryCare'],
  sameAs: [
    `https://instagram.com/${clinic.instagram.clinic}`,
    `https://instagram.com/${clinic.instagram.doctor}`,
  ],
  employee: { '@id': DOCTOR_ID },
  makesOffer: {
    '@type': 'Offer',
    name: `${plan.name} — 1º mês`,
    description: `Acompanhamento médico de ${plan.months} meses com tirzepatida inclusa, avaliação com bioimpedância e monitoramento semanal. R$ ${brl(plan.firstMonth)} no primeiro mês.`,
    url: `${clinic.site}/#plano`,
    price: plan.firstMonth,
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'City', name: clinic.address.city },
    seller: { '@id': CLINIC_ID },
    itemOffered: { '@type': 'MedicalTherapy', name: plan.name },
  },
}

/**
 * O medico como no proprio, e nao aninhado dentro da clinica. Conteudo
 * medico e YMYL: o Google pesa quem assina. Um Physician identificavel,
 * com CRM e formacao, e o sinal de E-E-A-T mais forte disponivel aqui.
 */
const physician = {
  '@type': 'Physician',
  '@id': DOCTOR_ID,
  name: clinic.doctor.name,
  identifier: clinic.doctor.crm,
  jobTitle: 'Médico',
  url: `${clinic.site}/#sobre`,
  ...(clinic.doctor.photo && { image: `${clinic.site}${clinic.doctor.photo}` }),
  worksFor: { '@id': CLINIC_ID },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidade Federal de Minas Gerais',
    alternateName: 'UFMG',
  },
  knowsAbout: [
    'Emagrecimento',
    'Obesidade',
    'Tirzepatida',
    'Agonistas de GLP-1',
    'Nutrologia',
    'Saúde metabólica',
    'Saúde hormonal',
  ],
  medicalSpecialty: ['Nutrition', 'PrimaryCare'],
  areaServed: { '@type': 'City', name: clinic.address.city },
  sameAs: [`https://instagram.com/${clinic.instagram.doctor}`],
}

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: clinic.site,
  name: clinic.name,
  inLanguage: 'pt-BR',
  publisher: { '@id': CLINIC_ID },
}

/**
 * MedicalWebPage em vez de WebPage: `reviewedBy` + `lastReviewed` declaram
 * que o conteudo clinico da pagina passou por um medico identificado.
 */
const webPage = {
  '@type': 'MedicalWebPage',
  '@id': WEBPAGE_ID,
  url: clinic.site,
  name: `Emagrecimento em ${clinic.address.city} | Tirzepatida R$ ${brl(plan.firstMonth)}`,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': CLINIC_ID },
  inLanguage: 'pt-BR',
  primaryImageOfPage: `${clinic.site}/opengraph-image`,
  reviewedBy: { '@id': DOCTOR_ID },
  lastReviewed: faqLastReviewed,
  audience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
}

const faqPage = {
  '@type': 'FAQPage',
  '@id': id('duvidas'),
  isPartOf: { '@id': WEBPAGE_ID },
  inLanguage: 'pt-BR',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [medicalClinic, physician, website, webPage, faqPage],
}
