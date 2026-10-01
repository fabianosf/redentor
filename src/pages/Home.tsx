import { Hero } from '@/components/Hero'
import { QuickAccess } from '@/components/QuickAccess'
import { Companies } from '@/components/Companies'
import { Pillars } from '@/components/Pillars'
import { JobsTeaser } from '@/components/JobsTeaser'
import { NewsSection } from '@/components/NewsSection'
import { ContactBand } from '@/components/ContactBand'

export function Home() {
  return (
    <main>
      <Hero />
      <QuickAccess />
      <Companies />
      <Pillars />
      <JobsTeaser />
      <NewsSection />
      <ContactBand />
    </main>
  )
}
