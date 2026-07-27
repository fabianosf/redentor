import { Hero } from '@/components/Hero'
import { Companies } from '@/components/Companies'
import { CampaignSection } from '@/components/CampaignSection'
import { FeatureCards } from '@/components/FeatureCards'
import { YoutubeSection } from '@/components/YoutubeSection'

export function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <CampaignSection />
      <FeatureCards />
      <YoutubeSection />
    </main>
  )
}
