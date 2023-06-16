import Link from 'next/link';

type ButtonPropsT = {
  label: string;
  btnType: 'primary' | 'secondary';
  url: string;
  openInNewTab?: boolean;
};

export default function LinkButton({
  label,
  url,
  btnType,
  openInNewTab = false,
}: ButtonPropsT) {
  return (
    <Link
      className={`box-border rounded-md py-2 px-4 border ${
        btnType === 'primary'
          ? 'text-white bg-emerald-700 border-emerald-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-gray-100'
          : 'text-emerald-700 bg-white border-emerald-700 hover:bg-emerald-700 hover:text-white'
      }`}
      href={url}
      data-testid='link-button'
      target={openInNewTab ? '_blank' : '_self'}
    >
      {label}
    </Link>
  );
}
