import type { AppProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import { Carousel } from "./carousel"
import Link from "next/link"
import Image from "next/image"

interface AppProjectProps {
  project: AppProject
}

export function AppProject({ project }: AppProjectProps) {
  return (
    <ProjectSection
      {...project}
    >
      <div className="mt-6 grid grid-cols-6 gap-8">
        <div className="col-span-3 md:col-span-3 flex">
            <div className="h-full min-w-[10rem] md:w-[25rem] overflow-x-auto aspect-w-8 aspect-h-16">
                <Carousel images={project.images}/>
            </div>
        </div>


        <div className="col-span-3 md:col-span-3 space-y-6">
          <div>
            <p className="mb-4">
              Incubated at{' '}
              <Link href={project.incubatorLink} className="text-[#be5f00] hover:underline" target="_blank" rel="noopener noreferrer">
                {project.incubatorName}
              </Link>
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#ffe8d1] to-[#fef3e7] rounded-lg p-4">
              <p className="text-lg font-medium mb-2">
                Recipient of the Audience Choice Award + Judges Honorable Mention at SEP Launch Day
              </p>
              <p className="text-gray-600 mb-2">
                Presented to a panel of judges and recognized for innovation and impact
                in accessibility technology.
              </p>
              </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6 mt-4">
        {project.description?.map((text, index) => (
          <p key={index} className="mb-2">
            {text}
          </p>
        ))}
      </div>
      
      
    </ProjectSection>
  )
}
