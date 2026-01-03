import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'img'>) {
  return (
    <img
      src="/logo.png"
      alt={`${process.env.SITE_NAME} logo`}
      {...props}
      className={clsx('h-full w-full object-contain', props.className)}
    />
  );
}
