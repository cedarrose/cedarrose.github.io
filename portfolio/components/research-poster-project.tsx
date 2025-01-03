import type { AFEProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import { Carousel } from "./carousel"
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface AFEProjectProps {
  project: AFEProject
}

export function AFEProject({ project }: AFEProjectProps) { // export name corrected to AFEProject
  return (
    <ProjectSection
    >
      <div className="mt-6 space-y-6">

        <div>
          <p className="font-semibold text-center text-2x1 mb-4">
          Firmware Development, Testing and PCB Design for the Analog Front End of Extended GateTransistor Based Electrochemical Sensing System
        </p>

        </div>
        <div>
            <p className="text-gray-600 mb-4 text-center flex items-center justify-center gap-2">
                <span>{project.pi}</span>
                <span className="border-l border-gray-300 h-4"></span>
                <span>
                Funded by{' '} 
                <Link href={project.curveLink} className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {project.funding}
                </Link>
                </span>
            </p>
         </div>
        <div className="grid grid-cols-6 gap-8 items-start">
          <div className="col-span-6 md:col-span-4">
            <Carousel images={project.images} />
          </div>
          
          <div className="col-span-6 md:col-span-2 flex flex-col items-center">
            <Link 
              href={project.posterLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <div className="relative aspect-[16/9] w-full mb-4">
                <Image
                  src={project.posterThumbnail}
                  alt="Poster thumbnail"
                  fill
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
              <Button className="w-full" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                View Poster
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {project.description?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </ProjectSection>
  )
}
