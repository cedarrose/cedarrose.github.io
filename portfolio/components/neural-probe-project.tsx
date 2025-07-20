import type { NeuralProbeProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import { AccordionSection } from "./accordion-section"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { FileText } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

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
            </Link> and&nbsp;
            <Link href={project.provostLink} className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {project.funding2}
            </Link> 
            </span>
        </p>
    </div>
    <div className="mt-8 mb-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
      <h3 className="text-lg font-semibold text-purple-800 mb-2">⭐️ Accepted Abstract ⭐️</h3>
      <p className="text-gray-700">
        Coauthor of accepted scientific abstract for Neural Interfaces 2025 Conference:
      </p>
      <p className="mt-2 text-gray-600">
      "Implantable Flexible GHz Waveguide for High Data Throughput Neural Recording Interfaces."
      </p>
      <p className="text-gray-600 italic">
        Barrera, N.D., Nguyen, T.D., Ramirez, E., Leach, C.R., Abbasi, N., Molisch, A., Sideris, C., & Meng, E.
      </p>
    </div>

    {project.posterLink && project.posterThumbnail && (
      <div className="flex justify-center mb-6">
        <Link 
          href={project.posterLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full max-w-2xl relative group"
        >
          <div className="relative w-full">
            <Image
              src={project.posterThumbnail}
              alt="Poster thumbnail"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-4 w-4" />
                <span>View Poster</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )}

    <div className="mt-6 space-y-6">
      {project.description?.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
    </div>

    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
      {project.skills.map((skill, index) => {
        if (skill.title === 'PCB Design') {
          return (
            <div
              key={index}
              className={`w-full ${skill.fullWidth ? 'md:col-span-2' : ''} p-0`}
            >
              <h4 className="text-l font-medium text-center mb-2">{skill.title}</h4>
              <p className="mb-4 whitespace-pre-line">{skill.content}</p>
              {skill.images && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {skill.images.map((image, imgIdx) => (
                    <div key={imgIdx} className="relative aspect-video">
                      <Image
                        src={image.src}
                        alt={image.caption}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <p className="text-sm text-gray-600 mt-2">{image.caption}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        }
        return <AccordionSection key={index} {...skill} />;
      })}
    </div>

    
    
    </ProjectSection>
  )
}
