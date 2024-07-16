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
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Kassasystem",
    description:
      "Dieses Projekt wurde während eines internen Praktikums bei BBRZ entwickelt. Unser Kunde war ein Café, das ein Kassensystem benötigte. Unser Produkt wird immer noch verwendet und funktioniert einwandfrei.",
    stack: [
      { name: "C#" },
      { name: "MAUI" },
      { name: "Blazor" },
      { name: "SQLite" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    image: "/assets/work/kassasystem.png",
    live: "",
    github: "https://github.com/syryoga/MauiKassasystem.git",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Portfolio",
    description:
      "Dieses Projekt habe ich als Portfolio für mich selbst erstellt. Es hat ein responsives Design und enthält auch ein Kontaktformular.",
    stack: [
      { name: "JS" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    image: "/assets/work/resume.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Autohändler",
    description:
      "Dieses Projekt habe ich persönlich im Rahmen meiner Ausbildung im BBRZ entwickelt. Es ist das Frontend für eine Online-Plattform zum Autoverkauf.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JS" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/Autofun.png",
    live: "",
    github: "https://github.com/bad-creator/Autoshop",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  console.log(project);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <div className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </div>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex flex-row gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* add comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}

                {/* github project button */}
                <Link href={project.github} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full  z-10"></div>

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
              <WorkSliderBtn
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
