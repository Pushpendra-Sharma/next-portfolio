'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className='px-4 flex items-center justify-between bg-emerald-700 w-full shadow-lg fixed top-0 z-10'
      data-testid='navigation-bar'
    >
      <div className='flex items-center py-2' data-testid='title'>
        <a href='/' className='text-white text-lg font-semibold'>
          IAmDeveloper
        </a>
      </div>
      <ul className='flex items-center space-x-4' data-testid='nav-links'>
        <li
          className={`py-2 ${
            pathname === '/'
              ? 'text-white border-b-2 border-b-white font-bold'
              : 'text-gray-100 hover:text-white border-b-2 border-b-emerald-700'
          }`}
        >
          <Link className='' href='/' data-testid='home-link'>
            Home
          </Link>
        </li>
        <li
          className={`py-2 ${
            pathname === '/projects'
              ? 'text-white border-b-2 border-b-white font-bold'
              : 'text-gray-100 hover:text-white border-b-2 border-b-emerald-700'
          }`}
        >
          <Link className='' href='/projects' data-testid='projects-link'>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
