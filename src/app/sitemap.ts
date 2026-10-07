import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://huannalmeida.dev.br";
	const locales = ["pt", "en"] as const;
	const routes = [
		{ path: "", changeFrequency: "monthly" as const, priority: 1.0 },
		{ path: "/projects", changeFrequency: "weekly" as const, priority: 0.8 },
		{ path: "/contact", changeFrequency: "monthly" as const, priority: 0.5 },
	];

	return routes.flatMap(({ path, changeFrequency, priority }) =>
		locales.map((locale) => ({
			url: `${baseUrl}/${locale}${path}`,
			lastModified: new Date(),
			changeFrequency,
			priority,
			alternates: {
				languages: {
					pt: `${baseUrl}/pt${path}`,
					en: `${baseUrl}/en${path}`,
				},
			},
		}))
	);
}
