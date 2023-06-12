'use client';

export default function RootError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='p-8 my-4 flex flex-col gap-8' data-testid='error-container'>
      <h2
        className='text-lg font-bold text-gray-900'
        data-testid='error-heading'
      >
        Something went wrong!
      </h2>
      <button
        className='w-12 box-border rounded-md py-2 px-4 border text-emerald-700 bg-white border-emerald-700 hover:bg-emerald-700 hover:text-white'
        onClick={reset}
        data-testid='error-description'
      >
        Try again!
      </button>
    </div>
  );
}
