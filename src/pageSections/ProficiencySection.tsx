import { getTranslations } from "next-intl/server";

import { getProficiencyData } from "@/src/common/data/data";

import Proficiency from "../components/proficiency/index";

export default async function ProficiencySection() {
	const t = await getTranslations("Proficiency");
	const categories = await getProficiencyData();

	return (
		<Proficiency.Root>
			<Proficiency.Container
				title={t("sectionTitle")}
				subtitle={t("subtitle")}
			>
				<Proficiency.Tabs categories={categories} />
			</Proficiency.Container>
		</Proficiency.Root>
	);
}
