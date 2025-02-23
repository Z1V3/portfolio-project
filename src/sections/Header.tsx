'use client';

import { motion, useTime, useTransform } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const scrollTo = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const sections = ["hero", "projects", "about"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // Adjust this for more or less sensitivity
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #a5b4fc, #f9b4fc)`;
  });
  const [isHovering, setIsHovering] = useState(false);


  return (
    <div className="flex justify-end items-center fixed top-10 left-0 right-0 z-10">
      <nav className="sm:hidden md:visible md:flex flex flex-col gap-0 p-0.5 border border-white/0 rounded-l bg-white/0 backdrop-blur pr-5">
        <button
          onClick={() => scrollTo("hero")}
          className={`nav-item ${activeSection === "hero" ? "active-nav" : ""}`}
        >
          Home
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className={`nav-item ${activeSection === "projects" ? "active-nav" : ""}`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollTo("about")}
          className={`nav-item ${activeSection === "about" ? "active-nav" : ""}`}
        >
          About
        </button>

        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="nav-item-contact"
          >
            Contact
            {isHovering && (
              <>
                <motion.div
                  className="absolute -inset-1 rounded-3xl -z-30 mt-4"
                  style={{ background: rotatingBg, filter: "" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};
