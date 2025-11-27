import { ReactNode, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { experiences } from "@/data/data";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Reveal } from "./ux/Reveal";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "./ui/Button";

export const MobileExperience = ({
  className,
  handleConfirmModal,
}: {
  className?: ReactNode;
  handleConfirmModal: () => void;
}) => {
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [angle, cycleAngle] = useCycle(45, -45);

  const nextSlide = () => {
    setCurrentExperienceIndex((currentExperienceIndex + 1) % experiences.length);
    setDirection(1);
  };

  const prevSlide = () => {
    setCurrentExperienceIndex(
      (currentExperienceIndex - 1 + experiences.length) % experiences.length
    );
    setDirection(-1);
  };

  const currentExperience = experiences[currentExperienceIndex];

  return (
    <section id="mobileExperience" className={`relative px-7 ${className}`}>
      <div className="flex gap-4 items-center">
        <h1 className="text-left font-bold leading-[40px]">
          Experience<span className="text-purple">.</span>
        </h1>
        <span className="border-[#797979] border-[1px] w-full"></span>
      </div>
      <motion.div
        className="bg-black-100 h-fit m-auto p-5 rounded-md shadow-[0_0_10px_rgba(255,255,255,0.3)] mt-6"
        initial={{ x: `${direction === 1 ? "100%" : "-100%"}`, rotate: angle }}
        animate={{ x: "0", rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.2,
        }}
        exit={{ x: `${direction === 1 ? "-100%" : "100%"}`, rotate: angle }}
        key={currentExperienceIndex}
      >
        <div className="flex flex-col gap-1">
          <Reveal>
            <h1 className="text-lg text-purple font-bold p-0">
              {currentExperience.jobTitle}
            </h1>
          </Reveal>
          <Reveal>
            <h3 className="font-bold text-lg">{currentExperience.company}</h3>
          </Reveal>
          <h2 className="text-lg">
            {currentExperience.startDate} - {currentExperience.endDate}
          </h2>
          <h3 className="font-normal text-lg">{currentExperience.location}</h3>
          <Reveal>
            <p className="mt-3">{currentExperience.description}</p>
          </Reveal>
          <div className="flex flex-wrap gap-2 mt-3">
            {currentExperience.skills.map((skill, idx) => (
              <div key={idx} className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="flex gap-4 items-center justify-center mt-10">
        <button
          onClick={prevSlide}
          className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="h-14 w-14 rounded-full bg-purple flex items-center justify-center text-3xl"
        >
          <FiArrowRight />
        </button>
      </div>
      <Button
        title="Resume"
        position="right"
        icon={<FaPaperPlane />}
        otherClasses="m-auto"
        onClick={handleConfirmModal}
      />
    </section>
  );
};
