import Cta from '@/src/components/Cta'
import AboutSection from '@/src/pageSections/AboutSection'
import HeroSection from '@/src/pageSections/HeroSection'
import ServicesSection from '@/src/pageSections/ServicesSection'
import WorkSection from '@/src/pageSections/WorkSection'
// import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      {/* <Reviews /> */}
      <Cta />
    </main>
  )
}
