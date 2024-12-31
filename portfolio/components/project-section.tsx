import { BaseProject } from "@/types/project"

interface ProjectSectionProps extends BaseProject {
  children: React.ReactNode
}

export function ProjectSection({ 
  children 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="mb-16 px-4 text-base font-normal tracking-normal text-left">
      {children}
    </section>
  )
}
 