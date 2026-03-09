import { getInfoData, getQualificationData, getSkillData } from "@/src/common/data/data";

import About from "../components/about/index";
import { getTranslations } from "next-intl/server";

export default async function AboutSection() {
	const t = await getTranslations('About')
	const tabsTriggers = [
		{ title: t('tabs.personal'), value: "personal" },
		{ title: t('tabs.qualifications'), value: "qualifications" },
		{ title: t('tabs.skills'), value: "skills" },
	]
	const personal = t.raw('personal') as PersonalContent
	const languageSkills = t.raw('languages') as languageSkills
	const tabsQualifications = t.raw('qualifications') as tabsQualifications
	const tabsSkills = t.raw('skills') as tabsSkills

	const infoData = await getInfoData()
	const qualificationData = await getQualificationData()
	const skillData = await getSkillData()

	return (
		<About.Root>
			<About.Container>
				<About.Image />
				<About.Tabs
					personal={personal}
					infoData={infoData}
					qualificationData={qualificationData}
					skillData={skillData}
					triggers={tabsTriggers}
					languageSkills={languageSkills}
					tabsQualifications={tabsQualifications}
					tabsSkills={tabsSkills}
				/>
			</About.Container>
		</About.Root>
	);
}
