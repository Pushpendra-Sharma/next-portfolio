import React, { ReactNode } from 'react';

import { SectionInfoT } from '@/types';
import LinkButton from './LinkButton';

interface SectionPropT extends SectionInfoT {
  children?: ReactNode;
}

export default function Section({
  heading,
  info,
  link,
  children,
}: SectionPropT) {
  return (
    <section
      className='flex flex-col justify-evenly items-center gap-2 flex-1 m-0 px-4 py-8 box-border'
      data-testid='section-container'
    >
      <h2 className='font-bold text-lg' data-testid='section-heading'>
        {heading}
      </h2>
      <p
        className='m-0 px-2 text-justify max-w-2xl'
        data-testid='section-description'
      >
        {info}
      </p>
      {link && (
        <div
          className='box-border px-8 flex justify-between items-stretch gap-2'
          data-testid='section-link'
        >
          <LinkButton btnType={link.type} label={link.label} url={link.url} />
        </div>
      )}
    </section>
  );
}
