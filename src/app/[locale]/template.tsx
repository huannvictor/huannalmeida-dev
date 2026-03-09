"use client";

import { motion, type Variants } from "framer-motion";
import type { FC, ReactNode } from "react";

// HOOKS
import useScrollProgress from "@/hooks/useScrollProgress";

interface TemplateProps {
	children: ReactNode;
}

// VARIANTS
const variants: Variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
};

const Template: FC<TemplateProps> = ({ children }) => {
	const completion = useScrollProgress();

	return (
		<>
			<motion.main
				variants={variants}
				initial="hidden"
				animate="enter"
				transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
			>
				{children}
			</motion.main>

			<span
				style={{ transform: `translateY(${completion - 100}%)` }}
				className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
			/>
			{/* <div className="h-[4000px]" /> */}
		</>
	);
};

export default Template;
