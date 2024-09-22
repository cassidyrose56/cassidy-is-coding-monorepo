import React from "react";

type ProjectShowcaseProps = {
  title: string;
  index: number;
  description: string;
  imageSrc: string;
  url: string;
  technologies: string;
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  index,
  title,
  description,
  imageSrc,
  url,
  technologies,
}) => {
  const isEven = (num: number) => num % 2 === 0;
  return (
    <div
      className={`w-full max-w-5xl grid gap-4 grid-cols-12 grid-rows-8 ${isEven(index) ? "lg:flex-row-reverse self-start" : "self-end"}`}
    >
      <div
        className={`col-span-12 lg:col-span-6 ${isEven(index) ? "lg:col-start-6" : "lg:col-start-1"} row-span-full`}
      >
        <img
          src={imageSrc}
          alt={`${title} screenshot`}
          className="w-full h-auto object-cover"
        />
      </div>
      <div
        className={`col-span-12 lg:col-span-6 ${isEven(index) ? "lg:col-start-1" : "lg:col-start-6"} row-span-full bg-secondary-900 bg-opacity-10 p-6 self-center flex flex-col gap-2`}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl font-medium font-title"
        >
          {title}
        </a>
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
