'use client';

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
    const sections = ["hero", "projects", "about", "contact"];
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

  return (
    <div className="flex justify-end items-center fixed top-10 left-0 right-0 z-10">
      <nav className="sm:hidden md:visible md:flex flex flex-col gap-0 p-0.5 border border-white/0 rounded-l bg-white/0 backdrop-blur pr-5">
        <a
          onClick={() => scrollTo("hero")}
          className={`nav-item ${activeSection === "hero" ? "active-nav" : ""}`}
        >
          Home
        </a>
        <a
          onClick={() => scrollTo("projects")}
          className={`nav-item ${activeSection === "projects" ? "active-nav" : ""}`}
        >
          Projects
        </a>
        <a
          onClick={() => scrollTo("about")}
          className={`nav-item ${activeSection === "about" ? "active-nav" : ""}`}
        >
          About
        </a>
        <a
          onClick={() => scrollTo("contact")}
          className={`nav-item ${activeSection === "contact" ? "active-nav" : ""}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
