import type { NavItem, Company, HeroSlide, FooterSection, GalleryItem } from '@/types'

const BASE = 'https://gruporedentor.com.br/img'

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'História', href: '/historia' },
  { label: 'Trabalhe aqui', href: '/trabalhe-aqui' },
  { label: 'Linhas', href: 'https://moovitapp.com/rio_de_janeiro-322/lines/pt-br', external: true },
  { label: 'Achados e perdidos', href: '/achados-e-perdidos', disabled: true },
  { label: 'Fale conosco', href: '/fale-conosco' },
  { label: 'Fique por dentro', href: '/fique-por-dentro' },
]

export const companies: Company[] = [
  {
    id: 'redentor',
    name: 'Viação Redentor',
    description: '',
    color: 'bg-blue-700',
    logoInitial: 'R',
    logoImage: `${BASE}/logo%20redentor%20novo%20-%20Copia.png`,
    href: '/historia',
  },
  {
    id: 'futuro',
    name: 'Transportes Futuro',
    description: '',
    color: 'bg-green-700',
    logoInitial: 'F',
    logoImage: `${BASE}/logo%20novo%20futuro.png`,
    href: '/historia',
  },
  {
    id: 'barra',
    name: 'Transportes Barra',
    description: '',
    color: 'bg-orange-600',
    logoInitial: 'B',
    logoImage: `${BASE}/logo%20barra%20novo%20-%20Copia.png`,
    href: '/historia',
  },
]

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: '',
    subtitle: '',
    imageUrl: `${BASE}/Foto_1.jpg`,
    imageAlt: 'Ônibus da Viação Redentor',
  },
  {
    id: 2,
    title: '',
    subtitle: '',
    imageUrl: `${BASE}/Via%C3%A7%C3%A3o_Redentor_05.jpg`,
    imageAlt: 'Viação Redentor',
  },
  {
    id: 3,
    title: '',
    subtitle: '',
    imageUrl: `${BASE}/Via%C3%A7%C3%A3o_Redentor_07.jpg`,
    imageAlt: 'Viação Redentor',
  },
  {
    id: 4,
    title: '',
    subtitle: '',
    imageUrl: `${BASE}/Foto_antiga_redentor.jpg`,
    imageAlt: 'Foto antiga da Viação Redentor',
  },
  {
    id: 5,
    title: '',
    subtitle: '',
    imageUrl: `${BASE}/An%C3%BAncio%20-%2024.06.22.png`,
    imageAlt: 'Anúncio de Vagas',
  },
]

export const footerSections: FooterSection[] = [
  {
    title: 'As Empresas',
    links: [
      { label: 'Viação Redentor', href: '/viacao-redentor' },
      { label: 'Transportes Futuro', href: '/transportes-futuro' },
      { label: 'Transportes Barra', href: '/transportes-barra' },
      {
        label: 'Código de Ética',
        href: 'https://gruporedentor.com.br/doc/CodigoDeEtica.pdf',
        external: true,
      },
      { label: 'Política Interna', href: '#' },
      {
        label: 'Igualdade Salarial',
        href: 'https://gruporedentor.com.br/doc/igualdade_salarial.pdf',
        external: true,
      },
    ],
  },
  {
    title: 'Links Úteis',
    links: [
      { label: 'Brt Rio', href: 'https://mobi-rio.rio.br/', external: true },
      { label: 'Rio Ônibus', href: 'http://www.rioonibus.com/', external: true },
      { label: 'G1 Notícias', href: 'https://g1.globo.com/rj/rio-de-janeiro/', external: true },
      { label: 'Semove', href: 'https://semove.org.br/', external: true },
      { label: 'Moovit', href: 'https://moovitapp.com/rio_de_janeiro-322/poi/pt-br', external: true },
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
      { label: 'Achados e Perdidos', href: '#' },
      { label: 'Denúncias', href: 'https://contatoseguro.com.br/pt/gruporedentor/', external: true },
    ],
  },
  {
    title: 'Operacional',
    links: [
      { label: 'Linhas', href: 'https://moovitapp.com/rio_de_janeiro-322/lines', external: true },
    ],
  },
]

export const galleryItems: GalleryItem[] = []
