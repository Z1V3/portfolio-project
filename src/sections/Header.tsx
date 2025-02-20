'use client';

import { useCallback } from "react";

export const Header = () => {

    const scrollTo = useCallback((sectionId: string) => {
      const projectsSection = document.getElementById(sectionId);
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 left-0 right-0 z-10"> {/* Added fixed positioning */}
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a onClick={() => scrollTo("hero")} className="nav-item">Home</a>
        <a onClick={() => scrollTo("projects")} className="nav-item">Projects</a>
        <a onClick={() => scrollTo("about")} className="nav-item">About</a>
        <a onClick={() => scrollTo("contact")} className="nav-item bg-white text-gray-900">Contact</a>
      </nav>
    </div>
  );
};