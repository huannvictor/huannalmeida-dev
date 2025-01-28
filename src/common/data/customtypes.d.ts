interface Qualification {
	university: string;
	qualification: string;
	years: string;
}

interface Experience {
	company: string;
	role: string;
	years: string;
}

interface Skill {
	name: string;
}

interface Tool {
	imgPath: string;
}

interface InfoData {
	icon: JSX.Element;
	text: string;
}

interface QualificationData {
	title: string;
	data: (Qualification | Experience)[];
}

interface SkillData {
	title: string;
	data: (Skill | Tool)[];
}

interface ServicesData {
	icon: ReactNode;
	title: string;
	description: string;
}

interface ProjectData {
	image: string;
	category: string;
	name: string;
	description: string;
	link: string;
	github: string;
}

interface ReviewsData {
	avatar: string;
	name: string;
	job: string;
	review: string;
}

interface BadgeProps {
	containerStyles: string;
	icon: ReactNode;
	endCountNum?: number;
	endCountText?: string;
	badgeText: string;
}

interface TabsTriggersProps {
	title: string;
	value: string;
}

interface TabsContentProps {
	sectionTitle: string;
	tabsTriggers: {
		title: string;
		value: string;
	}[];
	tabsPersonal: {
		title: string;
		content: string;
	};
	languageSkills: {
		title: string;
		options: string[];
	};
	tabsQualifications: {
		title: string;
	};
	tabsSkills: {
		title: string;
		skills: string;
		tools: string;
	};
}
