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
	const t = await getTranslations('About.infoData')

	return [
		{
			icon: <User2 size={20} />,
			text: "Huann Almeida",
		},
		{
			icon: <PhoneCall size={20} />,
			text: "+55 83 99980-2317",
		},
		{
			icon: <MailIcon size={20} />,
			text: "huannvictor@gmail.com",
		},
		{
			icon: <Calendar size={20} />,
			text: t('birthdate'),
		},
		{
			icon: <Home size={20} />,
			text: t('location'),
		},
	]
}	

export const getQualificationData = async () => {
	const q = await getTranslations('About.qualifications')
	const d = await getTranslations('Data.Qualifications')

	return [
		{
			title: q('experience'),
			data: [
				{
					company: "Editora Construir",
					role: d('Experience.Automation'),
					years: d('Experience.Years.Automation'),
				},
				{
					company: "Editora Construir",
					role: d('Experience.Assistant'),
					years: d('Experience.Years.Assistant'),
				},
				{
					company: "Skill Labs",
					role: d('Experience.TechLead'),
					years: d('Experience.Years.TechLead'),
				},
				{
					company: "Skill Labs",
					role: d('Experience.Junior'),
					years: d('Experience.Years.JuniorSkillLabs'),
				},
				{
					company: "Organize Soft",
					role: d('Experience.Junior'),
					years: d('Experience.Years.JuniorOrganize'),
				},
			],
		},
		{
			title: q('education'),
			data: [
				{
					university: "Wyden",
					qualification: d('Education.ADS'),
					years: d('Education.Years.ADS'),
				},
				{
					university: d('Education.Complementary'),
					qualification: `Full Stack Club • Curso.dev • EBAC • OneBitCode • Rocketseat`,
					years: d('Education.Years.Complementary'),
				},
			],
		},
	]
}

export const getSkillData = async (): Promise<SkillData[]> => {
	const s = await getTranslations('About.skills')
	const d = await getTranslations('Data.Skills')

	return [
		{
			title: s('skills'),
			data: [
				{ name: d('Languages') },
				{ name: d('EcosystemJSWork') },
				{ name: d('EcosystemJSKnowledge') },
				{ name: d('Styling') },
				{ name: d('Backend') },
				{ name: d('Mobile') },
				{ name: d('DigitalDesign') },
			],
		},
		{
			title: s('tools'),
			data: [
				{ imgPath: "/about/vscode.svg", tool: "VS Code" },
				{ imgPath: "/about/figma.svg", tool: "Figma" },
				{ imgPath: "/about/trello.svg", tool: "Trello" },
				{ imgPath: "/about/miro.svg", tool: "Miro" },
			],
		},
	];
}

export const getServicesData = async (): Promise<ServicesData[]> => {
	const s = await getTranslations('Services')
	return [
		{
			icon: <Layout size={72} strokeWidth={0.8} />,
			title: s('service1.title'),
			description: s('service1.description'),
		},
		{
			icon: <DatabaseZap size={72} strokeWidth={0.8} />,
			title: s('service2.title'),
			description:s('service2.description'),
		},
		{
			icon: <Bot size={72} strokeWidth={0.8} />,
			title: s('service3.title'),
			description: s('service3.description'),
		},
	];
}

