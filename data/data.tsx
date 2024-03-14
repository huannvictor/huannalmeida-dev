import {
  Calendar,
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
        qualification: 'Tech Lead Front-End',
        years: 'jan 2023 - present'
      },
      {
        company: 'Skill Labs',
        qualification: 'Junior Front-End Developer',
        years: 'Aug 2023 - jan 2023'
      },
      {
        company: 'Construir Publisher',
        qualification: 'Commercial Assistant',
        years: 'May 2018 - present'
      },
      {
        company: 'Organize Soft',
        qualification: 'Junior Front-End Developer',
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
