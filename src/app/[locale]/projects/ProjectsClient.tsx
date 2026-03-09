"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/src/components/ProjectCard";

interface ProjectsClientProps {
	projects: ProjectData[];
	allAreasLabel: string;
}

export default function ProjectsClient({ projects, allAreasLabel }: ProjectsClientProps) {
	const [techArea, setTechArea] = useState(allAreasLabel);

	const techAreas = [
		allAreasLabel,
		...new Set(projects.map((item) => item.techArea)),
	];

	const filteredProjects = projects.filter((project) => {
		return techArea === allAreasLabel ? project : project.techArea === techArea;
	});

	return (
		<Tabs defaultValue={techArea} className="mb-24 xl:mb-48">
			<TabsList className="mx-auto mb-12 grid size-fit dark:border-none md:flex md:border lg:max-w-160">
				{techAreas.map((area) => {
					return (
						<TabsTrigger
							className="w-40.5 capitalize md:w-auto"
							key={uuidv4()}
							value={area}
							onClick={() => setTechArea(area)}
						>
							{area}
						</TabsTrigger>
					);
				})}
			</TabsList>

			<div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8">
				{filteredProjects.map((project) => {
					return (
						<TabsContent value={techArea} key={uuidv4()}>
							<ProjectCard
								category={project.category}
								techArea={project.techArea}
								description={project.description}
								github={project.github}
								image={project.image}
								link={project.link}
								name={project.name}
							/>
						</TabsContent>
					);
				})}
			</div>
		</Tabs>
	);
}
