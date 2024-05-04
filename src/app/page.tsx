import HeroSection from '@/src/screens/HeroSection'
import About from '@/src/components/About'
import Services from '@/src/components/Services'
import Work from '@/src/components/Work'
import Cta from '@/src/components/Cta'
// import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Services />
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </main>
  )
}
