import Cta from '@/src/components/Cta'
import Work from '@/src/components/Work'
import AboutSection from '@/src/pageSections/AboutSection'
import HeroSection from '@/src/pageSections/HeroSection'
import ServicesSection from '@/src/pageSections/ServicesSection'
// import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </main>
  )
}
