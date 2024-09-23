import React, { useState, useRef } from "react";
import { isMobile } from "react-device-detect";
import point from "../../assets/point.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type ExperienceTileProps = {
  number: number;
  company: string;
  title: string;
  skills: string[];
  description: string[];
  url: string;
};

const ExperienceTile: React.FC<ExperienceTileProps> = ({
  number,
  company,
  title,
  skills,
  description,
  url,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const showDescription = (isHovered && !isMobile) || (isMobile && isExpanded);

  useGSAP(
    () => {
      if (tileRef.current && descriptionRef.current) {
        gsap.to(tileRef.current, {
          backgroundColor: showDescription ? "#36593F" : "transparent",
          borderRadius: showDescription ? "40px" : "0px",
          duration: 0.5,
        });

        gsap.to(descriptionRef.current, {
          height: showDescription ? "auto" : 0,
          backgroundColor: "transparent",
          opacity: showDescription ? 1 : 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    { dependencies: [showDescription] }
  );

  return (
    <div
      ref={tileRef}
      className="group border border-primary-900 border-solid lg:py-6 lg:px-8 py-4 px-6 flex flex-col md:w-full w-4/5 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggle}
    >
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 self-center items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="w-12 h-12 border border-solid border-primary-900 group-hover:border-white bg-transparent text-primary-900 group-hover:text-white rounded-full flex items-center justify-center">
            <span className="font-title font-semibold text-lg leading-none">
              {number}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl underline underline-offset-4 decoration-white decoration-1 leading-none font-title font-medium text-primary-900 group-hover:text-white"
            >
              {company}
            </a>
            <p className="text-sm font-body text-nowrap font-light text-primary-900 group-hover:text-white">
              {title}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
          {skills.map((skill, index) => (
            <p
              key={index}
              className="bg-transparent font-body italic text-primary-900 group-hover:text-white px-3 py-1 rounded-full lg:text-base md:text-sm text-xs border border-primary-900 group-hover:border-white"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>

      <div
        ref={descriptionRef}
        className="bg-primary-900 overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="text-white w-full p-6 flex flex-col gap-4">
          {description.map((paragraph, index) => (
            <div key={index} className="flex items-start gap-2">
              <img src={point} alt="point" className="w-4 h-4 mt-1.5" />
              <p className="font-body text-white lg:text-base text-sm font-extralight leading-6">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTile;
