import type { NeuralProbeProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import { AccordionSection } from "./accordion-section"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { FileText } from 'lucide-react'
import Link from "next/link"

interface NeuralProbeProjectProps {
  project: NeuralProbeProject
}

export function NeuralProbeProject({ project }: NeuralProbeProjectProps) {
  return (
    <ProjectSection
      {...project}
    >
    <div>
        <p className="text-gray-600 mb-4 mt-4 text-center flex items-center justify-center gap-2">
            <span>{project.pi}</span>
            <span className="border-l border-gray-300 h-4"></span>
            <span>
            Funded by{' '} 
            <Link href={project.curveLink} className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {project.funding1}
            </Link> Fellowship &&nbsp;
            <Link href={project.provostLink} className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {project.funding2}
            </Link> Fellowship
            </span>
        </p>
    </div>
      <div className="mt-6 space-y-6">
        {project.description?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.skills.map((skill, index) => (
          <AccordionSection key={index} {...skill} />
        ))}
      </div>
      
    </ProjectSection>
  )
}
