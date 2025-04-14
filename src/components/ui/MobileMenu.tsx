import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { navLinks } from '../../data/dataLinks';

interface MobileMenuProps {
  setIsMenuOpen: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsMenuOpen }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-black z-50 flex flex-col items-center justify-center text-white">
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-5 text-3xl"
        aria-label="Close menu"
      >
        <RiCloseLine className="text-white hover:text-darkOrange w-[40px] h-[40px]" />
      </button>
      <nav className="flex flex-col gap-6 text-xl">
        {navLinks.map(({ id, href, label }) => (
          <a key={id} href={`#${href}`} onClick={() => setIsMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
