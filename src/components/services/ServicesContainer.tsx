interface ServicesContainerProps {
	title: string;
	children: React.ReactNode;
}

export default function ServicesContainer({
	title,
	children,
}: ServicesContainerProps) {
	return (
		<div className="container mx-auto">
			<h2 className="section-title mx-auto mb-12 text-center lg:mb-24">
				{title}
			</h2>

			{children}
		</div>
	);
}
