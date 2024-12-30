import type { NanofabProject } from "../types/project"
import { ProjectSection } from "./project-section"
import { Carousel } from "./carousel"
import { MediaCard } from "./media-card"
import Image from "next/image"

interface NanofabProjectProps {
  project: NanofabProject
}

export function NanofabProject({ project }: NanofabProjectProps) {
  const mediaItems = [
    {
      title: "Undergraduate Microelectronics Commons Scholars Program Brings the Textbook to Life in the Cleanroom",
      source: "USC Viterbi School of Engineering",
      year: "8/23/24",
      image: "/placeholder.svg?height=200&width=400",
      link: "https://viterbischool.usc.edu/news/2024/10/undergraduate-microelectronics-commons-scholars-program-brings-the-textbook-to-life-in-the-cleanroom/"
    },
    {
      title: "California DREAMS Offers IEEE-certified Cleanroom Microcredentials",
      source: "USC Information Sciences Institute",
      year: "8/25/24",
      image: "/placeholder.svg?height=200&width=400",
      link: "https://www.isi.edu/news/72913/california-dreams-offers-ieee-certified-cleanroom-microcredentials/"
    }
  ]

  return (
    <ProjectSection
      {...project}
    >
      <div className="mt-6 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5 space-y-4">
          {project.description?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="col-span-12 md:col-span-7">
          <Carousel images={project.images} />
          <div className="flex justify-end gap-4 mt-4">
            {project.logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>


      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Media</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <MediaCard key={index} {...item} />
          ))}
        </div>
      </div>
    </ProjectSection>
  )
}

