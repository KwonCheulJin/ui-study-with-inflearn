import Accordion from '@/components/accordion/react';
import VanillaAccordion from '@/components/accordion/vanilla';

export default function Accordions() {
  return (
    <div className="flex flex-col gap-30">
      <Accordion />
      <VanillaAccordion />
    </div>
  );
}
