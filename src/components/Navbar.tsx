const navLinks = [
  { id: 1, href: '#', label: 'About' },
  { id: 2, href: '#', label: 'Artists' },
  { id: 3, href: '#', label: 'Gallery' },
  { id: 4, href: '#', label: 'Prices' },
  { id: 5, href: '#', label: 'Contacts' },
];

const Navbar = () => {
  return (
    <nav className="xs:hidden sm:block lg:block">
      <div className="flex sm:gap-[32px] lg:gap-[38px] lg:pt-[19px] lg:pb-5">
        {navLinks.map(({ id, href, label }) => (
          <a
            key={id}
            href={href}
            className="text-white font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange]"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
