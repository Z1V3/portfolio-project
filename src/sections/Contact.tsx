'use client';

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { motion, useTime, useTransform } from "framer-motion";
import { useState } from "react";

export const ContactSection = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`;
  });

  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="py-16 pt-12 lg:py-24 lg:pt-20"
      id="contact"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container relative">
        <div className="relative">
          <div className="bg-gradient-to-r from-indigo-300 to-blue-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-10">
            <div
              className="absolute inset-0 opacity-5 z-0"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-center z-10">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Lets create something amazing together
                </h2>
                <p className="text-sm md:text-base mt-2">
                  Ready to bring your next project to life? Lets connect and
                  discuss how I can help you achieve your goals.
                </p>
              </div>
              <div>
                <a
                  href="mailto:andrijazifko@gmail.com"
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:rotate-1"
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
          {isHovering && (
            <>
              <motion.div
                className="absolute -inset-1 rounded-3xl"
                style={{ background: rotatingBg, filter: "blur(10px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -inset-1 rounded-3xl"
                style={{ background: rotatingBg, filter: "blur(10px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};