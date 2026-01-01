import Link from 'next/link';

import { ApplePayIcon, MadaIcon, MastercardIcon, VisaIcon } from 'components/icons/payment-icons';
import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

const { SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');


  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 border-t border-neutral-200 px-6 py-24 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>

      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate === '2023' ? '2023-2026' : '2023-2026'} LUMINA | Crafted by BAMZAHEM Digital
          </p>
          {/* <div className="flex items-center gap-4 text-neutral-400 dark:text-neutral-500">
            <VisaIcon className="h-8 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100" />
            <MastercardIcon className="h-8 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100" />
            <ApplePayIcon className="h-6 w-auto opacity-80 transition-opacity hover:opacity-100 dark:opacity-60 dark:hover:opacity-100" />
            <MadaIcon className="h-6 w-auto opacity-80 transition-opacity hover:opacity-100 dark:opacity-60 dark:hover:opacity-100" />
          </div> */}
        </div>
      </div>
    </footer>
  );
}
