import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-(--breakpoint-2xl) gap-8 px-8 pb-12 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
      <div className="flex w-full justify-center md:col-span-6 md:hidden">
        <Link
          href="/search"
          className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-100 dark:border-neutral-800 dark:bg-black dark:text-white dark:hover:bg-neutral-900"
        >
          View All Products
        </Link>
      </div>
      <div className="hidden w-full justify-center md:col-span-6 md:flex">
        <Link
          href="/search"
          className="rounded-full border border-neutral-200 bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:bg-black dark:text-white dark:hover:bg-neutral-900"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
