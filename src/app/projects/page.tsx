"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectData } from "@/src/common/data/data";
import ProjectCard from "@/src/components/ProjectCard";

const uniqueCategories = [
	"all projects",
	...new Set(projectData.map((item) => item.category)),
];

const uniqueTechAreas = [
	"all areas",
	...new Set(projectData.map((item) => item.techArea)),
];

const Projects = () => {
	const [techAreas, setTechAreas] = useState(uniqueTechAreas);
	const [techArea, setTechArea] = useState("all areas");

	const filteredTechAreas = projectData.filter((project) => {
		return techArea === "all areas" ? project : project.techArea === techArea;
	});

	return (
		<section className="min-h-screen pt-12">
			<div className="container mx-auto">
				<h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
					My Projects
				</h2>

				<Tabs defaultValue={techArea} className="mb-24 xl:mb-48">
					<TabsList className="mx-auto mb-12 grid size-fit dark:border-none md:flex md:border lg:max-w-[640px]">
						{techAreas.map((techArea) => {
							return (
								<TabsTrigger
									className="w-[162px] capitalize md:w-auto"
									key={uuidv4()}
									value={techArea}
									onClick={() => setTechArea(techArea)}
								>
									{techArea}
								</TabsTrigger>
							);
						})}
					</TabsList>

					<div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8">
						{filteredTechAreas.map((project) => {
							return (
								<TabsContent value={techArea} key={uuidv4()}>
									<ProjectCard
										key={uuidv4()}
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
			</div>
		</section>
	);
};

export default Projects;
