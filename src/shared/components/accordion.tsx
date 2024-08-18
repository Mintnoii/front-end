'use client'
import {Accordion, AccordionItem, AccordionProps, AccordionItemProps} from "@nextui-org/react";

interface ICustomAccordion {
  itemProps: AccordionItemProps
  props?: AccordionProps
  children?: React.ReactNode
}

export const CustomAccordion = (customProps: ICustomAccordion) => {
  return (
   <Accordion className="mt-2 mb-2 px-0 " {...customProps.props} variant="splitted"  data-focus-visible={false} isCompact={true}>
     <AccordionItem {...customProps.itemProps}>
      <div className="pb-4">
         {customProps.children}
      </div>
      </AccordionItem>
   </Accordion>
  )
}
