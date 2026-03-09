import { HomeIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

const Contact = async () => {
	const c = await getTranslations('Contact')
	return (
		<section>
			<div className="container mx-auto">
				<div className="mb-6 grid pt-12 lg:gap-10 xl:mb-24 xl:h-fit xl:grid-cols-2">
					<div className="flex flex-col justify-center">
						<div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
							<span className="h-0.5 w-7.5 bg-primary" />
							{c('greeting')}
						</div>
						<h1 className="h1 mb-8 max-w-5xl">{c('headline')}</h1>
						<div>
							<p className="subtitle xl:max-w-2/3">{c('desc1')}</p>
							<p className="subtitle xl:max-w-2/3">{c('desc2')}</p>
							<p className="subtitle xl:max-w-2/3">{c('desc3')}</p>
							<p className="subtitle xl:max-w-2/3 font-medium">{c('invitation')}</p>
						</div>
					</div>

					<div className="hidden bg-contact_illustrator_light bg-contain bg-top bg-no-repeat dark:bg-contact_illustrator_dark xl:flex xl:w-full" />
				</div>

				<div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
					<div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-4 xl:text-lg">
						<Link
							target="_blank"
							href="https://wa.me/send/?phone=5583999802317&text=Olá+Huann!"
						>
							<Button
								variant="link"
								className="p-0 h-fit flex items-center gap-x-8"
							>
								<RiWhatsappLine size={18} className="text-primary" />
								{c('btnText')}
							</Button>
						</Link>

						<div className="flex items-center gap-x-8">
							<MailIcon size={18} className="text-primary" />
							<span>huannvictor@gmail.com</span>
						</div>

						<div className="flex items-center gap-x-8">
							<HomeIcon size={18} className="text-primary" />
							<span>{c('location')}</span>
						</div>

						<div className="flex items-center gap-x-8">
							<PhoneCallIcon size={18} className="text-primary" />
							<span>+55 83 99980-2317</span>
						</div>
					</div>

					{/* <Form /> */}
				</div>
			</div>
		</section>
	);
};

export default Contact;
