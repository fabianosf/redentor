import type {
  NavItem,
  Company,
  HeroSlide,
  FooterSection,
  StatItem,
  Pillar,
  JobOpening,
  NewsItem,
  TimelineEvent,
  ContactAddress,
} from '@/types'
import type { TranslationKey } from '@/i18n'

function asset(path: string) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.replace(/^\//, '')}`
}

export const MEDIA_BASE = asset('assets')
export const IMG_BASE = asset('assets/img')

export const FALLBACK_IMAGE = asset('assets/redentor-placeholder.svg')
export const LOGO_IMAGE = `${IMG_BASE}/grupo_redentor.png`

export const FOUNDING_YEAR = 1950
export const GROUP_YEARS = new Date().getFullYear() - FOUNDING_YEAR

export const LINES_URL =
  'https://moovitapp.com/index/pt-br/transporte_p%C3%BAblico-lines-Rio_de_Janeiro-322-857285'
export const BRT_RIO_URL = 'https://www.brtrio.com/'
export const ETHICS_CHANNEL_URL = 'https://contatoseguro.com.br/pt/gruporedentor/'
export const CODE_OF_ETHICS_URL = 'https://gruporedentor.com.br/doc/CodigoDeEtica.pdf'
export const EQUAL_PAY_URL = 'https://gruporedentor.com.br/doc/igualdade_salarial.pdf'
export const PRIVACY_URL = 'https://gruporedentor.com.br/doc/Politica_De_Privacidade.pdf'

export const dpoInfo = {
  company: 'Assessoria Técnica Tailor Eireli',
  cnpj: '00.976.398/0004-49',
  addressLines: [
    'Av. Dr. Hugo Beolchi, 445, Conj. 61',
    'Vila Guarani - São Paulo/SP',
    'CEP 04310-030',
  ],
  email: 'dpo@tailor.com.br',
}

export const navItems: (Omit<NavItem, 'label'> & { labelKey: TranslationKey })[] = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.history', href: '/historia' },
  { labelKey: 'nav.companies', href: '/#empresas' },
  { labelKey: 'nav.lines', href: LINES_URL, external: true },
  {
    labelKey: 'nav.reportChannel',
    href: ETHICS_CHANNEL_URL,
    external: true,
  },
  { labelKey: 'nav.contact', href: '/fale-conosco' },
]

export const quickAccessItems: {
  id: string
  titleKey: TranslationKey
  descKey: TranslationKey
  href: string
  external?: boolean
  icon: 'bus' | 'package' | 'shield'
}[] = [
  {
    id: 'lines',
    titleKey: 'quickAccess.linesTitle',
    descKey: 'quickAccess.linesDesc',
    href: LINES_URL,
    external: true,
    icon: 'bus',
  },
  {
    id: 'lost',
    titleKey: 'quickAccess.lostTitle',
    descKey: 'quickAccess.lostDesc',
    href: '/achados-e-perdidos',
    icon: 'package',
  },
  {
    id: 'report',
    titleKey: 'quickAccess.reportTitle',
    descKey: 'quickAccess.reportDesc',
    href: ETHICS_CHANNEL_URL,
    external: true,
    icon: 'shield',
  },
]

export const companies: (Company & { descriptionKey: TranslationKey })[] = [
  {
    id: 'redentor',
    name: 'Viação Redentor',
    description: '',
    descriptionKey: 'companies.redentorDesc',
    color: 'bg-navy',
    logoInitial: 'R',
    logoImage: `${IMG_BASE}/logo-redentor.png`,
    href: '/historia#empresas',
  },
  {
    id: 'futuro',
    name: 'Transportes Futuro',
    description: '',
    descriptionKey: 'companies.futuroDesc',
    color: 'bg-navy',
    logoInitial: 'F',
    logoImage: `${IMG_BASE}/logo-futuro.png`,
    href: '/historia#empresas',
  },
  {
    id: 'barra',
    name: 'Transportes Barra',
    description: '',
    descriptionKey: 'companies.barraDesc',
    color: 'bg-navy',
    logoInitial: 'B',
    logoImage: `${IMG_BASE}/logo-barra.png`,
    href: '/historia#empresas',
  },
]

