export function getData(
	arr: (QualificationData | SkillData)[],
	title: string,
): QualificationData | SkillData {
	const newArr = arr.find((item) => item.title === title);
	if (newArr === undefined) {
		throw new Error("Data is undefined");
	}
	return newArr;
}
