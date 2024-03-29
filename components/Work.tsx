'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Link from 'next/link'
import { Button } from './ui/button'
import ProjectCard from './ProjectCard'

import { projectData } from '@/data/data'

const Work = () => {
  return (
    <section className="relative mb-12 lg:mb-48">
      <div className="mx-auto w-full px-8 lg:grid lg:max-w-[90vw] lg:grid-cols-3 lg:justify-items-center lg:gap-8">
        <div className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center lg:mx-0 lg:h-[400px] lg:items-start lg:text-left">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            From dynamic websites to interactive applications, each project
            showcases my passion for frontend development and my commitment to
            excellence in design and functionality.
          </p>

          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

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
            {projectData.slice(0, 4).map((project, index) => {
              const { category, description, github, image, link, name } =
                project

              return (
                <SwiperSlide key={index}>
                  <ProjectCard
                    image={image}
                    category={category}
                    name={name}
                    description={description}
                    link={link}
                    github={github}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
