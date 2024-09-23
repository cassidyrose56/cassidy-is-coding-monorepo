import { projects } from "../../utils/helpers"
import ProjectShowcase from "../organisms/ProjectShowcase"

const Projects = () => {
  return (
    <div id="projects" className='flex flex-col gap-6 items-center justify-center min-h-screen h-fit lg:px-52 px-12 py-12 lg:py-0'>
      <h2 className="section-title">Projects</h2>
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
        <ProjectShowcase key={index + project.name} index={index} title={project.name} description={project.description} imageSrc={project.image} technologies={project.technologies} url={project.url} githubUrl={project.githubUrl} />
      ))}
      </div>
      
    </div>
  )
}

export default Projects