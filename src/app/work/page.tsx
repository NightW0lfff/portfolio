"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Natours Project",
    description:
      "A beautifully designed frontend project showcasing an interactive and responsive travel tour website, built with modern web technologies like HTML, CSS, and advanced animations.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "SCSS/SASS",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/",
    live: "https://nightw0lfff.github.io/natours/",
    github: "https://github.com/NightW0lfff/natours",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Pizza Menu Project",
    description:
      "A simple yet elegant pizza menu showcasing a clean and responsive design, perfect for displaying food options with an intuitive layout.",
    stack: [
      {
        name: "React.js",
      },

      {
        name: "Html 5",
      },
      {
        name: "Css 3",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/",
    live: "https://pizza-menu-nn6x0pi2x-long-nguyens-projects-4cd06ab3.vercel.app/",
    github: "https://github.com/NightW0lfff/pizza-menu",
  },
  {
    num: "03",
    category: "frontend",
    title: "Flash Card Project",
    description:
      "An interactive flashcard application with a clean design, enabling efficient learning and review through a responsive and user-friendly interface.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "SCSS/SASS",
      },
      {
        name: "Node.js",
      },
      /*  {
        name: "Tailwind.css",
      }, */
    ],
    image: "/",
    live: "https://nightw0lfff.github.io/flash-card/",
    github: "https://github.com/NightW0lfff/flash-card",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stock */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-accent after:content-[','] last:after:content-['']"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github reposiroty</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
