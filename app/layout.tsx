import { Inter } from 'next/font/google';
import { Footer, Navbar } from '@/components';

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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
