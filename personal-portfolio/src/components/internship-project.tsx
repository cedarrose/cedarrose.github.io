import type { InternshipProject } from "../types/project"
import { ProjectSection } from "./project-section"
import Image from "next/image"

interface InternshipProjectProps {
  project: InternshipProject
}

export function InternshipProject({ project }: InternshipProjectProps) {
  return (
    <ProjectSection
      {...project}
    >
        <div className="col-span-12 md:col-span-9 space-y-4">
          <div className="space-y-6 mt-4">
          {project.description?.map((text, index) => (
            <p key={index} className="mb-2">
              {text}
            </p>
          ))}
        </div>
        <div className="col-span-12 md:col-span-3 flex justify-center items-start md:justify-end md:items-center">
          <Image
            src={project.companyLogo.src}
            alt={project.companyLogo.alt}
            width={project.companyLogo.width}
            height={project.companyLogo.height}
            className="object-contain"
          />
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-4">
        <p>
          While on the topic of Boeing, a couple friend’s and I entered <span style={{ color: '#0066CC', fontWeight: 600}}>Boeing’s USC Freshman Design Challenge</span> last year, where we were tasked with optimizing the cost, drag, lift, and speed of a Boeing airplane by selecting aircraft subsystem components. After pitching our system configuration, we ended up winning the challenge and taking home a really cool model of the Boeing 737!
        </p>
      </div>
    </ProjectSection>
  )
}

