import { v4 as uuidv4 } from "uuid";

import { getServicesData } from "@/src/common/data/data";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";

const Services = async () => {
	const servicesData = await getServicesData();
	
	return (
		<section className="mb-12 lg:mb-36">
			<div className="container mx-auto">
				<h2 className="section-title mx-auto mb-12 text-center lg:mb-24">
					Meus Serviços
				</h2>

				<div className="grid justify-center gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-24">
					{servicesData.map((item) => {
						return (
							<Card
								className="relative flex h-75 w-full max-w-106 flex-col items-center justify-center border-2 pb-10 pt-16"
								key={uuidv4()}
							>
								<CardHeader className="absolute -top-15 text-primary">
									<div className="flex h-20 w-35 items-center justify-center bg-white dark:bg-background">
										{item.icon}
									</div>
								</CardHeader>
								<CardContent className="text-center">
									<CardTitle className="mb-4 text-xl md:text-2xl">
										{item.title}
									</CardTitle>
									<CardDescription className="text-base md:text-lg">
										{item.description}
									</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
