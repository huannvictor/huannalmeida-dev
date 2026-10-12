import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProficiencyCard from "./ProficiencyCard";

interface ProficiencyTabsProps {
	categories: ProficiencyCategory[];
}

export default function ProficiencyTabs({ categories }: ProficiencyTabsProps) {
	return (
		<Tabs defaultValue="languages" className="mx-auto max-w-5xl">
			<div className="mb-8 flex justify-center lg:mb-12">
				<TabsList className="grid h-auto w-full max-w-3xl grid-cols-1 gap-1.5 rounded-2xl p-2 sm:grid-cols-2 lg:grid-cols-4 lg:rounded-[30px]">
					{categories.map((category) => (
						<TabsTrigger
							key={category.id}
							value={category.id}
							className="h-11 w-full rounded-xl px-4 text-sm font-medium lg:rounded-full"
						>
							{category.title}
						</TabsTrigger>
					))}
				</TabsList>
			</div>

			{categories.map((category) => (
				<TabsContent key={category.id} value={category.id} className="mt-0">
					<div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-4">
						{category.items.map((item) => (
							<ProficiencyCard
								key={item.name}
								icon={item.icon}
								name={item.name}
								score={item.score}
								maxScore={item.maxScore}
							/>
						))}
					</div>
				</TabsContent>
			))}
		</Tabs>
	);
}
