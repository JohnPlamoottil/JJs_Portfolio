import Image from "next/image";
import Html from "../assets/Html.svg";
import Css from "../assets/Css.svg";
import Tailwind from "../assets/Tailwind.svg";
import JavaScript from "../assets/JavaScript.svg";
import TypeScript from "../assets/typescript.svg";
import Next from "../assets/nextjs2.svg";
import ReactImg from "../assets/React.svg";
import NodeJS from "../assets/Node.svg";
import Mongo from "../assets/Mongo.svg";
import Cloud from "../assets/Cloud.svg";
import PHP from "../assets/php.svg";
import { GoArrowRight } from "react-icons/go";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiSmileyFill } from "react-icons/pi";
import { PiSmileyWinkFill } from "react-icons/pi";
import { Reveal } from "./ux/Reveal";

export const About = () => {
  return (
    <section className="relative bg-black-200" id="about">
      <div className="max-w-[1350px] m-auto px-7">
        <div className="flex gap-4 items-center">
          <h1 className="text-left font-bold lg:text-6xl whitespace-nowrap">
            About<span className="text-purple">.</span>
          </h1>
          <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-14 md:gap-20">
          <div className="flex flex-col lg:max-w-[60%]">
            <Reveal>
              <p className="text-base sm:text-lg">
                Hello, Im JJ (Kanna). A detail-oriented and adaptable Software
                Engineer with three years of hands-on experience (2023-2025). Adept at
                collaborating cross-functionally to deliver user-centric
                solutions, with proven success in improving software performance
                and contributing to strategic business objectives. Im a strong
                communicator and problem-solver, committed to continuously
                enhancing my technical skills and delivering high-quality code
                aligned with best practices and business goals
                <br />
                <br />
                Growing up I always had aspirations of becoming part of the healthcare team. I
                completed 2 years of physical therapy school, an year of nursing at Herzing and another year of nursing at Resurrection OakPoint University but life has its own way and with COVID bringing the world into a remote virtual environment, it brought me to my roots of web development. 
                Hence bringing me to become an AWS Cloud Practitioner and Solutions Architect Associate under the guidance from PerScholas AWS Re/Start program which led to my enrollment into Practicum in Jan2023 later becoming TripleTen in 2024 for their 
                software engineering program. I am eager, creative and loves a new task to build and design new projects on the web for a large audience to view and enjoy.
                <br />
                <br />I love meeting new people and making new connections. I&apos;d
                love to know more about you. Lets connect! 🔗
              </p>
            </Reveal>
            <br />
            <Reveal>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-purple text-base">My links</p>
                <div className="flex gap-2">
                  <div className="flex items-center mr-2">
                    <GoArrowRight className="text-purple" />
                  </div>
                  <a href="https://github.com/JohnPlamoottil" target="_blank">
                    <FaGithubSquare className="text-[25px] sm:text-[30px] hover:scale-110 ease-in-out duration-[.5s] hover:cursor-pointer" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/john-j-plamoottil/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-[25px] sm:text-[30px] hover:scale-110 ease-in-out duration-[.5s] hover:cursor-pointer" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 lg:max-w-[40%]">
            <div className="flex items-center gap-2">
              <PiSmileyFill className="text-3xl text-purple" />
              <h2 className="text-xl font-bold">My Tech Stacks</h2>
            </div>
            <Reveal>
              <div className="flex flex-wrap mb-5 gap-2 text-sm">
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="html logo"
                    src={Html.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="CSS logo"
                    src={Css.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="Tailwind logo"
                    src={Tailwind.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="JavaScript logo"
                    src={JavaScript.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="TypeScript logo"
                    src={TypeScript.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="PHP logo"
                    src={PHP.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="Next logo"
                    src={Next.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="React logo"
                    src={ReactImg.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="Node logo"
                    src={NodeJS.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="Mongo logo"
                    src={Mongo.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
                <div className="bg-black-100 rounded-md p-2">
                  <Image
                    alt="Cloud logo"
                    src={Cloud.src}
                    width={40}
                    height={40}
                    className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-md"
                  />
                </div>
              </div>
            </Reveal>
            <div className="flex items-center gap-2">
              <PiSmileyWinkFill className="text-3xl text-purple" />
              <h2 className="text-xl font-bold">Why work with me?</h2>
            </div>
            <Reveal>
              <div className="flex flex-wrap gap-2">
                <div className="bg-black-100 py-2 px-4 rounded-2xl">
                  Problem Solving
                </div>
                <div className="bg-black-100 py-2 px-4 rounded-2xl">
                  Technical Communication
                </div>
                <div className="bg-black-100 py-2 px-4 rounded-2xl">
                  Adaptability
                </div>
                <div className="bg-black-100 py-2 px-4 rounded-2xl">
                  Patience
                </div>
                <div className="bg-black-100 py-2 px-4 rounded-2xl">
                  Accountability
                </div>
                <div className="bg-black-100 py-2 px-4 rounded-2xl">
                  Reliable
                </div>
                <div className="bg-black-100 py-2 px-4 rounded-2xl">
                  Critical Thinking
                </div>
                <div className="bg-black-100 py-2 px-4 rounded-2xl">
                  Collaboration
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
