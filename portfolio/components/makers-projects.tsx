import { MakerProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import { Carousel } from "./carousel"
import { Badge } from "@/components/ui/badge"

interface MakersProjectsProps {
  projects: MakerProject[]
}

export function MakersProjects({ projects }: MakersProjectsProps) {
  return (
    <ProjectSection
    >
      <div className="mt-4 mb-8">
        <p className="text-gray-700">
          USC Makers is a university club that encourages students to build innovative and fun projects,
          fostering hands-on learning and creative problem-solving through engineering challenges.
        </p>
        <p className="text-gray-700 mt-2">
          The reason I love this club so much is that we <strong>build</strong> simply for the <strong>fun of building</strong>. Throw practicallity out the window and just <em><strong className="text-[#F97316]">create</strong></em>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <Badge 
                variant="outline"
                className={`${
                  project.status === 'completed' 
                    ? 'bg-yellow-100 text-yellow-800 border-yellow-100' 
                    : 'bg-yellow-100 text-yellow-800 border-yellow-100'
                }`}
              >
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </Badge>
            </div>

            <div className="space-y-4">
              {project.description?.map((text, index) => (
                <p key={index} className="text-gray-600">{text}</p>
              ))}
            </div>

            <Carousel images={project.images} />
          </div>
        ))}
      </div>
    </ProjectSection>
  )
}