export const heroSlides: (Omit<HeroSlide, 'title' | 'subtitle' | 'imageAlt'> & {
  altKey: TranslationKey
})[] = [
  {
    id: 1,
    imageUrl: `${IMG_BASE}/hero-onibus.jpg`,
    altKey: 'hero.alt1',
  },
  {
    id: 2,
    imageUrl: `${IMG_BASE}/viacao-05.jpg`,
    altKey: 'hero.alt2',
  },
  {
    id: 3,
    imageUrl: `${IMG_BASE}/viacao-07.jpg`,
    altKey: 'hero.alt3',
  },
]

export const heroContent = {
  primaryCtaHref: '/trabalhe-aqui',
  secondaryCtaHref: LINES_URL,
}

export const stats: (Omit<StatItem, 'label' | 'value'> & {
  value: string
  labelKey: TranslationKey
})[] = [
  { id: 'years', value: String(GROUP_YEARS), labelKey: 'stats.years', icon: 'calendar' },
  { id: 'companies', value: '3', labelKey: 'stats.companies', icon: 'building' },
  { id: 'people', value: '3.500', labelKey: 'stats.employees', icon: 'users' },
  { id: 'fleet', value: 'Euro 6', labelKey: 'stats.fleet', icon: 'bus' },
]

export const pillars: (Omit<Pillar, 'title' | 'description'> & {
  titleKey: TranslationKey
  descriptionKey: TranslationKey
  href: string
  imageUrl?: string
  altKey?: TranslationKey
})[] = [
  {
    id: 'safety',
    titleKey: 'pillars.safetyTitle',
    descriptionKey: 'pillars.safetyDesc',
    icon: 'shield',
    href: '/fique-por-dentro#seguranca',
    imageUrl: `${IMG_BASE}/pontos-cegos.jpg`,
    altKey: 'news.pontosAlt',
  },
  {
    id: 'training',
    titleKey: 'pillars.trainingTitle',
    descriptionKey: 'pillars.trainingDesc',
    icon: 'graduation',
    href: '/fique-por-dentro#capacitacao',
  },
  {
    id: 'social',
    titleKey: 'pillars.socialTitle',
    descriptionKey: 'pillars.socialDesc',
    icon: 'heart',
    href: '/fique-por-dentro#responsabilidade-social',
    imageUrl: `${IMG_BASE}/setembro-amarelo-card.jpg`,
    altKey: 'news.campanhaAlt',
  },
]

export const jobOpenings: (JobOpening & { titleKey: TranslationKey })[] = [
  { id: 'motorista', title: 'Motorista (D e E)', titleKey: 'jobs.motorista' },
  { id: 'mecanico', title: 'Mecânico Diesel', titleKey: 'jobs.mecanico' },
  { id: 'eletricista', title: 'Eletricista Diesel', titleKey: 'jobs.eletricista' },
  { id: 'refrigeracao', title: 'Mecânico de refrigeração veicular', titleKey: 'jobs.refrigeracao' },
]

export const jobsInfo = {
  addresses: [
    'Estrada do Gabinal nº 1395 – Freguesia / Jacarepaguá',
    'Rua Anália Franco nº 150 – Vila Valqueire',
  ],
  email: 'rh@gruporedentor.com.br',
  emails: [
    { label: 'Viação Redentor', value: 'rh@gruporedentor.com.br' },
    { label: 'Transportes Barra', value: 'rh@transportesbarra.com.br' },
  ],
  schedule: [
    { dayKey: 'work.dayMon' as TranslationKey, hoursKey: 'work.hoursWeekday' as TranslationKey },
    { dayKey: 'work.dayTue' as TranslationKey, hoursKey: 'work.hoursWeekday' as TranslationKey },
    { dayKey: 'work.dayWed' as TranslationKey, hoursKey: 'work.hoursWeekday' as TranslationKey },
    { dayKey: 'work.dayThu' as TranslationKey, hoursKey: 'work.hoursWeekday' as TranslationKey },
    { dayKey: 'work.dayFri' as TranslationKey, hoursKey: 'work.hoursFriday' as TranslationKey },
    { dayKey: 'work.daySat' as TranslationKey, hoursKey: 'work.hoursClosed' as TranslationKey },
    { dayKey: 'work.daySun' as TranslationKey, hoursKey: 'work.hoursClosed' as TranslationKey },
  ],
}

