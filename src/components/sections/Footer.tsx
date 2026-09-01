import Link from 'next/link';
import Logo from '../../../public/icons/logo.svg';

const footerLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#artists', label: 'Artists' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container py-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          <div className="max-w-[420px]">
            <Link
              href="/"
              aria-label="Good Luck Tattoo Studio home"
              className="inline-flex items-center gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
            >
              <Logo width={44} height={44} aria-hidden="true" />
              <span className="font-rye text-[22px] text-white">
                Good Luck Tattoo Studio
              </span>
            </Link>
            <p className="mt-5 font-playfair text-[16px] leading-relaxed text-[#a8a8a8]">
              Custom tattoos, professional piercing, cover-ups, and removal
              consultations in Miramar Beach, Florida.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-rye text-[20px] text-white">Explore</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-playfair text-[16px] text-[#b8b8b8] transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-rye text-[20px] text-white">Get in touch</h2>
            <address className="mt-5 flex flex-col gap-3 not-italic">
              <a
                href="mailto:good-luck.tattoo@gmail.com"
                className="break-all font-playfair text-[16px] text-[#b8b8b8] transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
              >
                good-luck.tattoo@gmail.com
              </a>
              <a
                href="tel:+18504246584"
                className="font-playfair text-[16px] text-[#b8b8b8] transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
              >
                +1 850-424-6584
              </a>
              <span className="font-playfair text-[16px] text-[#b8b8b8]">
                Miramar Beach, Florida
              </span>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="font-playfair text-[14px] text-[#888888]">
            © {currentYear} Good Luck Tattoo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
