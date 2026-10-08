"use client";

import { usePathname } from "@/src/i18n/navigation";
import { useEffect, useState } from "react";

import LangToggler from "./LangToggler";
// COMPONENTS
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { Nav } from "./Nav";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
	const [header, setHeader] = useState<boolean>(false);
	const pathname: string = usePathname();
	const isHome = pathname === "/" || pathname === "/pt" || pathname === "/en";

	const scrollHandler = () => {
		window.scrollY > 50 ? setHeader(true) : setHeader(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	});

	return (
		<header
			className={`${header
				? "bg-white py-4 shadow-lg dark:bg-accent"
				: "py-6 dark:bg-transparent"
				} sticky top-0 z-30 transition-all ${isHome && !header && "bg-tertiary"}`}
		>
			<div className="container mx-auto">
				<div className="flex items-center justify-between mx-8 lg:mx-0">
					<Logo />

					<div className="flex items-center gap-x-6">
						<Nav
							containerStyles="hidden lg:flex gap-x-8 items-center"
							linkStyles="relative hover:text-primary transition-all"
							underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
						/>
						<ThemeToggler />
						<LangToggler />

						<div className="lg:hidden">
							<MobileNav />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
