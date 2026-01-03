import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center bg-white dark:bg-black relative isolate',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        }
      )}
    >
      <LogoIcon
        className={clsx({
          'h-[28px] w-[28px] rounded-xl': !size,
          'h-[20px] w-[20px] rounded-lg': size === 'sm'
        })}
      />
      <div
        className={clsx(
          'absolute inset-0 border border-neutral-200 dark:border-neutral-700 pointer-events-none',
          {
            'rounded-xl': !size,
            'rounded-lg': size === 'sm'
          }
        )}
      />
    </div>
  );
}
