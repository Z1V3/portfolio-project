import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  }
]

const hobbies = [
  {
    title: "Martial Arts",
    emoji: "🥊",
    left: "5%",
    top: "5%"
  },
  {
    title: "Running",
    emoji: "🏃‍♂️",
    left: "50%",
    top: "6%"
  },
  {
    title: "Hiking",
    emoji: "🚶‍♂️",
    left: "35%",
    top: "40%"
  },
  {
    title: "Football",
    emoji: "⚽",
    left: "2%",
    top: "35%"
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "65%",
    top: "44%"
  },
  {
    title: "Nutrition",
    emoji: "🥦",
    left: "5%",
    top: "65%"
  },
  {
    title: "Yoga",
    emoji: "🧘‍♂️",
    left: "45%",
    top: "70%"
  },
  {
    title: "Fashion",
    emoji: "🧵",
    left: "75%",
    top: "0%"
  },
  {
    title: "Health",
    emoji: "❤️",
    left: "75%",
    top: "70%"
  },

]

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader eyebrow="About me" title="A Glimpse Into My world" description="Learn more about who I am, what I do, and what inspires me." />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="sm:h-[300px] lg:h-[225px] p-0 md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." className="" />
            <ToolboxItems items={toolboxItems} itemsWrapperClassName="sm:animate-move-left-fast md:animate-move-left" />
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6" />
              <div className="relative flex-1">
                {hobbies.map(hobby => (
                  <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute hover:-rotate-6 transition duration-100" style={
                    {
                      left: hobby.left,
                      top: hobby.top
                    }
                  }>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <a href="https://www.google.com/maps/place/Zagreb/@45.8427747,15.964364,37924m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4765d692c902cc39:0x3a45249628fbc28a!8m2!3d45.8150108!4d15.9819189!16zL20vMGZoenk?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                <Image src={mapImage} alt="map" className="h-full w-full object-cover hover:scale-110 transition duration-300" />
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
