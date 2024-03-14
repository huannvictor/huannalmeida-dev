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

interface QualificationData {
  title: string;
  data: (Qualification | Experience)[];
}

interface SkillData {
  title: string;
  data: (Skill | Tool)[];
}
