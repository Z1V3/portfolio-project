'use client';

import profilePicture from "@/assets/images/profpic.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { useCallback, useState } from "react";
import { motion, useTime, useTransform } from "framer-motion";


export const HeroSection = () => {

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

        <div className="md:size-[620px] sm:size-[350px] hero-ring"></div>
        <div className="md:size-[820px] sm:size-[450px] hero-ring"></div>
        <div className="md:size-[1020px] sm:size-[550px] hero-ring"></div>
        <div className="md:size-[1220px] sm:size-[650px] hero-ring"></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="10s">
          <SparkleIcon className="size-8 text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="52s" shouldSpin spinDuration="10s">
          <SparkleIcon className="size-5 text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="54s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="56s" shouldSpin spinDuration="10s">
          <SparkleIcon className="size-10 text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="58s" shouldSpin spinDuration="15s">
          <StarIcon className="size-12 text-emerald-300" ></StarIcon>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="60s" shouldSpin spinDuration="15s">
          <StarIcon className="size-8 text-emerald-300" ></StarIcon>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="62s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="64s" shouldSpin spinDuration="10s">
          <SparkleIcon className="size-14 text-emerald-300/20"></SparkleIcon>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="66s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="68s" shouldSpin spinDuration="15s">
          <StarIcon className="size-28 text-emerald-300 animate-pulse" />
        </HeroOrbit>

      </div>
      <div className="container md:size-[1080px]">
        <div className="flex flex-col items-center">
        </div>
        <div className="max-w-lg mx-auto md:pt-96 sm:pt-16">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 sm:mt-20 tracking-wide">
            Hello, <br className="mb-3" /> My name is Andrija
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in software developing and engineering. <br className="" /> In short terms, making anything possible.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:scale-110 transition duration-300"
          >
            <span className="font-semibold z-20">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-20 hover:scale-110 transition duration-300"
          >
            <span>👋🏻</span>
            <span className="font-semibold">Let's connect</span>
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <a href="/Zivko_Andrija_CV.pdf" download={"Zivko_Andrija_CV.pdf"}
            id="cv"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative inline-flex items-center gap-2 border-white bg-emerald-300 text-gray-900 h-12 px-6 rounded-xl z-20 hover:scale-110 transition duration-300"
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
