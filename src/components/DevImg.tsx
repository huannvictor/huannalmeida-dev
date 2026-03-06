import Image from "next/image";

interface DevImgProps {
	containerStyles: string;
	imgSrc: string;
	alt?: string;
	priority?: boolean;
}

const DevImg = ({
	containerStyles,
	imgSrc,
	alt = "",
	priority = false,
}: DevImgProps) => {
	return (
		<div className={`${containerStyles}`}>
			<Image src={imgSrc} alt={alt} fill priority={priority} />
		</div>
	);
};

export default DevImg;
