import { content } from "./content";

interface AboutRootProps {
	children: React.ReactNode;
}

export default function AboutRoot({ children }: AboutRootProps) {
	return (
		<section className="mb-12 lg:mb-36">
			<div className="mx-auto w-full px-8 lg:max-w-[90vw]">
				<h2 className="section-title mx-auto mb-8 text-center lg:mb-16">
					{content.pt.sectionTitle}
				</h2>

				{children}
			</div>
		</section>
	);
}
