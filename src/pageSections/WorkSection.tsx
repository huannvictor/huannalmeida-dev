import { getProjectData } from "@/src/common/data/data";
import Work from "@/src/components/work/index";
import { getTranslations } from "next-intl/server";

interface WorkSectionProps {}

export default async function WorkSection({}: WorkSectionProps) {
	const projectData = await getProjectData();
	const w = await getTranslations("Work")

	return (
		<Work.Root>
			<Work.Container>
				<Work.TextContent
					title={w('title')}
					description={w('description')}
					btnText={w('btnText')}
				/>

				<Work.Carousel projectData={projectData} />
			</Work.Container>
		</Work.Root>
	);
}
