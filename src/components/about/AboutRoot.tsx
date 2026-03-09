import { useTranslations } from "next-intl";

interface AboutRootProps {
	children: React.ReactNode;
}

export default function AboutRoot({ children }: AboutRootProps) {
	const t = useTranslations('About')

	return (
		<section className="mb-12 lg:mb-36">
			<div className="mx-auto w-full px-8 lg:max-w-[90vw]">
				<h2 className="section-title mx-auto mb-8 text-center lg:mb-16">
					{t('sectionTitle')}
				</h2>

				{children}
			</div>
		</section>
	);
}
