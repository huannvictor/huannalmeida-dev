interface ProficiencyRootProps {
	children: React.ReactNode;
}

export default function ProficiencyRoot({ children }: ProficiencyRootProps) {
	return <section className="mb-12 lg:mb-36">{children}</section>;
}
