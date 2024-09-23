import React from "react";
import githubLogo from "../../assets/githubLogo.svg";

type ProjectShowcaseProps = {
  title: string;
  index: number;
  description: string;
  imageSrc: string;
  url: string;
  technologies: string;
  githubUrl: string;
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  index,
  title,
  description,
  imageSrc,
  url,
  technologies,
  githubUrl,
}) => {
  const isEven = (num: number) => num % 2 === 0;
  return (
    <div
      className={`w-full max-w-5xl flex flex-col lg:flex-row gap-4 ${
        isEven(index) ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={imageSrc}
          alt={`${title} screenshot`}
          className="lg:w-full md:w-3/5 w-full h-auto object-cover"
        />
      </div>
      <div className={`lg:w-5/12 md:w-3/5 w-full self-center flex flex-col gap-2 justify-center text-center ${isEven(index) ? "lg:text-left" : "lg:text-right"}`}>
        <div className={`flex flex-row ${!isEven(index) ? "lg:flex-row-reverse" : ""} justify-center lg:justify-between items-end gap-2`}>
          <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl font-medium font-title"
        >
          {title}
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={githubLogo}
            className="logo"
            alt="Github logo"
            height="32"
            width="32"
          ></img>
        </a>
        </div>
        
        <p className="text-primary-900 text-xsPClamp font-extralight font-body">
          {description}
        </p>
        <p className="text-primary-900 text-sm font-medium font-body italic">
          {technologies}
        </p>
      </div>
    </div>
  );
};

export default ProjectShowcase;
