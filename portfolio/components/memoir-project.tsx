import type { AppProject } from "@/types/project"
import { ProjectSection } from "./project-section"
import { Carousel } from "./carousel"
import Link from "next/link"
import Image from "next/image"
import { Globe, Mail, Instagram } from 'lucide-react'

interface AppProjectProps {
  project: AppProject
}

export function AppProject({ project }: AppProjectProps) {
  return (
    <ProjectSection
      {...project}
    >
      <div className="mt-6 grid grid-cols-6 gap-8">
        <div className="col-span-6 md:col-span-3 flex">
            <div className="h-full min-w-[15rem] md:w-[30rem] w-full overflow-x-auto aspect-w-8 aspect-h-16">
                <Carousel images={project.images}/>
            </div>
        </div>

        <div className="col-span-6 md:col-span-3 space-y-6 mt-8 md:mt-0">
          <div>
            <p className="mb-4">
              Incubated at{' '}
              <Link href={project.incubatorLink} className="text-[#be5f00] hover:underline" target="_blank" rel="noopener noreferrer">
                {project.incubatorName}
              </Link>
              , Accelerated at{' '}
              <Link href="https://www.troylabs.vc/" className="text-[#be5f00] hover:underline" target="_blank" rel="noopener noreferrer">
                Troy Labs
              </Link>
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#fef3e7] to-[#ffe8d1] rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#be5f00]">Awards & Recognition</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    ⭐️
                  </div>
                  <p className="text-lg font-medium">
                    Recipient of the Audience Choice Award + Judges Honorable Mention at SEP Launch Day
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    ⭐️
                  </div>
                  <p className="text-lg font-medium">
                    Winner of USC Trojan Tank Competition 
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    ⭐️
                  </div>
                  <p className="text-lg font-medium">
                    Recipient of Lloyd Grief Catalyst Micro Grant             
                  </p>
                </div>
              </div>
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
      
      <div className="mt-8 border-t border-gray-200 pt-6">
        
          <h3 className="text-xl font-medium mb-4 text-[#be5f00]">Connect With Us</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full flex-wrap">
            <Link href="https://instagram.com/memoirphotos_" className="flex items-center gap-2 text-[#be5f00] hover:underline" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span>@memoirphotos_</span>
            </Link>
            <Link href="mailto:contact.memoirphotos@gmail.com" className="flex items-center gap-2 text-[#be5f00] hover:underline">
              <Mail className="h-5 w-5" />
              <span>contact.memoirphotos@gmail.com</span>
            </Link>
            <Link href="https://memoirphotos.co" className="flex items-center gap-2 text-[#be5f00] hover:underline" target="_blank" rel="noopener noreferrer">
              <Globe className="h-5 w-5" />
              <span>memoirphotos.co</span>
            </Link>
          </div>
          <p className="mt-4 text-gray-600 italic text-center">
            Interested in learning more about Memoir? We'd love to hear from you.
          </p>
        
      </div>
    </ProjectSection>
  )
}
