import { Header, Section } from '@/components';
import { headers } from '@/constants/headers';
import { sectionInfo } from '@/constants/sections';

export default function Home() {
  const profileHeader = headers['aboutMe'];

  return (
    <main
      className='flex flex-col items-stretch justify-evenly gap-2 mt-12'
      data-testid='main-content'
    >
      <Header {...profileHeader} />
      {sectionInfo.map(section => (
        <Section {...section} key={section.heading} />
      ))}
    </main>
  );
}
