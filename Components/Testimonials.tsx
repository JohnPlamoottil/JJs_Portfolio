"use client";
import React from "react";
import { ProjectCard } from "./ui/ProjectCard";
import { testimonials } from "@/data/data";
import { TestimonialCard } from "./ui/TestimonialCard";
export const Testimonials = ({ className }: { className?: string }) => {
  return (
    <section id="test" className={`relative ${className ?? ""}`}>
      <div className="max-w-[1350px] m-auto px-7">
        <div className="flex gap-4 items-center sm:pb-10">
          <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
          <h1 className="text-left font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl whitespace-nowrap">
            Testimonials<span className="text-purple">.</span>
          </h1>
        </div>

        {/* Horizontal testimonial row: scrollable on small screens, full row on large screens */}
        <div className="mt-6">
          <div
            role="list"
            aria-label="Testimonials"
            className="flex gap-6 overflow-x-auto py-4 px-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700"
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={(testimonial as any).id ?? idx}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] snap-start"
              >
                <TestimonialCard item={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
