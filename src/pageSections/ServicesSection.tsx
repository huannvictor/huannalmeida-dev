import { getServicesData } from "@/src/common/data/data";

import Services from "../components/servives";

interface ServicesSectionProps {}

export default async function ServicesSection({}: ServicesSectionProps) {
	const servicesData = await getServicesData()

	return (
		<Services.Root>
			<Services.Container title="Meus Serviços">
				<Services.Cards servicesData={servicesData} />
			</Services.Container>
		</Services.Root>
	);
}
