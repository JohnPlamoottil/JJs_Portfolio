import { Button } from "./ui/Button";
import { ProjectCard } from "./ui/ProjectCard";
import { IntroProjectData, LibraryData, SixtiethBirthdayData, CoffeeShopData, RealEstateWebsiteData, RealtyFormData, AroundTheUsData, WTWRData, FinalData, FebCodeJamData, MayCodeJamData, JulyCodeJamData, FrontEndData, BackEndData} from "@/data/data";
import { FaLocationArrow } from "react-icons/fa6";

export const Projects = () => {
  return (
    <section className="relative flex flex-col gap-10" id="projects">
      <div className="max-w-[1350px] m-auto px-7">
        <div>
          <div className="flex items-center">
            <span className="border-[#797979] mr-2 border-[1px] w-full"></span>
            <h1 className="text-left font-bold md:text-5xl lg:text-6xl whitespace-nowrap">
              Projects<span className="text-purple">.</span>
            </h1>
          </div>
          <div className="mt-6">
            <div
              role="list"
              aria-label="Projects"
              className="flex gap-6 overflow-x-auto py-4 px-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700"
            >
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start">
                <ProjectCard {...FinalData} />
              </div>
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start">
                <ProjectCard {...WTWRData} />
              </div>
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start">
                <ProjectCard {...AroundTheUsData} />
              </div>
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start">
                <ProjectCard {...RealtyFormData} />
              </div>
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start">
                <ProjectCard {...RealEstateWebsiteData} />
              </div>
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start">
                <ProjectCard {...CoffeeShopData} />
              </div>
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start">
                <ProjectCard {...SixtiethBirthdayData} />
              </div>
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start">
                <ProjectCard {...LibraryData} />
              </div>
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start">
                <ProjectCard {...IntroProjectData} />
              </div>
            </div>
          </div>
          <div id="code jams">
            <div className="flex items-center">
              <span className="border-[#797979] mr-2 border-[1px] w-full"></span>
              <h1 className="text-left font-bold md:text-5xl lg:text-6xl whitespace-nowrap">
                Code Jams<span className="text-purple">.</span>
              </h1>
            </div>
            <div className="flex gap-8 md:gap-10 flex-wrap justify-center">
              <ProjectCard {...FebCodeJamData} />
              <ProjectCard {...MayCodeJamData} />
              <ProjectCard {...JulyCodeJamData} />
            </div>
          </div>

          <div id="externship">
            <div className="flex items-center">
              <span className="border-[#797979] mr-2 border-[1px] w-full"></span>
              <h1 className="text-left font-bold md:text-5xl lg:text-6xl whitespace-nowrap">
                Externship <span className="text-purple">.</span>
              </h1>
            </div>
            <div className="flex gap-8 md:gap-10 flex-wrap justify-center">
              <ProjectCard {...FrontEndData} />
              <ProjectCard {...BackEndData} />
            </div>
          </div>

        </div>

        <a
          href="https://github.com/JohnPlamoottil"
          target="_blank"
          className="w-fit mx-auto"
        >
          <Button
            otherClasses="backdrop-blur-lg m-auto"
            title="Explore more"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};
