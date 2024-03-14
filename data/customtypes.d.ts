interface Qualification {
  university: string;
  qualification: string;
  years: string;
}

interface Experience {
  company: string;
  qualification: string;
  years: string;
}

interface QualificationData {
  title: string;
  data: (Qualification | Experience)[];
}

interface Skill {
  name: string;
}

interface Tool {
  imgPath: string;
}

interface SkillData {
  title: string;
  data: (Skill | Tool)[];
}