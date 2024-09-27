import Link from 'next/link';

const navLinks = [
  { id: 1, href: '/about', label: 'About' },
  { id: 2, href: '/artists', label: 'Artists' },
  { id: 3, href: '/contacts', label: 'Contacts' },
  { id: 4, href: '/gallery', label: 'Gallery' },
  { id: 5, href: '/blog', label: 'Blog' },
];

const Navbar = () => {
  return (
    <nav className="xs:hidden sm:block lg:block">
      <div className="flex sm:gap-[32px] lg:gap-[38px] lg:pt-[19px] lg:pb-5">
        {navLinks.map(({ id, href, label }) => (
          <Link
            key={id}
            href={href}
            className="text-white font-playfair lg:text-[20px] font-medium leading-[30px] hover:text-[darkOrange]"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
