import { Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { getData } from "./getData";

interface AboutTabsProps {
	triggers: TabsTriggersProps[];
	content: TabsContentProps;
	infoData: InfoData[];
	qualificationData: QualificationData[];
	skillData: SkillData[];
}

export default function AboutTabs({
	triggers,
	content,
	infoData,
	qualificationData,
	skillData,
}: AboutTabsProps) {
	return (
		<div className="flex-1">
			<Tabs defaultValue="personal">
				<TabsList className="grid w-full lg:max-w-[520px] lg:grid-cols-3">
					{triggers.map((trigger) => (
						<TabsTrigger
							className="w-[162px] lg:w-auto"
							value={trigger.value}
							key={uuidv4()}
						>
							{trigger.title}
						</TabsTrigger>
					))}
				</TabsList>

				<div className="mt-12 text-lg lg:mt-8">
					{/**  PERSONAL */}
					<TabsContent value="personal">
						<div className="text-center lg:text-left">
							<h3 className="h3 mb-4">{content.tabsPersonal.title}</h3>
							{content.tabsPersonal.content.map((paragraph) => (
								<p
									className="paragraph mx-auto max-w-xl lg:mx-0"
									key={uuidv4()}
								>
									{paragraph}
								</p>
							))}

							<div className="mb-12 grid gap-4 lg:grid-cols-2">
								{infoData.map((item) => (
									<div
										className="mx-auto flex items-center justify-start gap-x-4 md:mx-24 lg:mx-0"
										key={uuidv4()}
									>
										<div className="text-primary">{item.icon}</div>
										<div className="text-sm md:text-base">{item.text}</div>
									</div>
								))}
							</div>

							<div className="flex flex-col gap-y-2">
								<div className="text-primary">
									{content.languageSkills.title}
								</div>
								<div className="border-b border-border" />
								<div className="text-sm md:text-base">
									{content.languageSkills.options.map((lang) => (
										<p key={uuidv4()}>{lang}</p>
									))}
								</div>
							</div>
						</div>
					</TabsContent>
					{/** QUALIFICATIONS */}
					<TabsContent value="qualifications">
						<div>
							<h3 className="h3 mb-8 text-center lg:text-left">
								{content.tabsQualifications.title}
							</h3>

							<div className="grid gap-y-8 md:grid-cols-2">
								{/* //* EXPERIENCE */}
								<div className="flex flex-col gap-y-6">
									<div className="flex items-center gap-x-4 text-[22px] text-primary">
										<Briefcase />
										<h4 className="h4 font-medium capitalize">
											{getData(qualificationData, "experiência").title}
										</h4>
									</div>

									<div className="flex flex-col gap-y-8">
										{getData(qualificationData, "experiência").data.map(
											(item) => {
												// @ts-expect-error destructuring data
												const { company, role, years } = item;

												return (
													<div className="group flex gap-x-8" key={uuidv4()}>
														<div className="relative ml-2 h-[84px] w-[1px] bg-border">
															<div className="absolute -left-[5px] size-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]" />
														</div>
														<div>
															<div className="mb-1 text-lg font-semibold leading-none md:text-xl">
																{company}
															</div>
															<div className="mb-2 text-base leading-none text-muted-foreground md:text-lg">
																{role}
															</div>
															<div className="text-sm font-medium md:text-base">
																{years}
															</div>
														</div>
													</div>
												);
											},
										)}
									</div>
								</div>

								{/* //* EDUCATION */}
								<div className="flex flex-col gap-y-6">
									<div className="flex items-center gap-x-4 text-[22px] text-primary">
										<GraduationCap size={28} />
										<h4 className="font-medium capitalize">
											{getData(qualificationData, "educação").title}
										</h4>
									</div>

									<div className="flex flex-col gap-y-8">
										{getData(qualificationData, "educação").data.map((item) => {
											// @ts-expect-error destructuring data
											const { university, qualification, years } = item;

											return (
												<div className="group flex gap-x-8" key={uuidv4()}>
													<div className="relative ml-2 h-[84px] w-[1px] bg-border">
														<div className="absolute -left-[5px] size-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]" />
													</div>
													<div>
														<div className="mb-1 text-lg font-semibold leading-none md:text-xl">
															{university}
														</div>
														<div className="mb-2 text-base leading-none text-muted-foreground md:text-lg">
															{qualification}
														</div>
														<div className="text-sm font-medium md:text-base">
															{years}
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</TabsContent>
					{/** SKILLS */}
					<TabsContent value="skills">
						<div className="text-center lg:text-left">
							<h3 className="h3 mb-8">{content.tabsSkills.title}</h3>
							<div className="mb-16">
								<h4 className="mb-2 text-xl font-semibold">
									{content.tabsSkills.skills}
								</h4>
								<div className="mb-4 border-b border-border" />
								<div className="mx-auto text-zinc-400text-left space-y-2 md:text-center lg:mx-0 lg:text-left">
									{getData(skillData, "skills").data.map((item) => {
										// @ts-expect-error destructuring data
										const { name } = item;
										return (
											<p
												key={uuidv4()}
												className="text-base font-medium md:text-lg"
											>
												{name}
											</p>
										);
									})}
								</div>
							</div>

							<div>
								<h4 className="mb-2 text-xl font-semibold lg:text-left">
									{content.tabsSkills.tools}
								</h4>
								<div className="mb-4 border-b border-border" />
								<div className="flex justify-center gap-x-8 lg:justify-start">
									{getData(skillData, "ferramentas").data.map((item) => {
										// @ts-expect-error destructuring data
										const { imgPath, tool } = item;
										return (
											<HoverCard key={uuidv4()}>
												<div>
													<HoverCardTrigger asChild>
														<Image
															src={imgPath}
															width={48}
															height={48}
															alt={tool}
															priority
														/>
													</HoverCardTrigger>
													<HoverCardContent className="w-fit dark:bg-zinc-700/50 bg-zinc-100/50">
														<p className="text-xs text-zinc-400">{tool}</p>
													</HoverCardContent>
												</div>
											</HoverCard>
										);
									})}
								</div>
							</div>
						</div>
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
