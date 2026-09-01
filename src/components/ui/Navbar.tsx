import Link from 'next/link';
import { navLinks } from '../../data/dataLinks';

const Navbar = () => {
  return (
    <nav aria-label="Main navigation" className="hidden sm:block">
      <div className="flex items-center gap-8 lg:gap-10">
        {navLinks.map(({ id, href, label }) => {
          const isExternal = href === 'gallery' || href === 'blog';
          const className =
            'cursor-pointer rounded-sm font-playfair text-[18px] font-medium leading-8 text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange focus-visible:ring-offset-4 focus-visible:ring-offset-black lg:text-[20px]';

          return isExternal ? (
            <Link
              key={id}
              href={`/${href}`}
              className={className}
            >
              {label}
            </Link>
          ) : (
            <a
              key={id}
              href={`#${href}`}
              className={className}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
