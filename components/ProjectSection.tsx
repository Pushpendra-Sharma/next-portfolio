import React, { ReactNode } from 'react';

import { ProjectT } from '@/types';
import LinkButton from './LinkButton';

interface ProjectSectionPropT extends ProjectT {
  isBgGrey?: boolean;
  children?: ReactNode;
}

export default function ProjectSection({
  description,
  heading,
  liveLink,
  srcLink,
  time,
  technologies,
  isBgGrey = false,
  children,
}: ProjectSectionPropT) {
  const tachnologiesCount = technologies.length;
  return (
    <section
      className={`flex flex-col justify-evenly items-center gap-2 flex-1 m-0 px-4 py-8 box-border sm:rounded-md ${
        isBgGrey ? 'bg-gray-100' : 'bg-white'
      }`}
      data-testid='project-container'
    >
      <h2 className='font-bold text-lg' data-testid='project-heading'>
        {heading}
      </h2>
      <small className='text-xs' data-testid='project-time'>
        {time}
      </small>
      <p
        className='m-0 px-2 text-justify max-w-2xl'
        data-testid='project-description'
      >
        {description}
      </p>
      <div
        className='flex gap-2 flex-wrap space-between m-0 px-2'
        data-testid='project-technologies'
      >
        <span className='text-sm font-semibold'>Technologies:&nbsp;</span>
        {technologies.map((tech, index) => (
          <span key={tech} className='text-sm text-gray-900'>
            {`${tech}${index === tachnologiesCount - 1 ? '' : ', '}`}
          </span>
        ))}
      </div>
      <div
        className='box-border mt-2 sm:px-0 md:px-8 flex justify-evenly sm:justify-center items-stretch gap-8 w-full'
        data-testid='project-links'
      >
        <LinkButton
          btnType='secondary'
          label='View Source'
          openInNewTab={true}
          url={srcLink}
        />
        <LinkButton
          btnType='primary'
          label='Live Project'
          openInNewTab={true}
          url={liveLink}
        />
      </div>
    </section>
  );
}
