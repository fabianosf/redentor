export interface NavItem {
  label: string
  href: string
  external?: boolean
  disabled?: boolean
}

export interface Company {
  id: string
  name: string
  description: string
  color: string
  logoInitial: string
  logoImage: string
  href: string
}

export interface HeroSlide {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  imageAlt: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface GalleryItem {
  id: number
  imageUrl: string
  alt: string
  title: string
}

export interface StatItem {
  id: string
  value: string
  label: string
  icon: 'calendar' | 'building' | 'users' | 'bus'
}

export interface Pillar {
  id: string
  title: string
  description: string
  icon: 'shield' | 'graduation' | 'heart'
}

export interface JobOpening {
  id: string
  title: string
}

export interface NewsItem {
  id: string
  title: string
  summary: string
  imageUrl: string
  imageAlt: string
  href: string
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
}

export interface VideoItem {
  youtubeId: string
  title: string
  description: string
}

export interface ContactAddress {
  empresa: string
  logradouro: string
  cidade: string
}
