import React, { useEffect } from 'react';
import Link from 'next/link';
import { RiCloseLine } from 'react-icons/ri';
import { navLinks } from '../../data/dataLinks';

interface MobileMenuProps {
  setIsMenuOpen: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsMenuOpen }) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [setIsMenuOpen]);

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-50 flex h-dvh w-screen flex-col items-center justify-center overflow-y-auto overscroll-contain bg-black px-6 py-[max(2rem,env(safe-area-inset-top))] text-white"
    >
      <button
        type="button"
        onClick={() => setIsMenuOpen(false)}
        className="absolute right-[max(1.25rem,env(safe-area-inset-right))] top-[max(1.25rem,env(safe-area-inset-top))] rounded-sm text-3xl transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
        aria-label="Close menu"
      >
        <RiCloseLine aria-hidden="true" className="h-10 w-10" />
      </button>
      <nav
        aria-label="Mobile navigation"
        className="flex w-full max-w-sm flex-col items-center gap-6 text-xl"
      >
        {navLinks.map(({ id, href, label }) => {
          const isExternal = href === 'gallery' || href === 'blog';
          const className =
            'rounded-sm font-playfair text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange';

          return isExternal ? (
            <Link
              key={id}
              href={`/${href}`}
              className={className}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ) : (
            <a
              key={id}
              href={`#${href}`}
              className={className}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileMenu;
