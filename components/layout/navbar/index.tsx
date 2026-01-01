import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  // Hardcoded menu items as per request
  const menuItems = [
    { title: 'Watches', path: '/search/watches' },
    { title: 'Perfumes', path: '/search/perfumes' },
    { title: 'Jewelry', path: '/search/jewelry' },
    { title: 'Shop All', path: '/search' }
  ];

  return (
    <nav className="sticky top-0 z-50 flex flex-col w-full bg-white dark:bg-black transition-colors duration-300">
      {/* Top Row */}
      <div className="flex items-center justify-between py-4 px-8 lg:px-6">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
             {/* Pass menuItems to MobileMenu if needed, but we'll likely update MobileMenu to use these or hardcode them there too. 
                 Since MobileMenu currently takes a menu prop, let's just pass this array.
             */}
            <MobileMenu menu={menuItems} />
          </Suspense>
        </div>
        
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <LogoSquare />
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {SITE_NAME}
              </div>
            </Link>
          </div>
          
          <div className="hidden justify-center md:flex md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          
          <div className="flex justify-end md:w-1/3">
            <CartModal />
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation */}
      <div className="hidden md:flex w-full justify-center py-3 border-t-[0.5px] border-[#C5A059]">
        <ul className="flex gap-8 text-sm font-medium uppercase tracking-wide">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                prefetch={true}
                className="text-neutral-500 hover:text-[#C5A059] transition-colors duration-300 decoration-[#C5A059] underline-offset-4 hover:underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
