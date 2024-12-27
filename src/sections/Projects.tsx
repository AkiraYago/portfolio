import SectionTitle from "@/components/_common/SectionTitle"
import ProjectCard from "@/components/Projects/ProjectCard"
import { Project } from "@/types"

interface Props {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <section id="projects" className="pt-16">
      <div className="flex flex-col gap-24 p-section-phone md:p-section-tablet lg:p-section-desktop">
        <SectionTitle title="Projects" />
        <div className="flex flex-wrap justify-center gap-8">
          {
            projects.map(project =>
              <ProjectCard
                key={`project-card-${project.id}`}
                title={project.name}
                description={project.description}
                coverImg={project.coverImg}
                softwareStack={project.softwareStack}
                productionURL={project.productionURL}
              />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Projects