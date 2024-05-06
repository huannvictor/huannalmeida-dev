import Cta from '@/src/components/Cta'
import Services from '@/src/components/Services'
import Work from '@/src/components/Work'
import AboutSection from '@/src/pageSections/AboutSection'
import HeroSection from '@/src/pageSections/HeroSection'
// import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Services />
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </main>
  )
}
