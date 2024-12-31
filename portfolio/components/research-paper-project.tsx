import type { ResearchPaperProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import { Carousel } from "./carousel"
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'
import Link from "next/link"

interface ResearchPaperProjectProps {
  project: ResearchPaperProject
}

export function ResearchPaperProject({ project }: ResearchPaperProjectProps) {
  return (
    <ProjectSection
        {...project}
    >
      <div className="mt-6 space-y-4 bg-white p-4 ">
        <h2 className="text-2xl font-semibold text-center mb-2 italic">Printed wearable sweat rate sensor for continuous in-situ perspiration measurement</h2>
        <p className="text-center text-gray-600 mb-1">{project.authors.join(', ')}</p>
        <p className="text-center text-gray-600 font-semibold">{project.journal}</p>
        <p className="text-center text-gray-600">{project.publicationDate}</p>
        <div className="flex justify-center mb-6">
          <Link 
            href={project.paperLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>View Full Paper</span>
            </Button>
          </Link>
        </div>
        <div className="border-t border-gray-200 py-4 mb-6">
          <h3 className="text-xl font-semibold mb-2">Abstract</h3>
          <p>{project.abstract}</p>
        </div>
        <div className="border-t border-gray-200 py-4 mb-6">
          <h3 className="text-xl font-semibold mb-2">My Contribution</h3>
          <div className="space-y-4">
          {project.description?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        </div>

        <div className="w-2/3 mx-auto">
          <Carousel images={project.figures} />
        </div>
      </div>
    </ProjectSection>
  )
}
