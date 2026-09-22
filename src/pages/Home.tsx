import { Hero } from '@/components/Hero'
import { Companies } from '@/components/Companies'
import { Pillars } from '@/components/Pillars'
import { JobsTeaser } from '@/components/JobsTeaser'
import { NewsSection } from '@/components/NewsSection'
import { ContactBand } from '@/components/ContactBand'

export function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Pillars />
      <JobsTeaser />
      <NewsSection />
      <ContactBand />
    </main>
  )
}
