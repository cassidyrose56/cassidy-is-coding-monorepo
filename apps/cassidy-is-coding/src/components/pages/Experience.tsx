import { experiences } from "../../utils/helpers"
import ExperienceTile from "../organisms/ExperienceTile"

const Experience = () => {
  return (
    <section id="experience" className='flex items-center md:justify-start justify-center h-screen md:px-36 w-full'>
      <div className="flex flex-col md:items-start justify-center items-center gap-8 md:w-5/6 w-full">
        <h2 className="section-title text-center md:text-left">Experience</h2>
        {experiences.map((experience, index) => (
          <ExperienceTile key={index} number={index + 1} company={experience.company} title={experience.title} skills={experience.skills} description={experience.description} url={experience.url} />
        ))}
      </div>
    </section>
  )
}

export default Experience