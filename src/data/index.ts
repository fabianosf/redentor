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
  VideoItem,
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
export const LOGO_IMAGE = `${IMG_BASE}/logo200.png`

export const LINES_URL = 'https://moovitapp.com/rio_de_janeiro-322/lines/pt-br'
export const ETHICS_CHANNEL_URL = 'https://contatoseguro.com.br/pt/gruporedentor/'

export const navItems: (Omit<NavItem, 'label'> & { labelKey: TranslationKey })[] = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.history', href: '/historia' },
  { labelKey: 'nav.companies', href: '/#empresas' },
  { labelKey: 'nav.work', href: '/trabalhe-aqui' },
  { labelKey: 'nav.lines', href: LINES_URL, external: true },
  { labelKey: 'nav.contact', href: '/fale-conosco' },
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

export const stats: (Omit<StatItem, 'label'> & { labelKey: TranslationKey })[] = [
  { id: 'years', value: '75', labelKey: 'stats.years', icon: 'calendar' },
  { id: 'companies', value: '3', labelKey: 'stats.companies', icon: 'building' },
  { id: 'people', value: '3.500', labelKey: 'stats.employees', icon: 'users' },
  { id: 'fleet', value: 'Euro 6', labelKey: 'stats.fleet', icon: 'bus' },
]

export const pillars: (Omit<Pillar, 'title' | 'description'> & {
  titleKey: TranslationKey
  descriptionKey: TranslationKey
})[] = [
  {
    id: 'safety',
    titleKey: 'pillars.safetyTitle',
    descriptionKey: 'pillars.safetyDesc',
    icon: 'shield',
  },
  {
    id: 'training',
    titleKey: 'pillars.trainingTitle',
    descriptionKey: 'pillars.trainingDesc',
    icon: 'graduation',
  },
  {
    id: 'social',
    titleKey: 'pillars.socialTitle',
    descriptionKey: 'pillars.socialDesc',
    icon: 'heart',
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
}

export const newsItems: (Omit<NewsItem, 'title' | 'summary' | 'imageAlt'> & {
  titleKey: TranslationKey
  summaryKey: TranslationKey
  altKey: TranslationKey
})[] = [
  {
    id: 'vagas',
    titleKey: 'news.vagasTitle',
    summaryKey: 'news.vagasSummary',
    altKey: 'news.vagasAlt',
    imageUrl: `${IMG_BASE}/oferta-vagas.jpeg`,
    href: '/trabalhe-aqui',
  },
  {
    id: 'aniversario',
    titleKey: 'news.aniversarioTitle',
    summaryKey: 'news.aniversarioSummary',
    altKey: 'news.aniversarioAlt',
    imageUrl: `${IMG_BASE}/aniversario.jpeg`,
    href: '/fique-por-dentro',
  },
  {
    id: 'campanha',
    titleKey: 'news.campanhaTitle',
    summaryKey: 'news.campanhaSummary',
    altKey: 'news.campanhaAlt',
    imageUrl: `${IMG_BASE}/hepatites.jpeg`,
    href: '/fique-por-dentro',
  },
]

export const newsExtra: (Omit<NewsItem, 'title' | 'summary' | 'imageAlt'> & {
  title?: string
  titleKey?: TranslationKey
  summaryKey: TranslationKey
  altKey: TranslationKey
})[] = [
  {
    id: 'jae',
    title: 'Jaé',
    summaryKey: 'news.jaeSummary',
    altKey: 'news.jaeAlt',
    imageUrl: `${IMG_BASE}/jae.png`,
    href: '/fique-por-dentro',
  },
  {
    id: 'pontos-cegos',
    titleKey: 'news.pontosTitle',
    summaryKey: 'news.pontosSummary',
    altKey: 'news.pontosAlt',
    imageUrl: `${IMG_BASE}/pontos-cegos.jpg`,
    href: '/fique-por-dentro',
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
      {
        labelKey: 'footer.codeOfEthics',
        href: 'https://gruporedentor.com.br/doc/CodigoDeEtica.pdf',
        external: true,
      },
      {
        labelKey: 'footer.equalPay',
        href: 'https://gruporedentor.com.br/doc/igualdade_salarial.pdf',
        external: true,
      },
    ],
  },
  {
    titleKey: 'footer.usefulLinks',
    links: [
      { label: 'Rio Ônibus', href: 'http://www.rioonibus.com/', external: true },
      { label: 'Moovit', href: 'https://moovitapp.com/rio_de_janeiro-322/poi/pt-br', external: true },
      { label: 'Semove', href: 'https://semove.org.br/', external: true },
      {
        labelKey: 'footer.privacy',
        href: 'https://gruporedentor.com.br/doc/Politica_De_Privacidade.pdf',
        external: true,
      },
    ],
  },
  {
    titleKey: 'footer.contacts',
    links: [
      { labelKey: 'footer.contactUs', href: '/fale-conosco' },
      { labelKey: 'footer.workWithUs', href: '/trabalhe-aqui' },
      { labelKey: 'footer.lostFound', href: '/achados-e-perdidos' },
      { labelKey: 'footer.reports', href: ETHICS_CHANNEL_URL, external: true },
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

// Keep type imports used
export type { FooterSection, VideoItem }
