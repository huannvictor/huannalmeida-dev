'use client'

import ProjectCard from '@/src/components/ProjectCard'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {projectData} from '@/src/common/data/data'
import {useState} from 'react'

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
]
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects')

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          My Projects
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="mx-auto mb-12 grid size-fit dark:border-none md:flex md:border lg:max-w-[640px]">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  className="w-[162px] capitalize md:w-auto"
                  key={index}
                  value={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>

          <div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard
                    key={index}
                    category={project.category}
                    description={project.description}
                    github={project.github}
                    image={project.image}
                    link={project.link}
                    name={project.name}
                  />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
