interface CtaTextProps {
	ctaTxt: string;
}

export default function CtaText({ ctaTxt }: CtaTextProps) {
	return <h2 className="h2 mb-8 max-w-xl text-center">{ctaTxt}</h2>;
}
