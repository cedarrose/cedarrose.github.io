'use client'

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  caption: string
}

interface CarouselProps {
  images: CarouselImage[]
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const previous = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div className="relative aspect-[2/1] w-full">
          <Image
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 bottom-8 flex items-center justify-between p-4">
  <Button
    variant="outline"
    size="icon"
    className="h-8 w-8 rounded-full bg-white/80"
    onClick={previous}
  >
    <ChevronLeft className="h-4 w-4" />
  </Button>
  <Button
    variant="outline"
    size="icon"
    className="h-8 w-8 rounded-full bg-white/80"
    onClick={next}
  >
    <ChevronRight className="h-4 w-4" />
  </Button>
</div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 text-center text-sm text-gray-600">
        {images[currentIndex].caption}
      </div>
    </div>
  )
}
