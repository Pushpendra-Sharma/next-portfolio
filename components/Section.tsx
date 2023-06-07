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
      data-testid='info-section'
    >
      <h2 className=''>{heading}</h2>
      <p className='m-0 px-2 text-justify max-w-2xl'>{info}</p>
      {link && (
        <div className='box-border px-8 flex justify-between items-stretch gap-2'>
          <LinkButton btnType='primary' label={link.label} url={link.url} />
        </div>
      )}
    </section>
  );
}
