import { getTranslations } from "next-intl/server";
import { getProjectData } from "@/src/common/data/data";
import ProjectsClient from "./ProjectsClient";

export default async function ProjectsPage() {
	const t = await getTranslations('Projects');
	const projectData = await getProjectData();

	return (
		<section className="min-h-screen pt-12">
			<div className="container mx-auto">
				<h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
					{t('title')}
				</h2>

				<ProjectsClient 
					projects={projectData} 
					allAreasLabel={t('allAreas')} 
				/>
			</div>
		</section>
	);
}
