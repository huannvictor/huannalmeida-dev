import HeroSection from '@/src/screens/HeroSection'
import About from '@/src/components/About'
import Services from '@/src/components/Services'
import Work from '@/src/components/Work'
import Cta from '@/src/components/Cta'
import AboutSection from '../screens/AboutSection'
// import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <About /> */}
      <AboutSection />
      <Services />
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </main>
  )
}
