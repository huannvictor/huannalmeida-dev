import { Download, FileDownIcon, Send } from "lucide-react";
import Link from "next/link";

import { Button } from "../../../components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../../components/ui/dialog";
import { useTranslations } from "next-intl";

export default function HeroButtons() {
	const t = useTranslations('Hero')
	return (
		<div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row lg:mx-0">
			<Link href="/contact">
				<Button className="gap-x-2">
					{t('btnContact')}
					<Send size={18} />
				</Button>
			</Link>

			<Dialog>
				<DialogTrigger asChild>
					<Button variant="secondary" className="gap-x-2">
						Download CV
						<Download size={18} />
					</Button>
				</DialogTrigger>
				<DialogContent className="flex w-full flex-col">
					<DialogHeader>
						<DialogTitle>{t('dialogTitle')}</DialogTitle>
						<DialogDescription>
							{t('dialogDescription')}
						</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col items-center justify-center gap-x-2 md:flex-row">
						<Link target="_blank" href="/files/CV_HuannAlmeida_EN.pdf">
							<Button variant="link" className="flex items-center gap-x-2">
								{t('englishVersion')}
								<FileDownIcon />
							</Button>
						</Link>
						<Link target="_blank" href="/files/CV_HuannAlmeida_PTBR.pdf">
							<Button variant="link" className="flex items-center gap-x-2">
								{t('portugueseVersion')}
								<FileDownIcon />
							</Button>
						</Link>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
