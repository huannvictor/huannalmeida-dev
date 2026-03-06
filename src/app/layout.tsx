import "./globals.css";

import { Analytics } from '@vercel/analytics/react';
// VERCEL SPEED INSIGHTS
import { SpeedInsights } from "@vercel/speed-insights/next";
// NEXT IMPORTS
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

// COMPONENTS
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
// THEME PROVIDER
import { ThemeProvider } from "@/src/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://huannalmeida.dev.br"),
	title: {
		default: "Huann Almeida | Desenvolvedor Fullstack",
		template: "%s | Huann Almeida",
	},
	description:
		"Desenvolvedor Fullstack focado em React, Next.js e automações inteligentes. Transformo ideias em soluções digitais robustas e escaláveis.",
	keywords: [
		"Huann Almeida",
		"Desenvolvedor Fullstack",
		"React",
		"Next.js",
		"Portfólio de Desenvolvedor",
		"TypeScript",
		"Automações Web",
	],
	authors: [{ name: "Huann Almeida" }],
	creator: "Huann Almeida",
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://huannalmeida.dev.br",
		siteName: "Huann Almeida Portfólio",
		title: "Huann Almeida | Desenvolvedor Fullstack",
		description:
			"Explore meu portfólio de desenvolvimento frontend e fullstack, apresentando projetos inovadores e soluções criativas.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Huann Almeida Portfólio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Huann Almeida | Desenvolvedor Fullstack",
		description:
			"Explore meu portfólio de desenvolvimento frontend e fullstack.",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body className={outfit.className}>
				<ThemeProvider attribute="class" defaultTheme="light">
					<Header />
					{children}
					<Footer />
					<SpeedInsights />
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
