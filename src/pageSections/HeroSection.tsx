import HeroContent from "../components/hero/HeroContent";
import HeroImage from "../components/hero/HeroImage";
import HeroRoot from "../components/hero/HeroRoot";

export default function HeroSection() {
	return (
		<HeroRoot>
			<HeroContent />
			<HeroImage />
		</HeroRoot>
	);
}
