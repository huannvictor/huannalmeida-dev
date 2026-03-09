import { useTranslations } from "next-intl";
import Socials from "../Socials";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
	const t = useTranslations('Hero')

	return (
		<div className="mx-auto flex max-w-120 flex-col justify-center text-center lg:mx-0 lg:text-left">
			<div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
				{t('title')}
			</div>
			<h1 className="h1 mb-4">{t('fullname')}</h1>
			<p className="subtitle mx-auto max-w-122.5 lg:mx-0">
				{t('text')}
				<br />
				<span className="text-primary">
					{t('invitation')}
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
