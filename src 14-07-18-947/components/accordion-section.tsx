import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionSectionProps {
  title: string;
  content: string;
}

export function AccordionSection({ title, content }: AccordionSectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">{title}</AccordionTrigger>
        <AccordionContent>
          {content || "Content coming soon..."}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

