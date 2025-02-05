"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

import { reviewsData } from "@/src/common/data/data-en";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";

const Reviews = () => {
	return (
		<section className="mb-12 xl:mb-32">
			<div className="container mx-auto">
				<h2 className="section-title mx-auto mb-12 text-center">Reviews</h2>

				<Swiper
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1400: { slidesPerView: 3 },
					}}
					spaceBetween={30}
					modules={[Pagination]}
					pagination={{ clickable: true }}
					className="h-[350px]"
				>
					{reviewsData.map((person) => {
						return (
							<SwiperSlide key={uuidv4()}>
								<Card className="min-h-[300px] bg-tertiary p-8 dark:bg-secondary/40">
									<CardHeader className="mb-10 p-0">
										<div className="flex items-center gap-x-4">
											<Image
												src={person.avatar}
												alt={person.name}
												width={70}
												height={70}
												priority
											/>
											<div className="flex flex-col">
												<CardTitle>{person.name}</CardTitle>
												<p>{person.job}</p>
											</div>
										</div>
									</CardHeader>

									<CardDescription className="line-clamp-4 to-muted-foreground text-lg">
										{person.review}
									</CardDescription>
								</Card>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Reviews;
