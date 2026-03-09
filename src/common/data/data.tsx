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
};

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
	

export const projectData: ProjectData[] = [
	{
    image: "/work/AssistantListFlow.png",
    category: "Python",
    techArea: "automation",
    name: "AssistantListFlow",
    description: "Ferramenta de automação para conversão de documentos PDF em imagens e geração de metadados, eliminando gargalos operacionais e otimizando a integração em lote para sistemas de gestão legados.",
    link: "", 
    github: "https://github.com/huannvictor/AssistantListFlow",
  },
  {
    image: "/work/EducForm-Bot.png",
    category: "Python",
    techArea: "automation",
    name: "EducForm Bot",
    description: "Automação inteligente focada na geração e preenchimento cirúrgico de documentos PDF[cite: 36]. Reduz drasticamente o tempo de processamento de dezenas de horas para menos de um minuto, garantindo zero erros de digitação.",
    link: "",
    github: "https://github.com/huannvictor/EducForm-Bot",
  },
  {
    image: "/work/ContactCollector-Scraper.png",
    category: "Python",
    techArea: "automation",
    name: "Contact Collector Scraper",
    description: "Sistema de coleta automatizada de dados educacionais construído com Playwright[cite: 38]. Realiza navegação automatizada, extração, higienização com Regex e padronização das informações em relatórios.",
    link: "",
    github: "https://github.com/huannvictor/ContactCollector-Scraper",
  },
  {
    image: "/work/MapaStatus.png",
    category: "Python",
    techArea: "automation",
    name: "Mapa Status",
    description: "Ferramenta RPA de alta performance com processamento paralelo para análise e extração de dados não-estruturados em centenas de relatórios PDF[cite: 40], consolidando tudo em planilhas para análise executiva.",
    link: "",
    github: "https://github.com/huannvictor/MapaStatus",
  },
  {
    image: "/work/CommercialFlow-Bot.png",
    category: "Python",
    techArea: "automation",
    name: "Commercial Flow Bot",
    description: "Sistema de triagem automática de documentos e extração estruturada de dados[cite: 42]. Lê PDFs em lote, identifica parâmetros via Regex e organiza fisicamente os arquivos em diretórios categorizados.",
    link: "",
    github: "https://github.com/huannvictor/CommercialFlow-Bot",
  },
  {
    image: "/work/ScanFlow-Bot.png",
    category: "Python",
    techArea: "automation",
    name: "Scan Flow Bot",
    description: "Automação em Python projetada para auditar o sistema de arquivos, analisar metadados cronológicos e gerar relatórios executivos do status de documentos digitalizados[cite: 44].",
    link: "",
    github: "https://github.com/huannvictor/ScanFlow-Bot",
  },
	{
		image: "/work/fsw-donalds.png",
		category: "NextJs",
		techArea: "frontend",
		name: "FSW 7.0",
		description:
			"Este é um projeto de um sistema de pedidos para um restaurante fictício chamado FSW Donalds. O sistema permite que os clientes façam pedidos online, selecionem produtos do menu e finalizem seus pedidos.",
		link: "https://fsw-donalds-tau.vercel.app/",
		github: "https://github.com/huannvictor/fsw-donalds",
	},
	{
		image: "/work/CSVGeneratorFromFiles.png",
		category: "python",
		techArea: "automation",
		name: "CSVGeneratorFromFiles",
		description:
			"Este projeto consiste em um script Python que automatiza a organização e geração de relatórios a partir de arquivos armazenados em uma pasta.",
		link: null,
		github: "https://github.com/huannvictor/CSVGeneratorFromFiles",
	},
	{
		image: "/work/cookapp.png",
		category: "react native",
		techArea: "mobile",
		name: "Cook App",
		description:
			"Criei o CookApp usando React Native, seguindo o tutorial do Rocketseat. É um aplicativo de receitas onde os usuários selecionam ingredientes e obtêm opções de receitas personalizadas",
		link: "https://www.figma.com/file/op20QBiNSq1HaFue5minyl/Cook-App?type=design&node-id=0%3A1&mode=design&t=O1HJRbDhFFX98o8C-1",
		github: "https://github.com/huannvictor/cook-app",
	},
	{
		image: "/work/discordclone.png",
		category: "next js",
		techArea: "fullstack",
		name: "Discord Clone",
		description:
			"Neste curso de 11 horas aprendi como criar um fullstack ponta a ponta e um clone do Discord em tempo real, tudo com servidores, canais, chamadas de vídeo, chamadas de áudio, edição e exclusão de mensagens, bem como funções de membros.",
		link: null,
		github: "https://github.com/huannvictor/discord-clone",
	},
	{
		image: "/work/candycrush.png",
		category: "react js",
		techArea: "frontend",
		name: "Candy Crush React",
		description:
			"Em um tutorial rápido, dominei a criação de um clone da web do Candy Crush, me aprofundando na lógica de programação e nos conceitos essenciais do React.js ao longo do caminho.",
		link: "https://candy-crush-react-byhuann.vercel.app/",
		github: "https://github.com/huannvictor/candy-crush-react",
	},
	{
		image: "/work/shortlinks.png",
		category: "node js",
		name: "Short Link",
		techArea: "backend",
		description:
			"Short Link é um projeto Node.js que permite aos usuários encurtar URLs, redirecionar para a URL original e analisar o número de acessos.",
		link: "https://www.postman.com/docking-module-participant-28243338/workspace/huannvictor/collection/24904242-b41c2ded-9fd3-4e26-85f3-a23a9e2a8f5d?action=share&creator=24904242",
		github: "https://github.com/huannvictor/short-links",
	},
	{
		image: "/work/nlwExpertsNotes.png",
		category: "react js",
		name: "Expert Notes",
		techArea: "frontend",
		description:
			"Expert Notes é um aplicativo web React inovador desenvolvido durante o evento online NLW utilizando Vite. Integrando perfeitamente a funcionalidade de gravação de áudio, o aplicativo transcreve com eficiência palavras faladas em texto, oferecendo aos usuários a flexibilidade de optar pela entrada manual, se preferirem. Com um design elegante e moderno, Expert Notes é esteticamente aprimorado com Tailwind CSS, garantindo uma experiência de usuário visualmente atraente e intuitiva.",
		link: "https://nlw-expert-notes-drab.vercel.app/",
		github: "https://github.com/huannvictor/nlwExpert-Notes",
	},
	{
		image: "/work/NerdBox-Store.png",
		category: "Javascript",
		techArea: "frontend",
		name: "NerdBox Store",
		description:
			"De maneira dinâmica conseguimos cadastrar o produto e já visualizá-lo na mesma página. Opções de editar e excluir são criados a cada linha do item. O software utiliza da memória local da máquina para realizar as operações, impedindo de migrar seus dados para outra máquina.",
		link: "https://nerdbox-store.vercel.app/",
		github: "https://github.com/huannvictor/NerdBox-Store",
	},
	{
		image: "/work/TechLibrary.png",
		category: "CSharp",
		techArea: "backend",
		name: "Tech Library",
		description:
			"TechLibrary é um projeto backend para gerenciar uma biblioteca. Este projeto foi desenvolvido durante a Next Level Week (NLW) da Rocketseat, um evento online que oferece uma experiência prática de desenvolvimento de software, com foco em tecnologias modernas e boas práticas de programação.",
		link: null,
		github: "https://github.com/huannvictor/TechLibrary",
	},
];

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
