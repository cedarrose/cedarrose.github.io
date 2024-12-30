import { NeuralProbeProject } from "@/types/project"
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
      accentColor="from-[from-[#007d92]-to-[#00a1b3]"
    >
      <div className="mt-8 space-y-6">
        {project.description?.map((text, index) => (
          <p key={index}>
            {text.includes('flexibility') ? (
              <>
                This neural probe endeavors to combine the{' '}
                <span className="text-[#3B82F6]">flexibility of polymer-based neural interfaces</span>{' '}
                and the{' '}
                <span className="text-[#3B82F6]">high electrode density of silicon-based neural interfaces</span>
              </>
            ) : text}
          </p>
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
