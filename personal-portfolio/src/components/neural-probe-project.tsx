import type { NeuralProbeProject } from "../types/project"
import { ProjectSection } from "./project-section"
import { AccordionSection } from "./accordion-section"
import { Button } from "./ui/button"
import { FileText } from 'lucide-react'

interface NeuralProbeProjectProps {
  project: NeuralProbeProject
}

export function NeuralProbeProject({ project }: NeuralProbeProjectProps) {
  return (
    <ProjectSection
      {...project}
    >
      <div className="mt-8 space-y-6">
        {project.description?.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.skills.map((skill, index) => (
          <AccordionSection key={index} {...skill} />
        ))}
      </div>
      <div className="flex items-center mt-4"> {/* Wrap button and text in a flex container */}
        <Button variant="outline" className="flex items-center space-x-2">
          <FileText className="h-4 w-4" />
          <span>Click Here</span>
        </Button>
        <span className="ml-2">for a more detailed description of my project and contribution.</span>
      </div>
    </ProjectSection>
  )
}

