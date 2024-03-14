const Navbar = () => {
  return (
    <nav className="xs:hidden sm:block lg:block">
      <div className="flex sm:gap-[32px] lg:gap-[38px] lg:pt-[19px] lg:pb-5">
        <a
          href="#"
          className="text-white font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange]"
        >
          About
        </a>
        <a
          href="#"
          className="text-white font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange]"
        >
          Artists
        </a>
        <a
          href="#"
          className="text-white font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange]"
        >
          Gallery
        </a>
        <a
          href="#"
          className="text-white font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange]"
        >
          Prices
        </a>
        <a
          href="#"
          className="text-white font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange]"
        >
          Contacts
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
