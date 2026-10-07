"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
	RiBriefcase4Fill,
	RiGitBranchFill,
	RiStackFill,
} from "react-icons/ri";

import DevImg from "../DevImg";
import Badge from "../DynamicBadge";

export default function HeroImage() {
	const [repos, setRepos] = useState(58);

	useEffect(() => {
		fetch("https://api.github.com/users/huannvictor")
			.then((response) => response.json())
			.then((data) => {
				if (typeof data?.public_repos === "number" && !Number.isNaN(data.public_repos)) {
					setRepos(data.public_repos);
				}
			})
			.catch(() => {
				// Keep fallback of 58 repos
			});
	}, []);

	const t = useTranslations("Hero");

	return (
		<div className="relative hidden lg:ml-32 lg:flex">
			<div className="absolute -right-2 -top-1 size-100 bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark" />

			<Badge
				containerStyles="absolute top-[20%] -left-[11rem] w-65"
				icon={<RiBriefcase4Fill />}
				endCountNum={80}
				endCountText="%"
				badgeText={t("badgeEfficiency")}
			/>

			<Badge
				containerStyles="absolute top-[18rem] -left-[3rem]"
				icon={<RiStackFill />}
				badgeText={t("badgeStack")}
			/>

			<Badge
				containerStyles="absolute top-[9rem] -right-[4rem]"
				icon={<RiGitBranchFill />}
				endCountNum={repos}
				badgeText={t("badgeRepos")}
			/>

			<DevImg
				containerStyles="bg-hero_shape w-[408px] h-[370px] bg-no-repeat relative bg-bottom"
				imgSrc="/hero/developer.png"
				alt={`${t("fullname")} - ${t("title")}`}
				priority={true}
			/>
		</div>
	);
}
