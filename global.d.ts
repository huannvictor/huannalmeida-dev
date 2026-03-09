import { ReactNode } from "react";

type Messages = typeof import("./public/locales/pt.json");

declare interface IntlMessages extends Messages {}

declare global {
	interface Qualification {
		university: string;
		qualification: string;
		years: string;
	}

	interface Experience {
		company: string;
		role: string;
		years: string;
	}

	interface Skill {
		name: string;
	}

	interface Tool {
		imgPath: string;
		tool: string;
	}

	interface InfoData {
		icon: JSX.Element;
		text: string;
	}

	interface QualificationData {
		title: string;
		data: (Qualification | Experience)[];
	}

	interface SkillData {
		title: string;
		data: (Skill | Tool)[];
	}

	interface ServicesData {
		icon: ReactNode;
		title: string;
		description: string;
	}

	interface ProjectData {
		image: string;
		category: string;
		techArea:
			| "frontend"
			| "backend"
			| "fullstack"
			| "mobile"
			| "automation"
			| "other";
		name: string;
		description: string;
		link: string | null;
		github: string;
	}

	interface ReviewsData {
		avatar: string;
		name: string;
		job: string;
		review: string;
	}

	interface BadgeProps {
		containerStyles: string;
		icon: ReactNode;
		endCountNum?: number;
		endCountText?: string;
		badgeText: string;
	}

	interface TabsTriggersProps {
		title: string;
		value: string;
	}

	interface PersonalContent {
		title: string;
		content: string[];
	}

	interface languageSkills {
		title: string;
		options: string[];
	}

	interface tabsQualifications {
		title: string;
	}

	interface tabsSkills {
		title: string;
		skills: string;
		tools: string;
	}

	interface TabsContentProps {
		sectionTitle: string;
		tabsTriggers: {
			title: string;
			value: string;
		}[];
		tabsPersonal: {
			title: string;
			content: string[];
		};
		languageSkills: {
			title: string;
			options: string[];
		};
		tabsQualifications: {
			title: string;
		};
		tabsSkills: {
			title: string;
			skills: string;
			tools: string;
		};
	}
}

export {};
