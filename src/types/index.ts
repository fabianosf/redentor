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
