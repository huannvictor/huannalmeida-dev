interface CtaContainerProps {
	children: React.ReactNode;
}

export default function CtaContainer({ children }: CtaContainerProps) {
	return (
		<div className="container mx-auto flex flex-col items-center">
			{children}
		</div>
	);
}
