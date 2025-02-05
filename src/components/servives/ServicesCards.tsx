import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { v4 as uuidv4 } from "uuid";

interface ServicesCardsProps {
	servicesData: ServicesData[];
}

export default function ServicesCards({ servicesData }: ServicesCardsProps) {
	return (
		<div className="grid justify-center gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-24">
			{servicesData.map((item, index) => {
				return (
					<Card
						className="relative flex h-[300px] w-full max-w-[424px] flex-col items-center justify-center border-2 pb-10 pt-16"
						key={uuidv4()}
					>
						<CardHeader className="absolute -top-[60px] text-primary">
							<div className="flex h-[80px] w-[140px] items-center justify-center bg-white dark:bg-background">
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
	);
}
