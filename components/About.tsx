import {
  Calendar,
  Home,
  MailIcon,
  PhoneCall,
  User2
} from "lucide-react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";


interface Qualification {
  university: string;
  qualification: string;
  years: string;
}

interface Experience {
  company: string;
  qualification: string;
  years: string;
}

interface QualificationData {
  title: string;
  data: (Qualification | Experience)[];
}

interface Skill {
  name: string;
}

interface Tool {
  imgPath: string;
}

interface SkillData {
  title: string;
  data: (Skill | Tool)[];
}

const infoData = [
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
    text: '120 Hermenegildo F. da Cruz St, JP, Brazil',
  },
]

const qualificationData: QualificationData[] = [
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

const skillData: SkillData[] = [
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


const About = () => {
  const getData = (arr: (QualificationData | SkillData)[], title: string) => {
    return arr.find((item) => item.title)
  }

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>

        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark size-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="fex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value='qualifications'>
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value='skills'>Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore laborum repellendus a, aspernatur molestias repellat.
                    </p>

                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">Qualifications Info</TabsContent>
                <TabsContent value="skills">Skills Info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About