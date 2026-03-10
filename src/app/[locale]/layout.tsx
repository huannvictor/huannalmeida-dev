import "./globals.css";

// INTL
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "../../i18n/routing";

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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "Metadata" });

	const keywords = t("keywords")
		.split(",")
		.map((k) => k.trim());

	return {
		metadataBase: new URL("https://huannalmeida.dev.br"),
		title: {
			default: t("title"),
			template: "%s | Huann Almeida",
		},
		description: t("description"),
		keywords: keywords,
		authors: [{ name: "Huann Almeida" }],
		creator: "Huann Almeida",
		openGraph: {
			type: "website",
			locale: locale === "pt" ? "pt_BR" : "en_US",
			url: "https://huannalmeida.dev.br",
			siteName: "Huann Almeida Portfólio",
			title: t("title"),
			description: t("description"),
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
			title: t("title"),
			description: t("description"),
			images: ["/og-image.png"],
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string}>;
}>) {
	const { locale } = await params
	if (!routing.locales.includes(locale as Locale)) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={outfit.className}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
					<NextIntlClientProvider messages={messages}>
						<Header />
						{children}
						<Footer />
						<SpeedInsights />
					</NextIntlClientProvider>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
