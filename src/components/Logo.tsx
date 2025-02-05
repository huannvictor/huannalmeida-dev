import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/">
			<Image src="/logo.svg" alt="" width={54} height={54} priority />
		</Link>
	);
};
