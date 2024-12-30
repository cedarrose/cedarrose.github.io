import { MakerProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import { Carousel } from "./carousel"
import { Badge } from "@/components/ui/badge"

interface MakerProjectProps {
  project: MakerProject
}

export function MakerProject({ project }: MakerProjectProps) {
  return (
    <ProjectSection
      {...project}
      accentColor="from-[#F97316] to-[#FB923C]"
    >
      <div className="mt-6 space-y-6">
        <div className="flex items-center gap-4">
          <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
            {project.status === 'completed' ? 'Completed' : 'In Progress'}
          </Badge>
        </div>

        <div className="space-y-4">
          {project.description?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Project Progress</h3>
          <Carousel images={project.images} />
        </div>
      </div>
    </ProjectSection>
  )
}
