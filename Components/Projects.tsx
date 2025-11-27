"use client";
import { Button } from "./ui/Button";
import { ProjectCard } from "./ui/ProjectCard";
import { IntroProjectData, LibraryData, SixtiethBirthdayData, CoffeeShopData, RealEstateWebsiteData, RealtyFormData, AroundTheUsData, WTWRData, FinalData, FebCodeJamData, MayCodeJamData, JulyCodeJamData, FrontEndData, BackEndData} from "@/data/data";
import { FaLocationArrow } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { Reveal } from "./ux/Reveal";

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const codeJamsScrollRef = useRef<HTMLDivElement>(null);
  const externshipScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative flex flex-col gap-10" id="projects">
      <div className="max-w-[1350px] m-auto px-7">
        <div>
          <div className="flex gap-4 items-center">
            <span className="border-[#797979] border-[1px] w-full"></span>
            <h1 className="text-left font-bold leading-[40px] sm:text-5xl md:text-6xl whitespace-nowrap flex-shrink-0">
              Projects<span className="text-purple">.</span>
            </h1>
          </div>
          <div className="mt-6">
            <div
              ref={scrollRef}
              role="list"
              aria-label="Projects"
              className="flex gap-6 overflow-x-auto py-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 justify-start sm:justify-start"
              style={{ touchAction: 'pan-x pinch-zoom' }}
            >
              <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                <Reveal>
                  <div className="max-w-[380px] mx-auto sm:max-w-none">
                    <ProjectCard {...FinalData} />
                  </div>
                </Reveal>
              </div>
              <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                <Reveal>
                  <div className="max-w-[380px] mx-auto sm:max-w-none">
                    <ProjectCard {...WTWRData} />
                  </div>
                </Reveal>
              </div>
              <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                <Reveal>
                  <div className="max-w-[380px] mx-auto sm:max-w-none">
                    <ProjectCard {...AroundTheUsData} />
                  </div>
                </Reveal>
              </div>
              <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                <Reveal>
                  <div className="max-w-[380px] mx-auto sm:max-w-none">
                    <ProjectCard {...RealtyFormData} />
                  </div>
                </Reveal>
              </div>
              <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                <Reveal>
                  <div className="max-w-[380px] mx-auto sm:max-w-none">
                    <ProjectCard {...RealEstateWebsiteData} />
                  </div>
                </Reveal>
              </div>
              <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                <Reveal>
                  <div className="max-w-[380px] mx-auto sm:max-w-none">
                    <ProjectCard {...CoffeeShopData} />
                  </div>
                </Reveal>
              </div>
              <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                <Reveal>
                  <div className="max-w-[380px] mx-auto sm:max-w-none">
                    <ProjectCard {...SixtiethBirthdayData} />
                  </div>
                </Reveal>
              </div>
              <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                <Reveal>
                  <div className="max-w-[380px] mx-auto sm:max-w-none">
                    <ProjectCard {...LibraryData} />
                  </div>
                </Reveal>
              </div>
              <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                <Reveal>
                  <div className="max-w-[380px] mx-auto sm:max-w-none">
                    <ProjectCard {...IntroProjectData} />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            <button
              onClick={() => scroll('left', scrollRef)}
              className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll('right', scrollRef)}
              className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          </div>
          <div id="code jams">
            <div className="flex gap-4 items-center">
              <span className="border-[#797979] border-[1px] w-full"></span>
              <h1 className="text-left font-bold leading-[40px] sm:text-5xl md:text-6xl whitespace-nowrap flex-shrink-0">
                Code Jams<span className="text-purple">.</span>
              </h1>
            </div>
            <div className="mt-6">
              <div
                ref={codeJamsScrollRef}
                role="list"
                aria-label="Code Jams"
                className="flex gap-6 overflow-x-auto py-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 justify-start sm:justify-start"
                style={{ touchAction: 'pan-x pinch-zoom' }}
              >
                <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                  <Reveal>
                    <div className="max-w-[380px] mx-auto sm:max-w-none">
                      <ProjectCard {...FebCodeJamData} />
                    </div>
                  </Reveal>
                </div>
                <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                  <Reveal>
                    <div className="max-w-[380px] mx-auto sm:max-w-none">
                      <ProjectCard {...MayCodeJamData} />
                    </div>
                  </Reveal>
                </div>
                <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                  <Reveal>
                    <div className="max-w-[380px] mx-auto sm:max-w-none">
                      <ProjectCard {...JulyCodeJamData} />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            <button
              onClick={() => scroll('left', codeJamsScrollRef)}
              className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll('right', codeJamsScrollRef)}
              className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          </div>

          <div id="externship">
            <div className="flex gap-4 items-center">
              <span className="border-[#797979] border-[1px] w-full"></span>
              <h1 className="text-left font-bold leading-[40px] sm:text-5xl md:text-6xl whitespace-nowrap flex-shrink-0">
                Externship <span className="text-purple">.</span>
              </h1>
            </div>
            <div className="mt-6">
              <div
                ref={externshipScrollRef}
                role="list"
                aria-label="Externship"
                className="flex gap-6 overflow-x-auto py-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 justify-start sm:justify-start"
                style={{ touchAction: 'pan-x pinch-zoom' }}
              >
                <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                  <Reveal>
                    <div className="max-w-[380px] mx-auto sm:max-w-none">
                      <ProjectCard {...FrontEndData} />
                    </div>
                  </Reveal>
                </div>
                <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start snap-center sm:snap-start">
                  <Reveal>
                    <div className="max-w-[380px] mx-auto sm:max-w-none">
                      <ProjectCard {...BackEndData} />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            <button
              onClick={() => scroll('left', externshipScrollRef)}
              className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll('right', externshipScrollRef)}
              className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
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
