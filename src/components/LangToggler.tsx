"use client";

import { LanguagesIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "../../components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../../components/ui/hover-card";

export default function LangToggler() {
	const [lang, setLang] = useState("en");

	return (
		<HoverCard>
			<div>
				<HoverCardTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						onClick={() => setLang(lang === "en" ? "pt" : "en")}
					>
						<LanguagesIcon className="size-5" />
					</Button>
				</HoverCardTrigger>
				<HoverCardContent className="w-fit dark:bg-zinc-700/50 bg-zinc-100/50">
					<p className="text-xs text-zinc-400">em breve...</p>
				</HoverCardContent>
			</div>
		</HoverCard>
	);
}
