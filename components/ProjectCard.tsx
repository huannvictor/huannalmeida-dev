import Image from 'next/image'
import Link from 'next/link'
import { RiGithubLine, RiLink } from 'react-icons/ri'
import { Badge } from './ui/badge'
import { Card, CardHeader } from './ui/card'

const ProjectCard = (project: ProjectData) => {
  return (
    <Card className="group overflow-hidden relative border-2">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            alt={project.name}
            width={247}
            height={250}
            priority
          />
          <div className="flex gap-x-4">
            <Link
              target="_blank"
              href={project.link}
              className="bg-secondary size-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <RiLink size={24} className="text-white" />
            </Link>
            <Link
              target="_blank"
              href={project.github}
              className="bg-secondary size-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <RiGithubLine size={24} className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>

      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1"> {project.name} </h4>
        <p className="text-muted-foreground text-base lg:text-lg font-light max-h-14 line-clamp-2">
          {project.description}
        </p>
      </div>
    </Card>
  )
}

export default ProjectCard
