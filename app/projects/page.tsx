'use client'

import ProjectCard from "@/components/ProjectCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projectData } from "@/data/data"
import { useState } from "react"

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
]
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects')

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
      ? project
      : project.category === category
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        <Tabs defaultValue={category}>
          <TabsList
            className="size-full grid md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  className="capitalize w-[162px] md:w-auto"
                  key={index}
                  value={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>

          <div>
            projects
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