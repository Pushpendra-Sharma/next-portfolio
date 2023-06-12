import { LinkButton } from '@/components';

export default function NotFound() {
  return (
    <div
      className='p-8 my-8 mx-auto flex flex-col gap-2 min-h-full'
      data-testid='not-found'
    >
      <h2 className='font-bold text-lg' data-testid='not-found-heading'>
        Not Found
      </h2>
      <p className='text-gray-900' data-testid='not-found-description'>
        Could not find requested resource!
      </p>
      <div className='w-48 my-4'>
        <LinkButton btnType='secondary' label='Go home' url='/' />
      </div>
    </div>
  );
}
