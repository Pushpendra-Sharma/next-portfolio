import React from 'react';
import Image from 'next/image';
import heroImage from '@/images/hero.svg';

export default function Header() {
  return (
    <header
      className='flex flex-col justify-evenly items-center gap-2 flex-1 m-0 px-4 py-8 box-border'
      data-testid='header'
    >
      <Image
        alt='hero-image'
        className='max-w-[80%] md:max-w-sm block m-auto'
        src={heroImage}
      />
      <h1 className='text-2xl text-center text-gray-800 mt-4 p-4'>
        Hi, I am <span className='text-emerald-700'>Pushpendra</span>
      </h1>
      <p className='m-0 p-2 text-justify max-w-2xl'>
        I am a Frontend developer.
      </p>
    </header>
  );
}
