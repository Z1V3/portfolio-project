import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import webshopProjectImage from "@/assets/images/webshop-project.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { link } from "fs";


const portfolioProjects = [
  {
    company: "Personal",
    year: "2025",
    title: "Portfolio project",
    results: [
      { title: "Personal portfolio" },
      { title: "NextJS + TailwindCSS" },
      { title: "Deployed on Github pages" },
    ],
    linkRepo: "https://github.com/Z1V3/portfolio-project",
    linkLive: "https://z1v3.github.io/portfolio-project/",
    image: darkSaasLandingPage,
  },
  {
    company: "Personal",
    year: "2025",
    title: "Webshop project",
    results: [
      { title: "Art Webshop" },
      { title: "Frontend: NextJS + TailwindCSS" },
      { title: "Backend: .NET API project (C#)" },
      { title: "To be deployed on Vercel/Azure" },
    ],
    linkRepo: "https://github.com/Z1V3/webshop-project",
    linkLive: "",
    image: webshopProjectImage,
  },
  {
    company: "Hiring Assignment",
    year: "2024",
    title: "Simple Blog",
    results: [
      { title: "Blog project for hiring assignment" },
      { title: "ASP.NET MVC" },
      { title: "MySQL" },
    ],
    linkRepo: "https://github.com/Z1V3/SimpleBlog",
    linkLive: "",
    image: lightSaasLandingPage,
  },
  {
    company: "College collaboration with a IT company",
    year: "2023",
    title: "EVCharge",
    results: [
      { title: "Web app + Mobile app" },
      { title: "Web: React + raw CSS" },
      { title: "Mobile: Flutter" },
      { title: "Backend: Docker (containerized MySQL/.NET(C#))" },
    ],
    linkRepo: "https://github.com/Z1V3/EVCharge",
    linkLive: "",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Real-World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky hover:scale-110 transition duration-300 border-indigo-300 " style={{
              top: `calc(64px + ${projectIndex * 40}px`
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-indigo-300 to-blue-300 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"></hr>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-5">
                    <a href={project.linkRepo} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Github</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.linkLive} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span className="sm:hidden md:block">Live site</span>
                        <span className="md:hidden">Live</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"></Image>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
