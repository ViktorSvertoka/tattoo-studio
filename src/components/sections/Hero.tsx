'use client';
import { useState } from 'react';
import { TbMenuDeep } from 'react-icons/tb';
import Navbar from '../ui/Navbar';
import Logo from '../../../public/icons/logo.svg';
import Modal from '../ui/Modal';
import MobileMenu from '../ui/MobileMenu';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <section className="relative isolate min-h-[780px] w-full overflow-hidden bg-heroMobile bg-cover bg-center sm:min-h-[1024px] sm:bg-heroTablet lg:min-h-[860px] lg:bg-heroDesktop">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,11,17,0.94)_0%,rgba(7,11,17,0.76)_34%,rgba(7,11,17,0.16)_68%,rgba(7,11,17,0.08)_100%)]"
      />
      <div className="container relative z-10">
        <header className="flex h-20 items-center justify-between lg:h-24">
          <a
            href="#"
            aria-label="Good Luck Tattoo Studio home"
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            <Logo width={44} height={44} aria-hidden="true" />
          </a>
          <Navbar />
          <button
            className="rounded-sm text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange sm:hidden"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation"
          >
            <TbMenuDeep className="text-white hover:text-darkOrange w-[40px] h-[40px]" />
          </button>
        </header>

        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}

        <div className="mx-auto flex max-w-[707px] flex-col items-center pt-[360px] text-center sm:mx-0 sm:items-start sm:pt-[500px] sm:text-left lg:pt-28">
          <h1 className="font-rye text-[36px] font-normal leading-none text-white sm:max-w-[650px] sm:text-[64px] sm:leading-[1.08] lg:text-[80px] lg:leading-none">
            GOOD LUCK TATTOO STUDIO
          </h1>
          <p className="mt-6 max-w-[380px] font-playfair text-[18px] leading-relaxed text-white sm:mt-8 sm:text-[22px] lg:text-[24px]">
            &quot;Tattoos are an expression of freedom and individuality.&quot;
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-10 flex min-h-14 w-full max-w-[320px] items-center justify-center rounded-full border-2 border-darkOrange bg-transparent px-8 text-[20px] text-darkOrange transition-colors hover:bg-darkOrange hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:w-auto sm:min-w-[300px] lg:mt-12 lg:text-[22px]"
          >
            Book an appointment
          </button>
        </div>
        {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </section>
  );
};

export default Hero;
