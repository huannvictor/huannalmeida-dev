import {
	Calendar,
	DatabaseZap,
	Home,
	Layers,
	Layout,
	MailIcon,
	PhoneCall,
	User2,
} from "lucide-react";

export const infoData = [
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
		text: "Nasci em 22 Set, 1990",
	},
	{
		icon: <Home size={20} />,
		text: "João Pessoa • Paraíba • Brasil",
	},
];

export const qualificationData: QualificationData[] = [
	{
		title: "educação",
		data: [
			{
				university: "Wyden",
				qualification: "Análise e Desenvolvimento de Sistemas",
				years: "2024 - 2027",
			},
			{
				university: "EBAC ",
				qualification: "Dev Fullstack Javascript",
				years: "2023",
			},
			{
				university: "OneBitCode",
				qualification: "Dev Fullstack Javascript",
				years: "2023",
			},
			{
				university: "Rocketseat",
				qualification: "Dev Fullstack Javascript",
				years: "2022",
			},
			{
				university: "UNIESP",
				qualification: "Administração de Empresas",
				years: "2010 - 2018",
			},
		],
	},
	{
		title: "experiência",
		data: [
			{
				company: "Freelancer",
				role: "Desenvolvedor Fullstack",
				years: "Dez 2022 - atual",
			},
			{
				company: "Editora Construir",
				role: "Assistente Commercial",
				years: "Mai 2018 - atual",
			},
			{
				company: "Skill Labs",
				role: "Tech Lead Front-End",
				years: "Ago 2023 - atual",
			},
			{
				company: "Skill Labs",
				role: "Desenvolvedor Frontend Junior",
				years: "Jan 2023 - Ago 2023",
			},
			{
				company: "Organize Soft",
				role: "Desenvolvedor Frontend Junior",
				years: "Dez 2022 - Fev 2023",
			},
		],
	},
];

export const skillData: SkillData[] = [
	{
		title: "skills",
		data: [
			{ name: "Linguagens: Typescript, Python, C#" },
			{ name: "Ecossistema JS, o que mais trabalho: ReactJS, NodeJS" },
			{ name: "Ecossistema JS, o que tenho conhecimento: AngularJS" },
			{ name: "Estilização: TailwindCss, Shadcn-ui" },
			{ name: "Backend: Postgres, Prisma" },
			{ name: "Mobile: React Native" },
			{ name: "Digital Design" },
		],
	},
	{
		title: "ferramentas",
		data: [
			{ imgPath: "/about/vscode.svg", tool: "VS Code" },
			{ imgPath: "/about/figma.svg", tool: "Figma" },
			{ imgPath: "/about/trello.svg", tool: "Trello" },
			{ imgPath: "/about/miro.svg", tool: "Miro" },
		],
	},
];

export const servicesData: ServicesData[] = [
	{
		icon: <Layout size={72} strokeWidth={0.8} />,
		title: "Frontend",
		description:
			"Criação de interfaces de usuário com ferramentas modernas que otimizam a experiência do usuário.",
	},
	{
		icon: <DatabaseZap size={72} strokeWidth={0.8} />,
		title: "Backend",
		description:
			"Desenvolvimento de servidores e bancos de dados eficientes para aplicativos web e móveis.",
	},
	{
		icon: <Layers size={72} strokeWidth={0.8} />,
		title: "Fullstack",
		description:
			"utilizando tecnologias modernas para criar aplicativos web e móveis completos.",
	},
];

export const projectData: ProjectData[] = [
	{
		image: "/work/fsw-donalds.png",
		category: "NextJs",
		name: "FSW 7.0",
		description:
			"Este é um projeto de um sistema de pedidos para um restaurante fictício chamado FSW Donalds. O sistema permite que os clientes façam pedidos online, selecionem produtos do menu e finalizem seus pedidos.",
		link: "https://fsw-donalds-tau.vercel.app/",
		github: "https://github.com/huannvictor/fsw-donalds",
	},
	{
		image: "/work/CSVGeneratorFromFiles.png",
		category: "python",
		name: "CSVGeneratorFromFiles",
		description:
			"Este projeto consiste em um script Python que automatiza a organização e geração de relatórios a partir de arquivos armazenados em uma pasta.",
		link: null,
		github: "https://github.com/huannvictor/CSVGeneratorFromFiles",
	},
	{
		image: "/work/cookapp.png",
		category: "react native",
		name: "Cook App",
		description:
			"Criei o CookApp usando React Native, seguindo o tutorial do Rocketseat. É um aplicativo de receitas onde os usuários selecionam ingredientes e obtêm opções de receitas personalizadas",
		link: "https://www.figma.com/file/op20QBiNSq1HaFue5minyl/Cook-App?type=design&node-id=0%3A1&mode=design&t=O1HJRbDhFFX98o8C-1",
		github: "https://github.com/huannvictor/cook-app",
	},
	{
		image: "/work/discordclone.png",
		category: "next js",
		name: "Discord Clone",
		description:
			"Neste curso de 11 horas aprendi como criar um fullstack ponta a ponta e um clone do Discord em tempo real, tudo com servidores, canais, chamadas de vídeo, chamadas de áudio, edição e exclusão de mensagens, bem como funções de membros.",
		link: null,
		github: "https://github.com/huannvictor/discord-clone",
	},
	{
		image: "/work/candycrush.png",
		category: "react js",
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
		description:
			"Short Link é um projeto Node.js que permite aos usuários encurtar URLs, redirecionar para a URL original e analisar o número de acessos.",
		link: "https://www.postman.com/docking-module-participant-28243338/workspace/huannvictor/collection/24904242-b41c2ded-9fd3-4e26-85f3-a23a9e2a8f5d?action=share&creator=24904242",
		github: "https://github.com/huannvictor/short-links",
	},
	{
		image: "/work/nlwExpertsNotes.png",
		category: "react js",
		name: "Expert Notes",
		description:
			"Expert Notes é um aplicativo web React inovador desenvolvido durante o evento online NLW utilizando Vite. Integrando perfeitamente a funcionalidade de gravação de áudio, o aplicativo transcreve com eficiência palavras faladas em texto, oferecendo aos usuários a flexibilidade de optar pela entrada manual, se preferirem. Com um design elegante e moderno, Expert Notes é esteticamente aprimorado com Tailwind CSS, garantindo uma experiência de usuário visualmente atraente e intuitiva.",
		link: "https://nlw-expert-notes-drab.vercel.app/",
		github: "https://github.com/huannvictor/nlwExpert-Notes",
	},
	{
		image: "/work/NerdBox-Store.png",
		category: "Javascript",
		name: "NerdBox Store",
		description:
			"De maneira dinâmica conseguimos cadastrar o produto e já visualizá-lo na mesma página. Opções de editar e excluir são criados a cada linha do item. O software utiliza da memória local da máquina para realizar as operações, impedindo de migrar seus dados para outra máquina.",
		link: "https://nerdbox-store.vercel.app/",
		github: "https://github.com/huannvictor/NerdBox-Store",
	},
	{
		image: "/work/TechLibrary.png",
		category: "CSharp",
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
