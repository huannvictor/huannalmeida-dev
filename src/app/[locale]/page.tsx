import AboutSection from "@/src/pageSections/AboutSection";
import CtaSection from "@/src/pageSections/CtaSection";
import HeroSection from "@/src/pageSections/HeroSection";
import ProficiencySection from "@/src/pageSections/ProficiencySection";
import ServicesSection from "@/src/pageSections/ServicesSection";
import WorkSection from "@/src/pageSections/WorkSection";
// import Reviews from '@/components/Reviews'

export default function Home() {
	return (
		<main>
			<HeroSection />
			<ProficiencySection />
			<AboutSection />
			<ServicesSection />
			<WorkSection />
			<CtaSection /> 
			{/* 
			<Reviews />
			*/}
		</main>
	);
}
