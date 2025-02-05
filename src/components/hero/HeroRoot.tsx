import { RiArrowDownSLine } from "react-icons/ri";

export default function HeroRoot({ children }: HeroRootProps) {
	return (
		<section
			className={
				"mb-12 bg-hero bg-cover bg-bottom bg-no-repeat dark:bg-none lg:mb-36 lg:pt-28"
			}
		>
			<div className="mx-auto w-full px-8 lg:max-w-[90vw]">
				<div className="flex justify-between gap-x-8">{children}</div>

				<div className="absolute left-2/4 hidden animate-bounce lg:flex">
					<RiArrowDownSLine className="text-3xl text-primary" />
				</div>
			</div>
		</section>
	);
}
