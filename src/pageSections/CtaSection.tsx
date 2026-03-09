import Cta from "@/src/components/cta/index";
import { useTranslations } from "next-intl";

export default function CtaSection() {
	const t = useTranslations('Cta')

	return (
		<Cta.Root>
			<Cta.Container>
				<Cta.Text ctaTxt={t('text')} />

				<Cta.Button btnTxt={t('btnText')} />
			</Cta.Container>
		</Cta.Root>
	);
}
