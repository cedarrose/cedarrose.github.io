import { AFEProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import { Carousel } from "./carousel"
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface AFEProjectProps {
  project: AFEProject
}

export function AFEProject({ project }: AFEProjectProps) {
  return (
    <ProjectSection
      {...project}
      accentColor="from-[#8B5CF6] to-[#A78BFA]"
    >
      <div className="mt-6 space-y-6">
        
        <div>
          <p className="font-semibold text-center text-2x1 mb-4">
          Firmware Development, Testing and PCB Design for the Analog Front End of Extended GateTransistor Based Electrochemical Sensing System
        </div>
        <div>
          <p className="text-gray-600 mb-4 text-center">
            Funded by{' '} 
            <Link href={project.curveLink} className="text-purple-600 hover:underline">
              {project.funding}
            </Link> Fellowship
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-8">
            <Carousel images={project.images} />
          </div>
          
          <div className="col-span-12 md:col-span-4 flex flex-col items-center">
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

