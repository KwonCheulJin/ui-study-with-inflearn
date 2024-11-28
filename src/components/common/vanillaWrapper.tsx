'use client';
import { useEffect, useRef } from 'react';

interface Props {
  title: string;
  subTitle: string;
  initiator: (wrapper: HTMLDivElement) => void;
}
export default function VanillaWrapper({ title, subTitle, initiator }: Props) {
  const wrapper = useRef<HTMLDivElement>(null);
  const isInit = useRef(false);

  useEffect(() => {
    if (!isInit.current && !!wrapper.current) {
      initiator(wrapper.current);
      isInit.current = true;
    }
  }, [initiator]);

  return (
    <>
      <h3>
        {title} <sub className="text-sm">{subTitle}</sub>
      </h3>
      <div ref={wrapper} />
    </>
  );
}
