import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { faqs } from "@/constants"

export const FAQ = () => {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="mx-auto max-w-2xl">
          {faqs.map(({ id, question, answer }) => (
            <AccordionItem key={id} value={`item-${id}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
