"use client";

import { usePathname, useRouter } from "@/src/i18n/navigation";
import { Locale } from "@/src/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

import { LanguagesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function LangToggler() {
	const router = useRouter();
	const locale = useLocale();
	const pathname = usePathname();
	const params = useParams();

	const nextLocale = locale === "pt" ? "en" : "pt";

	function changeLocale() {
		router.replace(
			// @ts-expect-error -- TypeScript will validate that only known `params`
			// are used in combination with a given `pathname`.
			{ pathname, params },
			{ locale: nextLocale as Locale }
		);
	}

	return (
		<HoverCard openDelay={0} closeDelay={0}>
			<div>
				<HoverCardTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						onClick={changeLocale}
						className="relative"
					>
						<LanguagesIcon className="size-5" />
					</Button>
				</HoverCardTrigger>
				<HoverCardContent className="w-fit dark:bg-zinc-800 bg-white border-border">
					<p className="text-xs font-medium text-zinc-400">
						{locale === "pt" ? "Switch to English" : "Mudar para Português"}
					</p>
				</HoverCardContent>
			</div>
		</HoverCard>
	);
}
