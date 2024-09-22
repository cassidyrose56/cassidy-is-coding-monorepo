import { projects } from "../../utils/helpers"
import ProjectShowcase from "../organisms/ProjectShowcase"

const Projects = () => {
  return (
    <div id="projects" className='flex flex-col gap-6 items-center justify-center min-h-screen h-fit px-52'>
      <h2 className="section-title">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
        <ProjectShowcase key={index + project.name} index={index} title={project.name} description={project.description} imageSrc={project.image} technologies={project.technologies} url={project.url} />
      ))}
      </div>
      
    </div>
  )
}

export default Projects