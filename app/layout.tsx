import { Inter } from 'next/font/google';
import { Footer, Navbar } from '@/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pushpendra Sharma | Frontend Developer',
  description:
    'Experienced Frontend developer specializing in JavaScript and modern web technologies.',
  keywords:
    'frontend developer, JavaScript, React, web development, HTML5, CSS3',
  author: 'Pushpendra Sharma',
  twitter: {
    card: 'summary',
    site: '@ietl_pushpendra',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex flex-col justify-between min-h-screen w-full items-stretch`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
