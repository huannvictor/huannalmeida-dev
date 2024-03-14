import {
  Blocks,
  Calendar,
  GanttChartSquare,
  Gem,
  Home,
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
        qualification: 'Bachelor Of Business Administration',
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
        years: 'jan 2023 - present'
      },
      {
        company: 'Skill Labs',
        role: 'Junior Front-End Developer',
        years: 'Aug 2023 - jan 2023'
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
      { name: 'HTML, CSS' },
      { name: 'Front-end Development' },
      { name: 'Digital Design' },
      { name: 'Javascript, Typescript, Python, C#' },
      { name: 'Back-end Development' },
    ]
  },
  {
    title: 'tools',
    data: [
      { imgPath: '/about/vscode.svg' },
      { imgPath: '/about/figma.svg' },
      { imgPath: '/about/notion.svg' },
    ]
  }
]

export const servicesData: ServicesData[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum soluta, totam laboriosam libero alias et!'
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum soluta, totam laboriosam libero alias et!'
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'App Development',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum soluta, totam laboriosam libero alias et!'
  },
]

export const projectData: ProjectData[] = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem vel nostrum iste laborum ducimus ipsam quaerat itaque iure ullam reprehenderit, perspiciatis quo corporis nemo molestias odit explicabo assumenda voluptatem!',
    link: '/',
    github: '/'
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Solstice Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem vel nostrum iste laborum ducimus ipsam quaerat itaque iure ullam reprehenderit, perspiciatis quo corporis nemo molestias odit explicabo assumenda voluptatem!',
    link: '/',
    github: '/'
  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'Lumina Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem vel nostrum iste laborum ducimus ipsam quaerat itaque iure ullam reprehenderit, perspiciatis quo corporis nemo molestias odit explicabo assumenda voluptatem!',
    link: '/',
    github: '/'
  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Evolve Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem vel nostrum iste laborum ducimus ipsam quaerat itaque iure ullam reprehenderit, perspiciatis quo corporis nemo molestias odit explicabo assumenda voluptatem!',
    link: '/',
    github: '/'
  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'Ignite Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem vel nostrum iste laborum ducimus ipsam quaerat itaque iure ullam reprehenderit, perspiciatis quo corporis nemo molestias odit explicabo assumenda voluptatem!',
    link: '/',
    github: '/'
  },
  {
    image: '/work/4.png',
    category: 'backend',
    name: 'Serenity Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem vel nostrum iste laborum ducimus ipsam quaerat itaque iure ullam reprehenderit, perspiciatis quo corporis nemo molestias odit explicabo assumenda voluptatem!',
    link: '/',
    github: '/'
  },
  {
    image: '/work/2.png',
    category: 'fullstack',
    name: 'Nova Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem vel nostrum iste laborum ducimus ipsam quaerat itaque iure ullam reprehenderit, perspiciatis quo corporis nemo molestias odit explicabo assumenda voluptatem!',
    link: '/',
    github: '/'
  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Zenith Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem vel nostrum iste laborum ducimus ipsam quaerat itaque iure ullam reprehenderit, perspiciatis quo corporis nemo molestias odit explicabo assumenda voluptatem!',
    link: '/',
    github: '/'
  },

]
