import type { InternshipProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import Image from "next/image"

interface NorthropInternshipProjectProps {
  project: InternshipProject
}

export function NorthropInternshipProject({ project }: NorthropInternshipProjectProps) {
  return (
    <ProjectSection
      {...project}
    >
      <div className="w-full">
        {/* Logo with float-right to allow text wrapping */}
        <div className="float-right ml-8 mb-4">
          <Image
            src={project.companyLogo.src}
            alt={project.companyLogo.alt}
            width={project.companyLogo.width * 1.8}
            height={project.companyLogo.height * 1.8}
            className="object-contain"
          />
        </div>
        
        {/* Text content that wraps around logo */}
        <div className="space-y-6">
          {project.description?.map((text, index) => (
            <p key={index} className="mb-2">
              {text}
            </p>
          ))}
        </div>
      </div>
      
      {/* Clear float and add footer note */}
      <div className="clear-both mt-8 border-t border-gray-200 pt-4">
        <p>
          I wish I could share more of the journey behind this project, but due to its proprietary nature, it'll have to stay under wraps :)
        </p>
      </div>
    </ProjectSection>
  )
}
