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

import { clinic, homeTitle, pricing, brl } from './clinic'
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
   * Indicador simbolico, nao numerico. Os precos exatos estao em `makesOffer`,
   * que espelha exatamente os dois numeros do <Pricing />; uma faixa solta
   * aqui seria dado estruturado sem contrapartida na tela.
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
  /**
   * As duas ofertas sao exatamente as duas do <Pricing />, e na mesma ordem.
   *
   * A consulta tem `price` — e um valor fechado. O plano tem
   * `UnitPriceSpecification` com `minPrice` e nao `price`, porque na tela ele
   * e um "a partir de" mensal: declarar 1190 como preco firme prometeria no
   * dado estruturado um numero que a pagina nao promete.
   */
  makesOffer: [
    {
      '@type': 'Offer',
      name: pricing.consultation.name,
      description: `Consulta médica com ${clinic.doctor.name}, com avaliação física completa e bioimpedância. R$ ${brl(pricing.consultation.price)}.`,
      url: `${clinic.site}/#plano`,
      price: pricing.consultation.price,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'City', name: clinic.address.city },
      seller: { '@id': CLINIC_ID },
      itemOffered: {
        '@type': 'MedicalProcedure',
        name: 'Consulta de avaliação para emagrecimento',
      },
    },
    {
      '@type': 'Offer',
      name: pricing.plan.name,
      description: `Acompanhamento médico mensal com consultas de retorno, monitoramento semanal e tirzepatida inclusa quando há indicação clínica. A partir de R$ ${brl(pricing.plan.from)} por mês.`,
      url: `${clinic.site}/#plano`,
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        minPrice: pricing.plan.from,
        priceCurrency: 'BRL',
        unitCode: 'MON',
        unitText: 'mês',
      },
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'City', name: clinic.address.city },
      seller: { '@id': CLINIC_ID },
      itemOffered: { '@type': 'MedicalTherapy', name: pricing.plan.name },
    },
  ],
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
  name: homeTitle,
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