export const trainingItems: TranslationKey[] = [
  'work.training1',
  'work.training2',
  'work.training3',
  'work.training4',
  'work.training5',
  'work.training6',
  'work.training7',
  'work.training8',
  'work.training9',
  'work.training10',
]

/** Novidades: campanhas e comunicados recentes (atualização mensal). */
export const newsItems: (Omit<NewsItem, 'title' | 'summary' | 'imageAlt'> & {
  titleKey: TranslationKey
  summaryKey: TranslationKey
  altKey: TranslationKey
  categoryKey: TranslationKey
  /** cover preenche o card; contain evita corte em artes paisagem (ex.: vagas). */
  imageFit?: 'cover' | 'contain'
})[] = [
  {
    id: 'vagas',
    titleKey: 'news.vagasTitle',
    summaryKey: 'news.vagasSummary',
    altKey: 'news.vagasAlt',
    categoryKey: 'news.vagasCategory',
    imageUrl: `${IMG_BASE}/oferta-vagas-card.jpeg`,
    href: '/trabalhe-aqui',
    imageFit: 'cover',
  },
  {
    id: 'aniversario',
    titleKey: 'news.aniversarioTitle',
    summaryKey: 'news.aniversarioSummary',
    altKey: 'news.aniversarioAlt',
    categoryKey: 'news.aniversarioCategory',
    imageUrl: `${IMG_BASE}/aniversario.jpeg`,
    href: '/fique-por-dentro',
    imageFit: 'cover',
  },
  {
    id: 'campanha',
    titleKey: 'news.campanhaTitle',
    summaryKey: 'news.campanhaSummary',
    altKey: 'news.campanhaAlt',
    categoryKey: 'news.campanhaCategory',
    imageUrl: `${IMG_BASE}/setembro-amarelo-card.jpg`,
    href: '/fique-por-dentro#responsabilidade-social',
    imageFit: 'cover',
  },
]

/** Itens extras de Novidades (pagina Fique por Dentro). */
export const newsExtraItems: (Omit<NewsItem, 'title' | 'summary' | 'imageAlt'> & {
  titleKey: TranslationKey
  summaryKey: TranslationKey
  altKey: TranslationKey
  imageFit?: 'cover' | 'contain'
})[] = [
  {
    id: 'jae',
    titleKey: 'news.jaeTitle',
    summaryKey: 'news.jaeSummary',
    altKey: 'news.jaeAlt',
    imageUrl: `${IMG_BASE}/jae.png`,
    href: '/fique-por-dentro#novidades',
    imageFit: 'contain',
  },
]

export const socialItems: (Omit<NewsItem, 'title' | 'summary' | 'imageAlt'> & {
  titleKey: TranslationKey
  summaryKey: TranslationKey
  altKey: TranslationKey
})[] = [
  {
    id: 'setembro-amarelo',
    titleKey: 'topics.socialItemTitle',
    summaryKey: 'topics.socialItemSummary',
    altKey: 'news.campanhaAlt',
    imageUrl: `${IMG_BASE}/setembro-amarelo-card.jpg`,
    href: '/fique-por-dentro#responsabilidade-social',
  },
]

export const safetyItems: (Omit<NewsItem, 'title' | 'summary' | 'imageAlt'> & {
  titleKey: TranslationKey
  summaryKey: TranslationKey
  altKey: TranslationKey
})[] = [
  {
    id: 'pontos-cegos',
    titleKey: 'news.pontosTitle',
    summaryKey: 'news.pontosSummary',
    altKey: 'news.pontosAlt',
    imageUrl: `${IMG_BASE}/pontos-cegos.jpg`,
    href: '/fique-por-dentro#seguranca',
  },
]

export const timeline: (Omit<TimelineEvent, 'title' | 'description' | 'year'> & {
  year?: string
  yearKey?: TranslationKey
  titleKey: TranslationKey
  descriptionKey: TranslationKey
})[] = [
  {
    id: '1950',
    year: '1950',
    titleKey: 'history.t1950Title',
    descriptionKey: 'history.t1950Desc',
  },
  {
    id: '1970',
    yearKey: 'history.t1970Year',
    titleKey: 'history.t1970Title',
    descriptionKey: 'history.t1970Desc',
  },
  {
    id: '1990',
    yearKey: 'history.t1990Year',
    titleKey: 'history.t1990Title',
    descriptionKey: 'history.t1990Desc',
  },
  {
    id: '2010',
    year: '2010',
    titleKey: 'history.t2010Title',
    descriptionKey: 'history.t2010Desc',
  },
  {
    id: 'hoje',
    yearKey: 'history.tTodayYear',
    titleKey: 'history.tTodayTitle',
    descriptionKey: 'history.tTodayDesc',
  },
]

