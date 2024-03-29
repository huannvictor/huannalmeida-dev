import Image from 'next/image'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Briefcase, GraduationCap } from 'lucide-react'

import { infoData, qualificationData, skillData } from '@/data/data'

export default function AboutTabs() {
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
    <div className="flex-1">
      <Tabs defaultValue="personal">
        <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px]">
          <TabsTrigger className="w-[162px] lg:w-auto" value="personal">
            Personal Info
          </TabsTrigger>
          <TabsTrigger className="w-[162px] lg:w-auto" value="qualifications">
            Qualifications
          </TabsTrigger>
          <TabsTrigger className="w-[162px] lg:w-auto" value="skills">
            Skills
          </TabsTrigger>
        </TabsList>

        <div className="text-lg mt-12 lg:mt-8">
          <TabsContent value="personal">
            <div className="text-center lg:text-left">
              <h3 className="h3 mb-4">Consistent Quality in Development</h3>
              <p className="subtitle max-w-xl mx-auto lg:mx-0">
                Discover more about me, my journey, and interests. Dive into the
                person behind the code - a blend of passions, experiences, and
                skills.
              </p>

              <div className="grid lg:grid-cols-2 gap-4 mb-12">
                {infoData.map((item, index) => {
                  return (
                    <div
                      className="flex justify-start items-center gap-x-4 mx-auto md:mx-24 lg:mx-0"
                      key={index}
                    >
                      <div className="text-primary">{item.icon}</div>
                      <div className="text-sm md:text-base">{item.text}</div>
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

              <div className="grid md:grid-cols-2 gap-y-8">
                {/* //* EXPERIENCE */}
                <div className="flex flex-col gap-y-6">
                  <div className="flex gap-x-4 items-center text-[22px] text-primary">
                    <Briefcase />
                    <h4 className="h4 capitalize font-medium">
                      {getData(qualificationData, 'experience').title}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, 'experience').data.map(
                      (item, index) => {
                        // @ts-expect-error destructuring data
                        const { company, role, years } = item

                        return (
                          <div className="flex gap-x-8 group" key={index}>
                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                              <div className="size-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                            </div>
                            <div>
                              <div className="font-semibold text-lg md:text-xl leading-none mb-2">
                                {company}
                              </div>
                              <div className="text-base md:text-lg leading-none text-muted-foreground mb-4">
                                {role}
                              </div>
                              <div className="text-sm md:text-base font-medium">
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
                  <div className="flex gap-x-4 items-center text-[22px] text-primary">
                    <GraduationCap size={28} />
                    <h4 className="capitalize font-medium">
                      {getData(qualificationData, 'education').title}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, 'education').data.map(
                      (item, index) => {
                        // @ts-expect-error destructuring data
                        const { university, qualification, years } = item

                        return (
                          <div className="flex gap-x-8 group" key={index}>
                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                              <div className="size-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500" />
                            </div>
                            <div>
                              <div className="font-semibold text-lg md:text-xl leading-none mb-2">
                                {university}
                              </div>
                              <div className="text-base md:text-lg leading-none text-muted-foreground mb-4">
                                {qualification}
                              </div>
                              <div className="text-sm md:text-base font-medium">
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
                <h4 className="text-xl font-semibold mb-2">Skills</h4>
                <div className="border-b border-border mb-4" />
                <div>
                  {getData(skillData, 'skills').data.map((item, index) => {
                    // @ts-expect-error destructuring data
                    const { name } = item
                    return (
                      <div
                        className="w-full md:w-2/4 text-left md:text-center lg:text-left mx-auto lg:mx-0"
                        key={index}
                      >
                        <div className="text-base md:text-lg font-medium">
                          {name}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 lg:text-left">
                  Tools
                </h4>
                <div className="border-b border-border mb-4" />
                <div className="flex gap-x-8 justify-center lg:justify-start">
                  {getData(skillData, 'tools').data.map((item, index) => {
                    // @ts-expect-error destructuring data
                    const { imgPath } = item
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
  )
}
