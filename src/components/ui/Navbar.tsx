'use client';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { navLinks } from '../../data/dataLinks';

const Navbar = () => {
  return (
    <nav className="xs:hidden sm:block lg:block">
      <div className="flex sm:gap-[32px] lg:gap-[38px] lg:pt-[19px] lg:pb-5">
        {navLinks.map(({ id, href, label }) => {
          const isExternal = href === 'gallery' || href === 'blog';
          return isExternal ? (
            <Link
              key={id}
              href={`/${href}`}
              className="text-white font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange] cursor-pointer"
            >
              {label}
            </Link>
          ) : (
            <ScrollLink
              key={id}
              to={href.replace('/', '')}
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              className="text-white font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange] cursor-pointer"
            >
              {label}
            </ScrollLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
