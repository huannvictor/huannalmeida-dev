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
	const [repos, setRepos] = useState(0);
	const [createdAt, setCreatedAt] = useState("");
	const years = new Date().getFullYear() - Number(createdAt.slice(0, 4));

	useEffect(() => {
		fetch("https://api.github.com/users/huannvictor")
			.then((response) => response.json())
			.then((data) => {
				setRepos(Number(data.public_repos));
				setCreatedAt(data.created_at);
			});
	}, []);

	const t = useTranslations("Hero")

	return (
		<div className="relative hidden lg:ml-32 lg:flex">
			<div className="absolute -right-2 -top-1 size-100 bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark" />

			<Badge
				containerStyles="absolute top-[24%] -left-[7rem] w-48"
				icon={<RiBriefcase4Fill />}
				endCountNum={years}
				badgeText={t("badgeExperience")}
			/>

			<Badge
				containerStyles="absolute top-[18rem] -left-[1rem]"
				icon={<RiStackFill />}
				// endCountNum={0}
				badgeText={t("badgeStack")}
			/>

			<Badge
				containerStyles="absolute top-[9rem] -right-[3rem]"
				icon={<RiGitBranchFill />}
				endCountNum={repos}
				badgeText={t("badgeRepos")}
			/>

			<DevImg
				containerStyles="bg-hero_shape w-[408px] h-[370px] bg-no-repeat relative bg-bottom"
				imgSrc="/hero/developer.png"
				alt={`${t('fullname')} = ${t("title")}`}
				priority={true}
			/>
		</div>
	);
}
