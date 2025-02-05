import Socials from "../Socials";
import { content } from "./content";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
	return (
		<div className="mx-auto flex max-w-[480px] flex-col justify-center text-center lg:mx-0 lg:text-left">
			<div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
				{content.pt.heroTitle}
			</div>
			<h1 className="h1 mb-4">{content.pt.heroGreeting}</h1>
			<p className="subtitle mx-auto max-w-[490px] lg:mx-0">
				{content.pt.heroPersonalPresentation.text}
				<br />
				<span className="text-primary">
					{content.pt.heroPersonalPresentation.invitation}
				</span>
			</p>

			<HeroButtons />

			<Socials
				containerStyles="flex gap-x-6 mx-auto lg:mx-0"
				iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
			/>
		</div>
	);
}
