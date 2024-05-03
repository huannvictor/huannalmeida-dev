import Image from 'next/image'

import {Briefcase, GraduationCap} from 'lucide-react'

import {Tabs, TabsContent, TabsList, TabsTrigger} from './ui/tabs'

import {infoData, qualificationData, skillData} from '@/data/data'
import DevImg from './DevImg'
import {content} from './about/content'

export default function About() {
  const getData = (
    arr: (QualificationData | SkillData)[],
    title: string,
  ): QualificationData | SkillData => {
    const newArr = arr.find((item) => item.title === title)
    if (newArr === undefined) {
      throw new Error('Data is undefined')
    }
    return newArr
  }

  return (
    <section className="mb-12 lg:mb-36">
      <div className="mx-auto w-full px-8 lg:max-w-[90vw]">
        <h2 className="section-title mx-auto mb-8 text-center lg:mb-16">
          {content.en.sectionTitle}
        </h2>

        <div className="flex flex-col lg:flex-row">
          <div className="relative hidden flex-1 lg:flex">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark size-[408px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>

          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full lg:max-w-[520px] lg:grid-cols-3">
                <TabsTrigger className="w-[162px] lg:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] lg:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] lg:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="mt-12 text-lg lg:mt-8">
                <TabsContent value="personal">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-4">{content.en.tabsPersonal.title}</h3>
                    <p className="subtitle mx-auto max-w-xl lg:mx-0">
                      {content.en.tabsPersonal.content}
                    </p>

                    <div className="mb-12 grid gap-4 lg:grid-cols-2">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="mx-auto flex items-center justify-start gap-x-4 md:mx-24 lg:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div className="text-sm md:text-base">
                              {item.text}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border" />
                      <div className="text-sm md:text-base">
                        <p>Brazilian Portuguese (native)</p>
                        <p>English (advanced)</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center lg:text-left">
                      My Awesome Journey
                    </h3>

                    <div className="grid gap-y-8 md:grid-cols-2">
                      {/* //* EXPERIENCE */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="h4 font-medium capitalize">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              // @ts-expect-error destructuring data
                              const {company, role, years} = item

                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] size-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]" />
                                  </div>
                                  <div>
                                    <div className="mb-2 text-lg font-semibold leading-none md:text-xl">
                                      {company}
                                    </div>
                                    <div className="mb-4 text-base leading-none text-muted-foreground md:text-lg">
                                      {role}
                                    </div>
                                    <div className="text-sm font-medium md:text-base">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </div>

                      {/* //* EDUCATION */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              // @ts-expect-error destructuring data
                              const {university, qualification, years} = item

                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] size-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]" />
                                  </div>
                                  <div>
                                    <div className="mb-2 text-lg font-semibold leading-none md:text-xl">
                                      {university}
                                    </div>
                                    <div className="mb-4 text-base leading-none text-muted-foreground md:text-lg">
                                      {qualification}
                                    </div>
                                    <div className="text-sm font-medium md:text-base">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border" />
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            // @ts-expect-error destructuring data
                            const {name} = item
                            return (
                              <div
                                className="mx-auto w-full text-left md:w-2/4 md:text-center lg:mx-0 lg:text-left"
                                key={index}
                              >
                                <div className="text-base font-medium md:text-lg">
                                  {name}
                                </div>
                              </div>
                            )
                          },
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-xl font-semibold lg:text-left">
                        Tools
                      </h4>
                      <div className="mb-4 border-b border-border" />
                      <div className="flex justify-center gap-x-8 lg:justify-start">
                        {getData(skillData, 'tools').data.map((item, index) => {
                          // @ts-expect-error destructuring data
                          const {imgPath} = item
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
