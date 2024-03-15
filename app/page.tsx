import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "../components/Reviews";
import Work from "../components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
    </main>
  );
}
