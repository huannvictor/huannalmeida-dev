import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "../components/Reviews";
import Work from "../components/Work";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
