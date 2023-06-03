import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-emerald-700' data-testid='header'>
      <nav className='container mx-auto px-4 py-2 flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href='/' className='text-white text-lg font-semibold'>
            IAmDeveloper
          </Link>
        </div>
        <ul className='flex items-center space-x-4'>
          <li>
            <Link
              href='/'
              className='text-gray-100 hover:text-white'
              data-testid='home-link'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className='text-gray-100 hover:text-white'
              data-testid='projects-link'
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