export const videos: {
  youtubeId: string
  titleKey: TranslationKey
  descriptionKey: TranslationKey
}[] = [
  {
    youtubeId: 'AkIBJTUVrCU',
    titleKey: 'inside.video1Title',
    descriptionKey: 'inside.video1Desc',
  },
  {
    youtubeId: 'ekAoVTmyhps',
    titleKey: 'inside.video2Title',
    descriptionKey: 'inside.video2Desc',
  },
  {
    youtubeId: 'bId5n_cj2O4',
    titleKey: 'inside.video3Title',
    descriptionKey: 'inside.video3Desc',
  },
]

export const contactAddresses: ContactAddress[] = [
  {
    empresa: 'Viação Redentor',
    logradouro: 'Estrada do Gabinal, 1395 – Freguesia de Jacarepaguá',
    cidade: 'Rio de Janeiro – RJ, 22763-153',
  },
  {
    empresa: 'Transportes Futuro',
    logradouro: 'Estrada do Gabinal, 1381 – Freguesia de Jacarepaguá',
    cidade: 'Rio de Janeiro – RJ, 22763-153',
  },
  {
    empresa: 'Transportes Barra',
    logradouro: 'Rua Anália Franco, 150 – Vila Valqueire',
    cidade: 'Rio de Janeiro – RJ, 21330-120',
  },
]

export const contactInfo = {
  phones: [
    { label: 'Viação Redentor', value: '(21) 2445-0910', tel: '+552124450910' },
    { label: 'Transportes Barra', value: '(21) 3515-4666', tel: '+552135154666' },
  ],
  emails: [
    { labelKey: 'contact.emailRhRedentor' as TranslationKey, value: 'rh@gruporedentor.com.br' },
    { labelKey: 'contact.emailRhBarra' as TranslationKey, value: 'rh@transportesbarra.com.br' },
    { labelKey: 'contact.emailAccidents' as TranslationKey, value: 'acidentes@gruporedentor.com.br' },
  ],
}

export const footerSections: {
  titleKey: TranslationKey
  links: {
    labelKey?: TranslationKey
    label?: string
    href: string
    external?: boolean
  }[]
}[] = [
  {
    titleKey: 'footer.companies',
    links: [
      { label: 'Viação Redentor', href: '/viacao-redentor' },
      { label: 'Transportes Futuro', href: '/transportes-futuro' },
      { label: 'Transportes Barra', href: '/transportes-barra' },
    ],
  },
  {
    titleKey: 'footer.compliance',
    links: [
      { labelKey: 'footer.codeOfEthics', href: CODE_OF_ETHICS_URL, external: true },
      { labelKey: 'footer.privacy', href: PRIVACY_URL, external: true },
      { labelKey: 'footer.equalPay', href: EQUAL_PAY_URL, external: true },
      { labelKey: 'footer.reportChannel', href: ETHICS_CHANNEL_URL, external: true },
    ],
  },
  {
    titleKey: 'footer.usefulLinks',
    links: [
      { labelKey: 'footer.linesLink', href: LINES_URL, external: true },
      { label: 'BRT Rio', href: BRT_RIO_URL, external: true },
      { label: 'Rio Ônibus', href: 'http://www.rioonibus.com/', external: true },
      { label: 'Semove', href: 'https://semove.org.br/', external: true },
    ],
  },
  {
    titleKey: 'footer.contacts',
    links: [
      { labelKey: 'footer.contactUs', href: '/fale-conosco' },
      { labelKey: 'footer.workWithUs', href: '/trabalhe-aqui' },
      { labelKey: 'footer.lostFound', href: '/achados-e-perdidos' },
      { labelKey: 'footer.reportChannel', href: ETHICS_CHANNEL_URL, external: true },
    ],
  },
]

export const jobRoleKeys: TranslationKey[] = [
  'jobs.motorista',
  'jobs.mecanico',
  'jobs.eletricista',
  'jobs.refrigeracao',
  'jobs.other',
]

export type { FooterSection }
