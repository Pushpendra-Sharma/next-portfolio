import React, { ReactNode } from 'react';

import { ProjectT } from '@/types';
import LinkButton from './LinkButton';

interface ProjectSectionPropT extends ProjectT {
  children?: ReactNode;
}

export default function ProjectSection({
  description,
  heading,
  liveLink,
  srcLink,
  time,
  children,
}: ProjectSectionPropT) {
  return (
    <section
      className='flex flex-col justify-evenly items-center gap-2 flex-1 m-0 px-4 py-8 box-border'
      data-testid='project-container'
    >
      <h2 className='font-bold text-lg' data-testid='project-heading'>
        {heading}
      </h2>
      <small className='text-sm' data-testid='project-time'>
        {time}
      </small>
      <p
        className='m-0 px-2 text-justify max-w-2xl'
        data-testid='project-description'
      >
        {description}
      </p>

      <div
        className='box-border px-8 flex justify-between items-stretch gap-2'
        data-testid='project-links'
      >
        <LinkButton
          btnType='secondary'
          label='View Source'
          url={srcLink}
        />
        <LinkButton
          btnType='primary'
          label='Live Project'
          url={liveLink}
        />
      </div>
    </section>
  );
}
