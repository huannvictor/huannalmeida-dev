import { projectData } from "@/src/common/data/data";
import { content } from "@/src/components/work/content";
import Work from "@/src/components/work/index";

interface WorkSectionProps {}

export default function WorkSection({}: WorkSectionProps) {
	const { title, description, btnText } = content.pt;

	return (
		<Work.Root>
			<Work.Container>
				<Work.TextContent
					title={title}
					description={description}
					btnText={btnText}
				/>

				<Work.Carousel projectData={projectData} />
			</Work.Container>
		</Work.Root>
	);
}
