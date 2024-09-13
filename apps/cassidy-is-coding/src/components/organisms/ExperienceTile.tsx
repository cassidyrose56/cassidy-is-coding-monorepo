import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import point from '../../assets/point.svg';

type ExperienceTileProps = {
  number: number;
  company: string;
  title: string;
  skills: string[];
  description: string[];
  url: string;
};

const ExperienceTile: React.FC<ExperienceTileProps> = ({ number, company, title, skills, description, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);


  const handleToggle = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const showDescription = (isHovered && !isMobile) || (isMobile && isExpanded);

  return (
    <div
      className={`group border border-primary-900 hover:bg-primary-900 border-solid hover:rounded-[40px] py-6 px-8 flex flex-col md:w-full w-4/5 transition-all duration-300 cursor-pointer ${showDescription ? 'expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggle}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="w-12 h-12 border border-solid border-primary-900 group-hover:border-white group-hover:bg-primary-900 text-primary-900 group-hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
            <span className="font-title font-semibold text-lg leading-none">{number}</span>
          </div>
          <div className="flex flex-col gap-2">
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-4xl underline underline-offset-4 decoration-white decoration-1 leading-none font-title font-medium text-primary-900 group-hover:text-white">{company}</a>
            <p className="text-sm font-body text-nowrap font-light text-primary-900 group-hover:text-white">{title}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          {skills.map((skill, index) => (
            <p 
              key={index} 
              className="bg-white group-hover:bg-primary-900 font-body italic text-primary-900 group-hover:text-white px-3 py-1 rounded-full md:text-lg text-sm border border-primary-900 group-hover:border-white"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
      
      <div className={`description-container overflow-hidden flex justify-center transition-all duration-500 ease-in-out ${showDescription ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="text-white w-11/12 p-6 flex flex-col gap-4">
          {description.map((paragraph, index) => (
            <div key={index} className="flex items-start gap-2">
              <img src={point} alt="point" className="w-4 h-4 mt-1.5" />
              <p className="font-body text-white md:text-base text-sm font-extralight leading-6">{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTile;