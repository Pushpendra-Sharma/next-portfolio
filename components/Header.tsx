import React from 'react';
import Image from 'next/image';

import heroImage from '@/images/hero.svg';
import { HeaderT } from '@/types';

export default function Header({
  description,
  heading,
  image,
  subHeading,
}: HeaderT) {
  return (
    <header
      className='flex flex-col justify-evenly items-center gap-2 flex-1 m-0 px-4 py-8 box-border'
      data-testid='header'
    >
      {image && (
        <Image
          alt='hero-image'
          className='max-w-[80%] md:max-w-sm block m-auto'
          src={heroImage}
          data-testid='hero-image'
        />
      )}
      <h1
        className='text-2xl text-center text-gray-800 mt-4 p-4'
        data-testid='hero-heading'
      >
        {heading}
        {subHeading && <span className='text-emerald-700'>{subHeading}</span>}
      </h1>
      <p
        className='m-0 p-2 text-justify max-w-2xl'
        data-testid='hero-description'
      >
        {description}
      </p>
    </header>
  );
}
