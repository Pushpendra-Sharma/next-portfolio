'use client';

export default function Loading() {
  return (
    <div className='relative m-auto w-24 h-24 flex justify-center items-center' data-testid='loader'>
      <div className='animate-spin w-16 h-16 text-white border-4 rounded-full border-gray-500 border-t-emerald-500'></div>
    </div>
  );
}
