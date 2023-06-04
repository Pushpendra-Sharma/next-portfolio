import Image from 'next/image';
import Link from 'next/link';
import { socialLinks } from '@/constants/social';

export default function Footer() {
  return (
    <footer className='bg-emerald-700 text-white py-6' data-testid='footer'>
      <ul className='flex justify-center space-x-6'>
        {socialLinks.map(socialLink => (
          <li className='' key={socialLink.label}>
            <Link
              href={socialLink.url}
              className='text-white'
              key={socialLink.label}
            >
              <Image
                data-testid={`${socialLink.label}-image`}
                src={socialLink.imageSrc}
                className='h-6 w-6'
                alt={socialLink.label}
                width={24}
                height={24}
                key={socialLink.label}
              />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
