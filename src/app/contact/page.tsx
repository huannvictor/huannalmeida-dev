import { HomeIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import Form from "@/src/components/Form";

const Contact = () => {
	return (
		<section>
			<div className="container mx-auto">
				<div className="mb-6 grid pt-12 lg:gap-10 xl:mb-24 xl:h-fit xl:grid-cols-2">
					<div className="flex flex-col justify-center">
						<div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
							<span className="h-[2px] w-[30px] bg-primary" />
							Olá 👋
						</div>
						<h1 className="h1 mb-8 max-w-screen-lg">Procurando um desenvolvedor com sólida experiência técnica e visão estratégica?</h1>
						<div>
							<p className="subtitle xl:max-w-2/3">
								Como <strong>Tech Lead Front-End</strong> e <strong>Desenvolvedor de Automação</strong>,trago uma abordagem completa para o seu time.
							</p>
							<p className="subtitle xl:max-w-2/3">
								Especialista em ecossistemas modernos com <strong>React, Next.js e Tailwind CSS</strong>, além de desenvolver soluções de <strong>RPA em Python</strong> que transformam processos manuais em fluxos de trabalho eficientes e escaláveis.
							</p>
							<p className="subtitle xl:max-w-2/3">
								Meu foco é unir alta performance técnica com a liderança necessária para impulsionar a inovação e o crescimento real da sua organização.
							</p>
							<p className="subtitle xl:max-w-2/3 font-medium">
								Vamos conversar sobre como posso agregar valor ao seu time.
							</p>
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
								me manda uma mensagem ;)
							</Button>
						</Link>

						<div className="flex items-center gap-x-8">
							<MailIcon size={18} className="text-primary" />
							<span>huannvictor@gmail.com</span>
						</div>

						<div className="flex items-center gap-x-8">
							<HomeIcon size={18} className="text-primary" />
							<span>João Pessoa - Paraíba/Brasil</span>
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
