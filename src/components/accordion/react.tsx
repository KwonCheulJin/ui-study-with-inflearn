/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client';
import { data } from '@/components/accordion/data';
import { useEffect, useRef } from 'react';

interface Props {
  title: string;
  description: string;
}
function AccordionItem({ title, description }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const detailsElement = detailsRef.current;
    const toggle = () => detailsElement?.open;

    if (detailsElement) detailsElement.addEventListener('beforematch', toggle);

    return () => {
      if (detailsElement)
        detailsElement?.removeEventListener('beforematch', toggle);
    };
  }, []);

  return (
    <li className="border border-secondary border-b-0 last:border-b-1">
      <details
        name="accordion"
        ref={detailsRef}
        className="group"
        role="group"
        aria-expanded={detailsRef.current?.open}
      >
        <summary
          className="flex items-center justify-between cursor-pointer after:content-['+'] group-[[open]]:after:content-['-'] group-[[open]]:bg-primary p-4 focus:outline-none focus:ring-2 focus:ring-primary"
          role="button"
          aria-controls={`content-${title}`}
        >
          {title}
        </summary>
        <div
          className="p-4"
          id={`content-${title}`}
          role="region"
          aria-labelledby={`heading-${title}`}
        >
          {description}
        </div>
      </details>
    </li>
  );
}

export default function Accordion() {
  return (
    <div role="region" aria-label="Accordion Group">
      <h2 className="mb-4">#React Accordion</h2>
      <ul>
        {data.map(({ id, title, description }) => (
          <AccordionItem key={id} title={title} description={description} />
        ))}
      </ul>
    </div>
  );
}
