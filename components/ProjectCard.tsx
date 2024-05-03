import Image from 'next/image'
import Link from 'next/link'
import {RiGithubLine, RiLink} from 'react-icons/ri'
import {Badge} from './ui/badge'
import {Card, CardHeader} from './ui/card'

const ProjectCard = (project: ProjectData) => {
  return (
    <Card className="group relative overflow-hidden border-2">
      <CardHeader className="p-0">
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat xl:dark:bg-work_project_bg_dark">
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
              className="flex size-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              <RiLink size={24} className="text-white" />
            </Link>
            <Link
              target="_blank"
              href={project.github}
              className="flex size-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              <RiGithubLine size={24} className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>

      <div className="h-full px-8 py-6">
        <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1"> {project.name} </h4>
        <p className="line-clamp-2 max-h-14 text-base font-light text-muted-foreground lg:text-lg">
          {project.description}
        </p>
      </div>
    </Card>
  )
}

export default ProjectCard
