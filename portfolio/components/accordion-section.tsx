import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Image from "next/image";
  
interface AccordionSectionProps {
    title: string;
    content: string;
    images?: Array<{
      src: string;
      caption: string;
    }>;
    fullWidth?: boolean;
}
  
export function AccordionSection({ title, content, images, fullWidth }: AccordionSectionProps) {
    return (
      <Accordion type="single" collapsible className={`w-full ${fullWidth ? 'md:col-span-2' : ''}`}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">{title}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>{content || "Content coming soon..."}</p>
              {images && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-video">
                      <Image
                        src={image.src}
                        alt={image.caption}
                        fill
                        className="object-cover rounded-lg"
                      />
                      <p className="text-sm text-gray-600 mt-2">{image.caption}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
}
  