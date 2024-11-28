'use client';
import { data } from '@/components/accordion/data';
import VanillaWrapper from '@/components/common/vanillaWrapper';

interface Props {
  title: string;
  description: string;
}

function itemBuilder({ title, description }: Props) {
  const $li = document.createElement('li');
  $li.classList.add(
    'border',
    'border-secondary',
    'border-b-0',
    'last:border-b-1'
  );

  const $details = document.createElement('details');
  $details.classList.add('group');
  $details.name = 'vanillaAccordion';

  const $summary = document.createElement('summary');
  $summary.classList.add(
    'flex',
    'items-center',
    'justify-between',
    'cursor-pointer',
    "after:content-['+']",
    "group-[[open]]:after:content-['-']",
    'group-[[open]]:bg-primary',
    'p-4',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-primary'
  );
  $summary.textContent = title;

  const $div = document.createElement('div');
  $div.classList.add('p-4');
  $div.textContent = description;

  $details.append($summary, $div);
  $li.append($details);

  return $li;
}

const initiator = (wrapper: HTMLDivElement) => {
  const $ul = document.createElement('ul');

  const $items = data.map(itemBuilder);

  $ul.append(...$items);
  wrapper.append($ul);
};

export default function VanillaAccordion() {
  return (
    <VanillaWrapper
      title="#Vanilla Accordion"
      subTitle="details tag, summary"
      initiator={initiator}
    />
  );
}
