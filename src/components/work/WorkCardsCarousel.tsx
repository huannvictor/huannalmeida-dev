"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

import ProjectCard from "../ProjectCard";

interface WorkCadsCarouselProps {
	projectData: ProjectData[];
}

export default function WorkCadsCarousel({
	projectData,
}: WorkCadsCarouselProps) {
	return (
		<div className="max-w-[600px] lg:col-span-2">
			<Swiper
				className="h-[480px]"
				slidesPerView={1}
				breakpoints={{
					640: { slidesPerView: 2 },
				}}
				spaceBetween={30}
				modules={[Pagination]}
				pagination={{ clickable: true }}
			>
				{projectData.slice(0, 4).map((project) => {
					const { category, techArea, description, github, image, link, name } =
						project;

					return (
						<SwiperSlide key={uuidv4()}>
							<ProjectCard
								image={image}
								category={category}
								techArea={techArea}
								name={name}
								description={description}
								link={link}
								github={github}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
