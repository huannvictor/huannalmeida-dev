import {
  Calendar,
  Gem,
  Home,
  Layout,
  Lightbulb,
  MailIcon,
  PhoneCall,
  User2,
} from 'lucide-react'

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Huann Almeida',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+55 83 99980-2317',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'huannvictor@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Nasci em 22 Set, 1990',
  },
  {
    icon: <Home size={20} />,
    text: 'João Pessoa • Paraíba • Brasil',
  },
]

export const qualificationData: QualificationData[] = [
  {
    title: 'educação',
    data: [
      {
        university: 'Wyden',
        qualification: 'Análise e Desenvolvimento de Sistemas',
        years: '2024 - 2027',
      },
      {
        university: 'EBAC ',
        qualification: 'Dev Fullstack Javascript',
        years: '2023',
      },
      {
        university: 'OneBitCode',
        qualification: 'Dev Fullstack Javascript',
        years: '2023',
      },
      {
        university: 'Rocketseat',
        qualification: 'Dev Fullstack Javascript',
        years: '2022',
      },
      {
        university: 'UNIESP',
        qualification: 'Administração de Empresas',
        years: '2010 - 2018',
      },
    ],
  },
  {
    title: 'experiência',
    data: [
      {
        company: 'Editora Construir',
        role: 'Assistente Commercial',
        years: 'Mai 2018 - atual',
      },
      {
        company: 'Skill Labs',
        role: 'Tech Lead Front-End',
        years: 'Ago 2023 - atual',
      },
      {
        company: 'Skill Labs',
        role: 'Desenvolvedor Front-End Junior',
        years: 'Jan 2023 - Ago 2023',
      },
      {
        company: 'Organize Soft',
        role: 'Desenvolvedor Front-End Junior',
        years: 'Dez 2022 - Fev 2023',
      },
    ],
  },
]

export const skillData: SkillData[] = [
  {
    title: 'skills',
    data: [
      {name: 'Linguagens: Javascript, Python, C#'},
      {name: 'Ecossistema JS: ReactJS, NodeJS, Typescript'},
      {name: 'Estilização: TailwindCss, Shadcn-ui'},
      {name: 'Desenvolvimento Front-end'},
      {name: 'Desenvolvimento Back-end'},
      {name: 'Desenvolvimento Mobile'},
      {name: 'Digital Design'},
    ],
  },
  {
    title: 'ferramentas',
    data: [
      {imgPath: '/about/vscode.svg'},
      {imgPath: '/about/figma.svg'},
      {imgPath: '/about/notion.svg'},
      {imgPath: '/about/illustrator.svg'},
    ],
  },
]

export const servicesData: ServicesData[] = [
  {
    icon: <Layout size={72} strokeWidth={0.8} />,
    title: 'Desenvolvimento Frontend',
    description:
      'Criação de interfaces de usuário cativantes com código limpo e eficiente.',
  },
  {
    icon: <Lightbulb size={72} strokeWidth={0.8} />,
    title: 'Transformando Ideias',
    description:
      'Dando vida à sua visão com soluções de front-end interativas e dinâmicas.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Soluções de front-end inovadoras',
    description:
      'Criação de designs integrados e centrados no usuário que ressoam com seu público.',
  },
]

export const projectData: ProjectData[] = [
  {
    image: '/work/cookapp.png',
    category: 'react native',
    name: 'Cook App',
    description:
      "Criei o CookApp usando React Native, seguindo o tutorial do Rocketseat. É um aplicativo de receitas onde os usuários selecionam ingredientes e obtêm opções de receitas personalizadas",
    link: 'https://www.figma.com/file/op20QBiNSq1HaFue5minyl/Cook-App?type=design&node-id=0%3A1&mode=design&t=O1HJRbDhFFX98o8C-1',
    github: 'https://github.com/huannvictor/cook-app',
  },
  {
    image: '/work/discordclone.png',
    category: 'next js',
    name: 'Discord Clone',
    description:
      'Neste curso de 11 horas aprendi como criar um fullstack ponta a ponta e um clone do Discord em tempo real, tudo com servidores, canais, chamadas de vídeo, chamadas de áudio, edição e exclusão de mensagens, bem como funções de membros.',
    link: '/',
    github: 'https://github.com/huannvictor/discord-clone',
  },
  {
    image: '/work/candycrush.png',
    category: 'react js',
    name: 'Candy Crush React',
    description:
      'Em um tutorial rápido, dominei a criação de um clone da web do Candy Crush, me aprofundando na lógica de programação e nos conceitos essenciais do React.js ao longo do caminho.',
    link: 'https://candy-crush-react-byhuann.vercel.app/',
    github: 'https://github.com/huannvictor/candy-crush-react',
  },
  {
    image: '/work/shortlinks.png',
    category: 'node js',
    name: 'Short Link',
    description:
      'Short Link é um projeto Node.js que permite aos usuários encurtar URLs, redirecionar para a URL original e analisar o número de acessos.',
    link: 'https://www.postman.com/docking-module-participant-28243338/workspace/huannvictor/collection/24904242-b41c2ded-9fd3-4e26-85f3-a23a9e2a8f5d?action=share&creator=24904242',
    github: 'https://github.com/huannvictor/short-links',
  },
  {
    image: '/work/nlwExpertsNotes.png',
    category: 'react js',
    name: 'Expert Notes',
    description:
      'Expert Notes é um aplicativo web React inovador desenvolvido durante o evento online NLW utilizando Vite. Integrando perfeitamente a funcionalidade de gravação de áudio, o aplicativo transcreve com eficiência palavras faladas em texto, oferecendo aos usuários a flexibilidade de optar pela entrada manual, se preferirem. Com um design elegante e moderno, Expert Notes é esteticamente aprimorado com Tailwind CSS, garantindo uma experiência de usuário visualmente atraente e intuitiva.',
    link: 'https://nlw-expert-notes-drab.vercel.app/',
    github: 'https://github.com/huannvictor/nlwExpert-Notes',
  },
]

export const reviewsData: ReviewsData[] = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Richard Thompson',
    job: 'Chef',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Ellen Bellane',
    job: 'Fashon Design',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'José Souza',
    job: 'Game Dev',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Emily Smith',
    job: 'Therapist',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Oliver Taylor',
    job: 'Engineer',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Mason Wilson',
    job: 'Video Editor',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!',
  },
]
