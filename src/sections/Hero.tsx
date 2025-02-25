'use client';

import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { useCallback, useState } from "react";
import { motion, useTime, useTransform } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/textGenerateEffect";


export const Heredction = () => {

  const scrollTo = useCallback((sectionId: string) => {
    const projectsSection = document.getElementById(sectionId);
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);


  const time = useTime();
  const rotate = useTransform(time, [0, 1500], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`;
  });

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="py-12 md:py-14 lg:py-20 relative z-0 overflow-x-clip mt-8" id="hero">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="md:size-[620px] sm:size-[350px] md:hidden hero-ring"></div>
        <div className="md:size-[820px] sm:size-[450px] md:hidden hero-ring"></div>

        <div className="md:size-[1020px] sm:size-[550px] hero-ring"></div>
        <div className="md:size-[1220px] sm:size-[650px] hero-ring"></div>
        <div className="md:size-[1420px] sm:size-[750px] hero-ring"></div>
        <div className="md:size-[1620px] sm:size-[850px] hero-ring"></div>
        <div className="md:size-[1820px] sm:size-[950px] hero-ring"></div>
        <div className="md:size-[2020px] sm:size-[1050px] hero-ring"></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="10s">
          <SparkleIcon className="size-8 text-indigo-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="52s" shouldSpin spinDuration="10s">
          <SparkleIcon className="size-5 text-indigo-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="54s">
          <div className="size-2 rounded-full bg-indigo-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="56s" shouldSpin spinDuration="10s">
          <SparkleIcon className="size-10 text-indigo-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="58s" shouldSpin spinDuration="15s">
          <StarIcon className="size-12 text-indigo-300" ></StarIcon>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="60s" shouldSpin spinDuration="15s">
          <StarIcon className="size-8 text-indigo-300" ></StarIcon>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="62s">
          <div className="size-2 rounded-full bg-indigo-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="64s" shouldSpin spinDuration="10s">
          <SparkleIcon className="size-14 text-indigo-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="66s">
          <div className="size-3 rounded-full bg-indigo-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="68s" shouldSpin spinDuration="15s">
          <StarIcon className="size-28 text-indigo-300 animate-pulse" />
        </HeroOrbit>

      </div>
      <div className="container md:size-[1180px]">
        <div className="flex flex-col items-center">
        </div>
        <div className="max-w-lg mx-auto md:pt-80 sm:pt-16">
          <div className="sm:mt-20 sm:mx-4">
            <div className="sm:mx-10">
              <TextGenerateEffect duration={1} filter={false} words={"Hello, "} />
              <div className="sm:pt-2 md:pt-6">
                <TextGenerateEffect duration={1} filter={false} words={"My name is Andrija"} />
              </div>
            </div>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I specialize in software developing and engineering. <br className="sm:hidden md:block" /> In short terms, making anything possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:scale-110 transition duration-300"
          >
            <span className="font-semibold z-20">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <a href="/Zivko_Andrija_CV.pdf" download={"Zivko_Andrija_CV.pdf"}
            id="cv"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative inline-flex items-center gap-2 border-white bg-indigo-300 text-gray-900 h-12 px-6 rounded-xl z-20 hover:scale-110 transition duration-300"
          >
            {isHovering && (
              <>
                <motion.div
                  className="absolute -inset-1 rounded-3xl"
                  style={{ background: rotatingBg, filter: "blur(5px)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -inset-1 rounded-3xl"
                  style={{ background: rotatingBg, filter: "blur(5px)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </>
            )}
            <span className="font-semibold">Download CV</span>
          </a>
        </div>
      </div>
    </div >
  );
};
