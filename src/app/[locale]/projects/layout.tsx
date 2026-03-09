import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
	const t = await getTranslations("Projects");
	return {
		title: `Huann Almeida - ${t('title')}`,
	};
}

export default function ProjectsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
