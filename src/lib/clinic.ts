/**
 * Fonte unica de verdade para os dados da clinica.
 * Qualquer numero, endereco ou preco que apareca no site sai daqui —
 * antes o WhatsApp estava hardcoded em quatro arquivos com dois numeros diferentes.
 */

export const clinic = {
  name: 'Clínica Forza',
  legalName: 'Clínica Forza',
  site: 'https://www.clinicaforzabh.com.br',

  doctor: {
    name: 'Dr. Bruno Galdino',
    crm: 'CRM-MG 98375',
    /**
     * Foto real do medico, em /public. Deixe como null enquanto nao houver uma:
     * a secao <Doctor /> muda sozinha para o layout centrado, sem foto.
     * Nunca apontar para banco de imagens — a legenda atribui o CRM a quem aparece.
     */
    photo: '/doctor.jpg' as string | null,
  },

  whatsapp: '5531983239199',
  whatsappMessage: 'Olá. Quero agendar uma consulta com o Dr. Bruno.',

  /**
   * Mesmo numero do WhatsApp, nos dois formatos que o site precisa:
   * `e164` vai no `telephone` do JSON-LD, `display` e o que o humano le.
   * Precisa bater caractere por caractere com o Google Business — a
   * consistencia de NAP e o que sustenta o pacote local.
   *
   * Nao usar em href tel:. O atendimento e so por WhatsApp; o numero
   * aparece na tela como dado de contato, nao como convite para ligar.
   */
  phone: {
    e164: '+5531983239199',
    display: '(31) 98323-9199',
  },

  instagram: {
    clinic: 'clinicaforzabh',
    doctor: 'drbrunogaldino',
  },

  address: {
    street: 'Rua Rio Grande do Norte, 726',
    unit: 'Sala\u00A0305',
    district: 'Savassi',
    city: 'Belo Horizonte',
    state: 'MG',
    postalCode: '30130-135',
    country: 'BR',
  },

  geo: { lat: -19.9319633, lng: -43.9312381 },

  mapsUrl: 'https://maps.app.goo.gl/RSGhp7P69Mqa55ZB6',
  // Embed gratuito do Google: centraliza nas coordenadas mas nao desenha
  // marcador (isso exigiria a Maps Embed API com chave). O pino e renderizado
  // por cima, pela propria pagina, em <MapSection />.
  mapsEmbedUrl:
    'https://www.google.com/maps?q=-19.9319633,-43.9312381&z=17&hl=pt-BR&output=embed',

  /**
   * Horario de funcionamento. `days` usa a abreviacao de schema.org
   * (openingHoursSpecification); `label` e a versao que vai para a tela.
   * Alterar aqui exige alterar tambem no Google Business, senao o Google
   * ve dois horarios diferentes para o mesmo negocio.
   */
  hours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
      label: 'Segunda a sexta, 8h às 19h',
    },
    {
      days: ['Saturday'],
      opens: '08:00',
      closes: '12:00',
      label: 'Sábado, 8h às 12h',
    },
  ],
} as const

/** Endereco em uma linha, usado no rodape e no JSON-LD. */
export const addressLine = [
  clinic.address.street,
  clinic.address.unit,
  clinic.address.district,
  `${clinic.address.city}, ${clinic.address.state}`,
].join(' · ')

/**
 * O titulo da home. Vive aqui, e nao inline no layout, porque quatro lugares
 * precisam dizer exatamente a mesma coisa: o <title>, o og:title, o
 * twitter:title e o `name` do MedicalWebPage no JSON-LD. Divergencia entre
 * eles e sinal ruim para a busca.
 *
 * Tem 60 caracteres — exatamente o corte do resultado de busca do Google.
 * Nao alongar: qualquer palavra a mais some com um pedaco de "Belo Horizonte".
 * E por isso tambem que o titulo da home e `absolute`, sem o sufixo de marca
 * do `template`.
 */
export const homeTitle =
  'Clínica de Nutrologia e Emagrecimento Savassi Belo Horizonte'

/**
 * DESATIVADA. A promocao de lancamento (1o mes por R$ 599) saiu do ar: o
 * <Plan /> nao e mais renderizado em `src/app/page.tsx`, e nenhum numero
 * daqui aparece mais em metadata, OG ou JSON-LD.
 *
 * O objeto fica inteiro de proposito. Se a promocao voltar, basta descomentar
 * o <Plan /> na home; nada aqui precisa ser reescrito. Nao apagar.
 */
export const plan = {
  name: 'Plano de Emagrecimento com Tirzepatida',
  badge: 'Promoção por tempo limitado',
  firstMonth: 599,
  months: 3,
  /**
   * ATENCAO: nextMonths e total nao sao renderizados em lugar nenhum, e
   * tambem sairam do JSON-LD de proposito. Dado estruturado precisa refletir
   * o que esta na tela, e a unica cifra visivel e o R$ 599 do primeiro mes.
   * Se um dia o custo cheio do plano for exibido no card do <Plan />, estes
   * numeros voltam para o schema junto — nunca so no schema.
   */
  nextMonths: 1490,
  /** 599 + 1490 + 1490 */
  total: 3579,
  features: [
    'Consulta médica com o Dr. Bruno Galdino',
    'Avaliação física completa com bioimpedância',
    'Tirzepatida inclusa durante todo o plano',
    'Monitoramento semanal da evolução',
    'Suporte direto via WhatsApp',
    'Consultas de retorno inclusas',
  ],
} as const

/**
 * Os valores que a pagina realmente mostra, no <Pricing />.
 *
 * Duas linhas e nao um pacote fechado: a consulta e um preco cheio e
 * definitivo, o plano e um piso. `plan.from` e "a partir de" porque dose,
 * duracao e o que a pessoa ja usa mudam a mensalidade — prometer um numero
 * unico aqui seria prometer o que a consulta ainda nao decidiu.
 *
 * A medicacao entra como condicional em todo lugar ("quando indicada"): a
 * tirzepatida e prescricao, e o site nao pode sugerir que ela sai junto com
 * o plano para qualquer pessoa que pagar.
 */
export const pricing = {
  consultation: {
    name: 'Consulta',
    price: 450,
    note: 'Avaliação clínica completa, sem compromisso de plano',
    features: [
      'Consulta médica com o Dr. Bruno Galdino',
      'Avaliação física completa com bioimpedância',
      'Leitura dos seus exames e do seu histórico',
      'Conduta e plano de tratamento definidos na hora',
    ],
  },
  plan: {
    name: 'Plano de emagrecimento',
    from: 1190,
    period: 'por mês',
    note: 'Acompanhamento contínuo com medicação inclusa quando indicada',
    features: [
      'Consultas de retorno inclusas',
      'Monitoramento semanal da evolução',
      'Tirzepatida inclusa quando houver indicação clínica',
      'Ajuste de dose acompanhado de perto',
      'Suporte direto via WhatsApp',
    ],
  },
} as const

/** Formata em Real sem centavos: 1490 -> "1.490" */
export const brl = (value: number) =>
  value.toLocaleString('pt-BR', { maximumFractionDigits: 0 })

/**
 * Link do WhatsApp. O `source` identifica de qual CTA veio o clique —
 * usado tambem como rotulo no evento de analytics.
 */
export const whatsappUrl = (source: string) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    clinic.whatsappMessage
  )}&utm_source=site&utm_medium=cta&utm_campaign=${encodeURIComponent(source)}`