export const getProjectData = async (): Promise<ProjectData[]> => {
	const p = await getTranslations('Data.Projects')
	return [
		{
			image: "/work/fsw-donalds.png",
			category: "NextJs",
			techArea: "frontend",
			name: "FSW 7.0",
			description: p('FSW70'),
			link: "https://fsw-donalds-tau.vercel.app/",
			github: "https://github.com/huannvictor/fsw-donalds",
		},
		{
			image: "/work/discordclone.png",
			category: "next js",
			techArea: "fullstack",
			name: "Discord Clone",
			description: p('DiscordClone'),
			link: null,
			github: "https://github.com/huannvictor/discord-clone",
		},
		{
			image: "/work/nlwExpertsNotes.png",
			category: "react js",
			name: "Expert Notes",
			techArea: "frontend",
			description: p('ExpertNotes'),
			link: "https://nlw-expert-notes-drab.vercel.app/",
			github: "https://github.com/huannvictor/nlwExpert-Notes",
		},
		{
			image: "/work/AssistantListFlow.png",
			category: "Python",
			techArea: "automation",
			name: "AssistantListFlow",
			description: p('AssistantListFlow'),
			link: "", 
			github: "https://github.com/huannvictor/AssistantListFlow",
		},
		{
			image: "/work/EducForm-Bot.png",
			category: "Python",
			techArea: "automation",
			name: "EducForm Bot",
			description: p('EducFormBot'),
			link: "",
			github: "https://github.com/huannvictor/EducForm-Bot",
		},
		{
			image: "/work/ContactCollector-Scraper.png",
			category: "Python",
			techArea: "automation",
			name: "Contact Collector Scraper",
			description: p('ContactCollectorScraper'),
			link: "",
			github: "https://github.com/huannvictor/ContactCollector-Scraper",
		},
		{
			image: "/work/MapaStatus.png",
			category: "Python",
			techArea: "automation",
			name: "Mapa Status",
			description: p('MapaStatus'),
			link: "",
			github: "https://github.com/huannvictor/MapaStatus",
		},
		{
			image: "/work/CommercialFlow-Bot.png",
			category: "Python",
			techArea: "automation",
			name: "Commercial Flow Bot",
			description: p('CommercialFlowBot'),
			link: "",
			github: "https://github.com/huannvictor/CommercialFlow-Bot",
		},
		{
			image: "/work/ScanFlow-Bot.png",
			category: "Python",
			techArea: "automation",
			name: "Scan Flow Bot",
			description: p('ScanFlowBot'),
			link: "",
			github: "https://github.com/huannvictor/ScanFlow-Bot",
		},
		{
			image: "/work/CSVGeneratorFromFiles.png",
			category: "python",
			techArea: "automation",
			name: "CSVGeneratorFromFiles",
			description: p('CSVGeneratorFromFiles'),
			link: null,
			github: "https://github.com/huannvictor/CSVGeneratorFromFiles",
		},
		{
			image: "/work/cookapp.png",
			category: "react native",
			techArea: "mobile",
			name: "Cook App",
			description: p('CookApp'),
			link: "https://www.figma.com/file/op20QBiNSq1HaFue5minyl/Cook-App?type=design&node-id=0%3A1&mode=design&t=O1HJRbDhFFX98o8C-1",
			github: "https://github.com/huannvictor/cook-app",
		},
		{
			image: "/work/candycrush.png",
			category: "react js",
			techArea: "frontend",
			name: "Candy Crush React",
			description: p('CandyCrushReact'),
			link: "https://candy-crush-react-byhuann.vercel.app/",
			github: "https://github.com/huannvictor/candy-crush-react",
		},
		{
			image: "/work/shortlinks.png",
			category: "node js",
			name: "Short Link",
			techArea: "backend",
			description: p('ShortLink'),
			link: "https://www.postman.com/docking-module-participant-28243338/workspace/huannvictor/collection/24904242-b41c2ded-9fd3-4e26-85f3-a23a9e2a8f5d?action=share&creator=24904242",
			github: "https://github.com/huannvictor/short-links",
		},
		{
			image: "/work/NerdBox-Store.png",
			category: "Javascript",
			techArea: "frontend",
			name: "NerdBox Store",
			description: p('NerdBoxStore'),
			link: "https://nerdbox-store.vercel.app/",
			github: "https://github.com/huannvictor/NerdBox-Store",
		},
		{
			image: "/work/TechLibrary.png",
			category: "CSharp",
			techArea: "backend",
			name: "Tech Library",
			description: p('TechLibrary'),
			link: null,
			github: "https://github.com/huannvictor/TechLibrary",
		},
	];
} 


export const reviewsData: ReviewsData[] = [
	{
		avatar: "/reviews/avatar-1.png",
		name: "Richard Thompson",
		job: "Chef",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!",
	},
	{
		avatar: "/reviews/avatar-2.png",
		name: "Ellen Bellane",
		job: "Fashon Design",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!",
	},
	{
		avatar: "/reviews/avatar-3.png",
		name: "José Souza",
		job: "Game Dev",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!",
	},
	{
		avatar: "/reviews/avatar-4.png",
		name: "Emily Smith",
		job: "Therapist",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!",
	},
	{
		avatar: "/reviews/avatar-5.png",
		name: "Oliver Taylor",
		job: "Engineer",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!",
	},
	{
		avatar: "/reviews/avatar-6.png",
		name: "Mason Wilson",
		job: "Video Editor",
		review:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!",
	},
];
