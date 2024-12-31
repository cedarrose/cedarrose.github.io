import type { NanofabProject } from "@/types/project"
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
      image: "/nanofab/gateway.webp",
      link: "https://viterbischool.usc.edu/news/2024/10/undergraduate-microelectronics-commons-scholars-program-brings-the-textbook-to-life-in-the-cleanroom/"
    },
    {
      title: "California DREAMS Offers IEEE-certified Cleanroom Microcredentials",
      source: "USC Information Sciences Institute",
      year: "8/25/24",
      image: "/nanofab/IEEE.png",
      link: "https://www.isi.edu/news/72913/california-dreams-offers-ieee-certified-cleanroom-microcredentials/"
    }
  ]

  return (
    <ProjectSection
      {...project}
    >
      <div className="mt-6 grid grid-cols-6 gap-8">
        <div className="col-span-6 md:col-span-3 space-y-4">
          {project.description?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="col-span-6 md:col-span-3">
            {/* Carousel Images */}
            <Carousel images={project.images} />

            {/* Logos Section */}
            <div className="flex justify-end items-center gap-6 mt-8">
                {project.logos.map((logo, index) => (
                <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={0} // Dynamic width
                    height={0} // Dynamic height
                    sizes="100vw" // Full width of the container
                    className="object-contain h-16 md:h-16 lg:h-24 w-auto"
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
