interface WorkContainerProps {
	children: React.ReactNode;
}

export default function WorkContainer({ children }: WorkContainerProps) {
	return (
		<div className="mx-auto w-full px-8 lg:grid lg:max-w-[90vw] lg:grid-cols-3 lg:justify-items-center lg:gap-8">
			{children}
		</div>
	);
}
