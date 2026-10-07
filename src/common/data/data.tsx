import {
	Bot,
	Calendar,
	DatabaseZap,
	Home,
	Layout,
	MailIcon,
	PhoneCall,
	User2,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

export const getInfoData = async () => {
	const t = await getTranslations("About.infoData");

	return [
		{
			icon: <User2 size={20} />,
			text: "Huann Almeida",
		},
		{
			icon: <PhoneCall size={20} />,
			text: "+55 83 99126-3772",
		},
		{
			icon: <MailIcon size={20} />,
			text: "huannvictor@gmail.com",
		},
		{
			icon: <Calendar size={20} />,
			text: t("birthdate"),
		},
		{
			icon: <Home size={20} />,
			text: t("location"),
		},
	];
};

export const getQualificationData = async () => {
	const q = await getTranslations("About.qualifications");
	const d = await getTranslations("Data.Qualifications");

	return [
		{
			title: q("experience"),
			data: [
				{
					company: "Editora Construir",
					role: d("Experience.Automation"),
					years: d("Experience.Years.Automation"),
				},
				{
					company: "Editora Construir",
					role: d("Experience.Assistant"),
					years: d("Experience.Years.Assistant"),
				},
				{
					company: "Skill Labs",
					role: d("Experience.TechLead"),
					years: d("Experience.Years.TechLead"),
				},
				{
					company: "Skill Labs",
					role: d("Experience.JuniorSkillLabs"),
					years: d("Experience.Years.JuniorSkillLabs"),
				},
				{
					company: "Organize Soft",
					role: d("Experience.JuniorOrganize"),
					years: d("Experience.Years.JuniorOrganize"),
				},
			],
		},
		{
			title: q("education"),
			data: [
				{
					university: "FAMEF",
					qualification: d("Education.MBASoftware"),
					years: d("Education.Years.MBASoftware"),
				},
				{
					university: "FAMEF",
					qualification: d("Education.MBACyber"),
					years: d("Education.Years.MBACyber"),
				},
				{
					university: "Wyden",
					qualification: d("Education.ADS"),
					years: d("Education.Years.ADS"),
				},
				{
					university: d("Education.Complementary"),
					qualification:
						"Full Stack Club • Curso.dev • EBAC • OneBitCode • Rocketseat",
					years: d("Education.Years.Complementary"),
				},
			],
		},
	];
};

export const getSkillData = async (): Promise<SkillData[]> => {
	const s = await getTranslations("About.skills");
	const d = await getTranslations("Data.Skills");

	return [
		{
			title: s("skills"),
			data: [
				{ name: d("Languages") },
				{ name: d("Frontend") },
				{ name: d("Backend") },
				{ name: d("Automation") },
				{ name: d("DatabaseDevOps") },
			],
		},
		{
			title: s("tools"),
			data: [
				{ imgPath: "/about/vscode.svg", tool: "VS Code" },
				{ imgPath: "/about/figma.svg", tool: "Figma" },
				{ imgPath: "/about/trello.svg", tool: "Trello" },
				{ imgPath: "/about/miro.svg", tool: "Miro" },
			],
		},
	];
};

export const getServicesData = async (): Promise<ServicesData[]> => {
	const s = await getTranslations("Services");
	return [
		{
			icon: <Layout size={72} strokeWidth={0.8} />,
			title: s("service1.title"),
			description: s("service1.description"),
		},
		{
			icon: <DatabaseZap size={72} strokeWidth={0.8} />,
			title: s("service2.title"),
			description: s("service2.description"),
		},
		{
			icon: <Bot size={72} strokeWidth={0.8} />,
			title: s("service3.title"),
			description: s("service3.description"),
		},
	];
};

export const getProjectData = async (): Promise<ProjectData[]> => {
	const p = await getTranslations("Data.Projects");
	return [
		{
			image: "/work/aparatus.png",
			category: "Next.js 16",
			techArea: "fullstack",
			name: "Aparatus",
			description: p("Aparatus"),
			link: null,
			github: "https://github.com/huannvictor/aparatus",
		},
		{
			image: "/work/fsw-donalds.png",
			category: "Next.js 15",
			techArea: "fullstack",
			name: "FSW Donald's",
			description: p("FSWDonalds"),
			link: "https://fsw-donalds-tau.vercel.app/",
			github: "https://github.com/huannvictor/fsw-donalds",
		},
		{
			image: "/work/backend.png",
			category: "NestJS",
			techArea: "backend",
			name: "Gam3rStore API",
			description: p("Gam3rStoreBackend"),
			link: null,
			github: "https://github.com/huannvictor/backend",
		},
		{
			image: "/work/PricePulseAI.png",
			category: "Python / AI",
			techArea: "automation",
			name: "PricePulseAI",
			description: p("PricePulseAI"),
			link: null,
			github: "https://github.com/huannvictor/PricePulseAI",
		},
		{
			image: "/work/CommercialFlow-Bot.png",
			category: "Python / RPA",
			techArea: "automation",
			name: "Commercial Flow Bot",
			description: p("CommercialFlowBot"),
			link: null,
			github: "https://github.com/huannvictor/CommercialFlow-Bot",
		},
		{
			image: "/work/nlwExpert-Polls.png",
			category: "Fastify / Node.js",
			techArea: "backend",
			name: "NLW Expert Polls",
			description: p("NLWExpertPolls"),
			link: null,
			github: "https://github.com/huannvictor/nlwExpert-Polls",
		},
		{
			image: "/work/MapaStatus.png",
			category: "Python / RPA",
			techArea: "automation",
			name: "Mapa Status",
			description: p("MapaStatus"),
			link: null,
			github: "https://github.com/huannvictor/MapaStatus",
		},
		{
			image: "/work/ftr-upload-widget-web.png",
			category: "React 19",
			techArea: "frontend",
			name: "Upload Widget Web",
			description: p("UploadWidgetWeb"),
			link: null,
			github: "https://github.com/huannvictor/ftr-upload-widget-web",
		},
		{
			image: "/work/ContactCollector-Scraper.png",
			category: "Python / Scraper",
			techArea: "automation",
			name: "Contact Collector Scraper",
			description: p("ContactCollectorScraper"),
			link: null,
			github: "https://github.com/huannvictor/ContactCollector-Scraper",
		},
		{
			image: "/work/AssistantListFlow.png",
			category: "Python / RPA",
			techArea: "automation",
			name: "AssistantListFlow",
			description: p("AssistantListFlow"),
			link: null,
			github: "https://github.com/huannvictor/AssistantListFlow",
		},
		{
			image: "/work/EducForm-Bot.png",
			category: "Python / RPA",
			techArea: "automation",
			name: "EducForm Bot",
			description: p("EducFormBot"),
			link: null,
			github: "https://github.com/huannvictor/EducForm-Bot",
		},
		{
			image: "/work/ScanFlow-Bot.png",
			category: "Python / RPA",
			techArea: "automation",
			name: "Scan Flow Bot",
			description: p("ScanFlowBot"),
			link: null,
			github: "https://github.com/huannvictor/ScanFlow-Bot",
		},
		{
			image: "/work/nlwExpertsNotes.png",
			category: "React / Vite",
			techArea: "frontend",
			name: "NLW Expert Notes",
			description: p("NLWExpertNotes"),
			link: "https://nlw-expert-notes-drab.vercel.app/",
			github: "https://github.com/huannvictor/nlwExpert-Notes",
		},
	];
};

export const reviewsData: ReviewsData[] = [];
