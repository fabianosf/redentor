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

export const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'História', href: '/historia' },
  { label: 'Empresas', href: '/#empresas' },
  { label: 'Trabalhe', href: '/trabalhe-aqui' },
  { label: 'Linhas', href: LINES_URL, external: true },
  { label: 'Contato', href: '/fale-conosco' },
]

export const companies: Company[] = [
  {
    id: 'redentor',
    name: 'Viação Redentor',
    description: 'Tradição e confiança que conectam o Rio desde 1950.',
    color: 'bg-navy',
    logoInitial: 'R',
    logoImage: `${IMG_BASE}/logo-redentor.png`,
    href: '/historia#empresas',
  },
  {
    id: 'futuro',
    name: 'Transportes Futuro',
    description: 'Compromisso com a modernidade e o futuro da mobilidade.',
    color: 'bg-navy',
    logoInitial: 'F',
    logoImage: `${IMG_BASE}/logo-futuro.png`,
    href: '/historia#empresas',
  },
  {
    id: 'barra',
    name: 'Transportes Barra',
    description: 'Qualidade e eficiência nas linhas da Zona Oeste e Barra da Tijuca.',
    color: 'bg-navy',
    logoInitial: 'B',
    logoImage: `${IMG_BASE}/logo-barra.png`,
    href: '/historia#empresas',
  },
]

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Mais de 70 anos levando o Rio',
    subtitle: 'Viação Redentor, Transportes Futuro e Transportes Barra',
    imageUrl: `${IMG_BASE}/foto-1.jpg`,
    imageAlt: 'Ônibus azul e branco do Grupo Redentor no Rio de Janeiro',
  },
  {
    id: 2,
    title: 'Mais de 70 anos levando o Rio',
    subtitle: 'Viação Redentor, Transportes Futuro e Transportes Barra',
    imageUrl: `${IMG_BASE}/viacao-05.jpg`,
    imageAlt: 'Frota da Viação Redentor',
  },
  {
    id: 3,
    title: 'Mais de 70 anos levando o Rio',
    subtitle: 'Viação Redentor, Transportes Futuro e Transportes Barra',
    imageUrl: `${IMG_BASE}/viacao-07.jpg`,
    imageAlt: 'Ônibus do Grupo Redentor em operação',
  },
]

export const heroContent = {
  label: 'DESDE 1950',
  title: 'Mais de 70 anos levando o Rio',
  subtitle: 'Viação Redentor, Transportes Futuro e Transportes Barra',
  primaryCta: { label: 'Ver vagas', href: '/trabalhe-aqui' },
  secondaryCta: { label: 'Consultar linhas', href: LINES_URL, external: true },
}

export const stats: StatItem[] = [
  { id: 'years', value: '75', label: 'anos', icon: 'calendar' },
  { id: 'companies', value: '3', label: 'empresas', icon: 'building' },
  { id: 'people', value: '3.500', label: 'colaboradores', icon: 'users' },
  { id: 'fleet', value: 'Euro 6', label: 'frota', icon: 'bus' },
]

export const pillars: Pillar[] = [
  {
    id: 'safety',
    title: 'Segurança',
    description: 'Prioridade em segurança para passageiros e colaboradores em cada viagem.',
    icon: 'shield',
  },
  {
    id: 'training',
    title: 'Capacitação',
    description: 'Investimento contínuo no desenvolvimento e formação da nossa equipe.',
    icon: 'graduation',
  },
  {
    id: 'social',
    title: 'Responsabilidade Social',
    description: 'Compromisso com a comunidade e o desenvolvimento sustentável do Rio.',
    icon: 'heart',
  },
]

export const jobOpenings: JobOpening[] = [
  { id: 'motorista', title: 'Motorista (D e E)' },
  { id: 'mecanico', title: 'Mecânico Diesel' },
  { id: 'eletricista', title: 'Eletricista Diesel' },
  { id: 'refrigeracao', title: 'Mecânico de refrigeração veicular' },
]

export const jobsInfo = {
  schedule: 'Inscrições de segunda a sexta-feira, das 08h às 16h.',
  addresses: [
    'Estrada do Gabinal nº 1395 – Freguesia / Jacarepaguá',
    'Rua Anália Franco nº 150 – Vila Valqueire',
  ],
  email: 'rh@gruporedentor.com.br',
}

export const newsItems: NewsItem[] = [
  {
    id: 'vagas',
    title: 'Trabalhe conosco',
    summary: 'Estamos com vagas abertas. Confira cargos e endereços de inscrição.',
    imageUrl: `${IMG_BASE}/oferta-vagas.jpeg`,
    imageAlt: 'Oferta de vagas do Grupo Redentor',
    href: '/trabalhe-aqui',
  },
  {
    id: 'aniversario',
    title: 'Aniversário do Grupo Redentor',
    summary: 'Celebramos mais um ano conectando o Rio de Janeiro.',
    imageUrl: `${IMG_BASE}/aniversario.jpeg`,
    imageAlt: 'Aniversário do Grupo Redentor',
    href: '/fique-por-dentro',
  },
  {
    id: 'campanha',
    title: 'Campanhas e ações sociais',
    summary: 'Iniciativas de saúde, cidadania e cuidado com a comunidade.',
    imageUrl: `${IMG_BASE}/hepatites.jpeg`,
    imageAlt: 'Campanha de conscientização do Grupo Redentor',
    href: '/fique-por-dentro',
  },
]

