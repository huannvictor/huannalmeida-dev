import { v4 as uuidv4 } from "uuid";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface ServicesCardsProps {
	servicesData: ServicesData[];
}

export default function ServicesCards({ servicesData }: ServicesCardsProps) {
	return (
		<div className="grid justify-center gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-24">
			{servicesData.map((item, index) => {
				return (
					<Card
						className="relative flex h-75 w-full max-w-106 flex-col items-center justify-center border-2 pb-10 pt-16"
						key={uuidv4()}
					>
						<CardHeader className="absolute -top-15 text-primary">
							<div className="flex h-full w-35 items-center justify-center bg-background">
								{item.icon}
							</div>
						</CardHeader>
						<CardContent className="text-center mt-12">
							<CardTitle className="mb-4 text-lg md:text-xl">
								{item.title}
							</CardTitle>
							<CardDescription className="m-2 text-base xl:text-lg">
								{item.description}
							</CardDescription>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
