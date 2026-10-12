interface ProficiencyContainerProps {
	title: string;
	subtitle: string;
	children: React.ReactNode;
}

export default function ProficiencyContainer({
	title,
	subtitle,
	children,
}: ProficiencyContainerProps) {
	return (
		<div className="container mx-auto px-6 sm:px-8">
			<div className="mx-auto mb-8 max-w-2xl text-center lg:mb-14">
				<h2 className="section-title mx-auto mb-4 text-center">{title}</h2>
				<p className="subtitle mb-0">{subtitle}</p>
			</div>

			{children}
		</div>
	);
}
