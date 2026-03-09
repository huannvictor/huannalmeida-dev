import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

interface NavProps {
	containerStyles: string;
	linkStyles: string;
	underlineStyles?: string;
}

export const Nav = ({
	containerStyles,
	linkStyles,
	underlineStyles,
}: NavProps) => {
	
	const t = useTranslations('Nav')

	const links = [
		{ path: "/", name: t('home') },
		{ path: "/projects", name: t('projects') },
		{ path: "/contact", name: t('contact') },
	];

	const path = usePathname();

	return (
		<nav className={`${containerStyles}`}>
			{links.map((link) => {
				return (
					<Link
						href={link.path}
						key={uuidv4()}
						className={`capitalize ${linkStyles}`}
					>
						{link.path === path && (
							<motion.span
								initial={{ y: "-100%" }}
								animate={{ y: 0 }}
								transition={{ type: "tween" }}
								layoutId="underline"
								className={`${underlineStyles}`}
							/>
						)}
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};
