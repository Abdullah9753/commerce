import LogoSquare from 'components/logo-square';
import Link from 'next/link';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 border-t border-neutral-200 px-6 py-12 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4 md:items-center text-center md:text-left">
          <p>
            &copy; {copyrightDate} {copyrightName}. All rights reserved.
          </p>
          <hr className="hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <a
            href="https://commerce-v2-lumina.vercel.app/ar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-neutral-300"
          >
            Designed & Developed by Bamzahem Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
