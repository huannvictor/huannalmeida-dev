import HeroSection from '@/components/screens/HeroSection'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Cta from '@/components/Cta'
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
