import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container relative">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 z-0" style={{
            backgroundImage: `url(${grainImage.src})`,
          }}></div>
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-center z-10">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <a href="mailto:andrijazifko@gmail.com" className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
