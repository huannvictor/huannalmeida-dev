import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const links = [
	{ path: "/", name: "home" },
	{ path: "/projects", name: "projetos" },
	{ path: "/contact", name: "olá" },
];

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
