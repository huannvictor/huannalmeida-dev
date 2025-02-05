import Cta from "@/src/components/cta/index";

import { content } from "../components/cta/content";

export default function CtaSection() {
	const { cta, btnTxt } = content.pt;

	return (
		<Cta.Root>
			<Cta.Container>
				<Cta.Text ctaTxt={cta} />

				<Cta.Button btnTxt={btnTxt} />
			</Cta.Container>
		</Cta.Root>
	);
}