export const newsExtra: NewsItem[] = [
  {
    id: 'jae',
    title: 'Jaé',
    summary: 'Informações e campanhas sobre o cartão Jaé.',
    imageUrl: `${IMG_BASE}/jae.png`,
    imageAlt: 'Campanha Jaé',
    href: '/fique-por-dentro',
  },
  {
    id: 'pontos-cegos',
    title: 'Pontos cegos',
    summary: 'Conscientização sobre segurança no trânsito.',
    imageUrl: `${IMG_BASE}/pontos-cegos.jpg`,
    imageAlt: 'Campanha pontos cegos',
    href: '/fique-por-dentro',
  },
]

export const timeline: TimelineEvent[] = [
  {
    id: '1950',
    year: '1950',
    title: 'Nascimento da Redentor',
    description:
      'Com seis ônibus usados e menos de 20 colaboradores, nasce a Viação Redentor na Estrada Intendente Magalhães, Vila Valqueire.',
  },
  {
    id: '1970',
    year: '1970s',
    title: 'Nova sede e inovação',
    description:
      'Inauguração da sede na Estrada do Gabinal e pioneirismo com ônibus urbanos com ar-condicionado — os “Fresquinhos”.',
  },
  {
    id: '1990',
    year: '1991–1997',
    title: 'Expansão do grupo',
    description:
      'Surgem Transportes Barra (1991) e Transportes Futuro (1997), formando o Grupo Redentor com empresas irmãs.',
  },
  {
    id: '2010',
    year: '2010',
    title: 'Consórcio Transcarioca',
    description:
      'O Grupo integra o novo sistema de consórcios da cidade e passa a atuar também no eixo do BRT.',
  },
  {
    id: 'hoje',
    year: 'Hoje',
    title: '75 anos e frota Euro 6',
    description:
      'Mais de 3.500 colaboradores e frota moderna Euro 6, mantendo compromisso com segurança, ética e mobilidade no Rio.',
  },
]

export const videos: VideoItem[] = [
  {
    youtubeId: 'AkIBJTUVrCU',
    title: 'Memórias afetivas',
    description:
      'Funcionário desde 1983, Noé está perto de completar 40 anos no Grupo Redentor.',
  },
  {
    youtubeId: 'ekAoVTmyhps',
    title: 'Trabalho de preparo',
    description:
      'Como funciona o treinamento de motoristas antes de sair para as ruas.',
  },
  {
    youtubeId: 'bId5n_cj2O4',
    title: 'Capacitação de motoristas',
    description:
      'Treinamento teórico e prático, incluindo cuidados com ciclistas e cadeirantes.',
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
    { label: 'RH Redentor', value: 'rh@gruporedentor.com.br' },
    { label: 'RH Barra', value: 'rh@transportesbarra.com.br' },
    { label: 'Acidentes', value: 'acidentes@gruporedentor.com.br' },
  ],
}

export const footerSections: FooterSection[] = [
  {
    title: 'Empresas',
    links: [
      { label: 'Viação Redentor', href: '/viacao-redentor' },
      { label: 'Transportes Futuro', href: '/transportes-futuro' },
      { label: 'Transportes Barra', href: '/transportes-barra' },
      {
        label: 'Código de Ética',
        href: 'https://gruporedentor.com.br/doc/CodigoDeEtica.pdf',
        external: true,
      },
      {
        label: 'Igualdade Salarial',
        href: 'https://gruporedentor.com.br/doc/igualdade_salarial.pdf',
        external: true,
      },
    ],
  },
  {
    title: 'Links úteis',
    links: [
      { label: 'Rio Ônibus', href: 'http://www.rioonibus.com/', external: true },
      { label: 'Moovit', href: 'https://moovitapp.com/rio_de_janeiro-322/poi/pt-br', external: true },
      { label: 'Semove', href: 'https://semove.org.br/', external: true },
      {
        label: 'Política de Privacidade',
        href: 'https://gruporedentor.com.br/doc/Politica_De_Privacidade.pdf',
        external: true,
      },
    ],
  },
  {
    title: 'Contatos',
    links: [
      { label: 'Fale Conosco', href: '/fale-conosco' },
      { label: 'Trabalhe Conosco', href: '/trabalhe-aqui' },
      { label: 'Achados e Perdidos', href: '/achados-e-perdidos' },
      { label: 'Denúncias', href: ETHICS_CHANNEL_URL, external: true },
    ],
  },
]

export const jobRoles = [
  'Motorista (D e E)',
  'Mecânico Diesel',
  'Eletricista Diesel',
  'Mecânico de refrigeração veicular',
  'Outro',
]
