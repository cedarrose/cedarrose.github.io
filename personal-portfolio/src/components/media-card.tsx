import Image from "next/image"
import Link from 'next/link'

interface MediaCardProps {
  title: string
  source: string
  year: string
  image: string
}

export function MediaCard({ title, source, year, image }: MediaCardProps) {
  return (
    <Link href="https://viterbischool.usc.edu/research/research-resources-and-programs/shared-research-infrastructure/john-obrien-nanofabrication-laboratory/" className="block">
    <div className="rounded-lg overflow-hidden">
      <div className="relative aspect-video bg-[#2D1B69]">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-2">
        <h3 className="font-medium">{title}</h3>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{source}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

