import {
  Blocks,
  Calendar,
  GanttChartSquare,
  Gem,
  Home,
  Layout,
  Lightbulb,
  MailIcon,
  PhoneCall,
  User2
} from "lucide-react";

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
    text: 'Born on 22 Set, 1990',
  },
  {
    icon: <Home size={20} />,
    text: 'João Pessoa • Paraíba • Brazil',
  },
]

export const qualificationData: QualificationData[] = [
  {
    title: 'education',
    data: [
      {
        university: 'EBAC ',
        qualification: 'Javascript Fullstack Developer',
        years: '2023'
      },
      {
        university: 'OneBitCode',
        qualification: 'Javascript Fullstack Developer',
        years: '2023'
      },
      {
        university: 'Rocketseat',
        qualification: 'Javascript Fullstack Developer',
        years: '2022'
      },
      {
        university: 'UNIESP',
        qualification: 'Business Administration',
        years: '2010 - 2018'
      },
    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Skill Labs',
        role: 'Tech Lead Front-End',
        years: 'Aug 2023 - present'
      },
      {
        company: 'Skill Labs',
        role: 'Junior Front-End Developer',
        years: 'Jan 2023 - Aug 2023'
      },
      {
        company: 'Construir Publisher',
        role: 'Commercial Assistant',
        years: 'May 2018 - present'
      },
      {
        company: 'Organize Soft',
        role: 'Junior Front-End Developer',
        years: 'Dez 2022 - Feb 2023'
      },
    ]
  },
]

export const skillData: SkillData[] = [
  {
    title: 'skills',
    data: [
      { name: 'Javascript, Typescript, Python' },
      { name: 'TailwindCss, Shadcn-ui' },
      { name: 'Front-end Development' },
      { name: 'Back-end Development' },
      { name: 'Mobile Development' },
      { name: 'Digital Design' },
    ]
  },
  {
    title: 'tools',
    data: [
      { imgPath: '/about/vscode.svg' },
      { imgPath: '/about/figma.svg' },
      { imgPath: '/about/notion.svg' },
      { imgPath: '/about/illustrator.svg' },
    ]
  }
]

export const servicesData: ServicesData[] = [
  {
    icon: <Layout size={72} strokeWidth={0.8} />,
    title: 'Frontend Development',
    description: 'Crafting captivating user interfaces with clean and efficient code.'
  },
  {
    icon: <Lightbulb size={72} strokeWidth={0.8} />,
    title: 'Transforming Ideas',
    description: 'Bringing your vision to life with interactive and dynamic frontend solutions.'
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Innovative Frontend Solutions',
    description: 'Creating seamless and user-centric designs that resonate with your audience.'
  },
]

export const projectData: ProjectData[] = [
  {
    image: '/work/cookapp.png',
    category: 'react native',
    name: 'Cook App',
    description: "Built CookApp using React Native, following Rocketseat's tutorial.It's a recipe app where users select ingredients and get personalized recipe options",
    link: 'https://www.figma.com/file/op20QBiNSq1HaFue5minyl/Cook-App?type=design&node-id=0%3A1&mode=design&t=O1HJRbDhFFX98o8C-1',
    github: 'https://github.com/huannvictor/cook-app'
  },
  {
    image: '/work/discordclone.png',
    category: 'next js',
    name: 'Discord Clone',
    description: 'In this 11 hour course I learned how to create an end-to-end fullstack and real-time discord clone, all with servers, channels, video calls, audio calls, editing and deleting messages as well as member roles.',
    link: '/',
    github: 'https://github.com/huannvictor/discord-clone'
  },
  {
    image: '/work/candycrush.png',
    category: 'react js',
    name: 'Candy Crush React',
    description: 'In a brisk tutorial, I mastered crafting a Candy Crush web clone, delving into programming logic and essential React.js concepts along the way.',
    link: 'https://candy-crush-react-byhuann.vercel.app/',
    github: 'https://github.com/huannvictor/candy-crush-react'
  },
  {
    image: '/work/shortlinks.png',
    category: 'node js',
    name: 'Short Link',
    description: 'Short Link is a Node.js project that allows users to shorten URLs, redirect to the original URL, and analyze the number of accesses.',
    link: 'https://www.postman.com/docking-module-participant-28243338/workspace/huannvictor/collection/24904242-b41c2ded-9fd3-4e26-85f3-a23a9e2a8f5d?action=share&creator=24904242',
    github: 'https://github.com/huannvictor/short-links'
  },
]

export const reviewsData: ReviewsData[] = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Richard Thompson',
    job: 'Chef',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!'
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Ellen Bellane',
    job: 'Fashon Design',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!'
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'José Souza',
    job: 'Game Dev',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!'
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Emily Smith',
    job: 'Therapist',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!'
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Oliver Taylor',
    job: 'Engineer',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!'
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Mason Wilson',
    job: 'Video Editor',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, iste. Sunt dolores tempore in ipsum libero deleniti accusamus, illum iusto enim quis adipisci explicabo. Dolores rerum quasi possimus tenetur mollitia!'
  },
]