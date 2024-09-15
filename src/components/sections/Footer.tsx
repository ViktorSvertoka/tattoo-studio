import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

const footerLinks = [
  {
    id: 1,
    href: '#',
    icon: FaSquareFacebook,
    size: { height: 56, width: 56 },
  },
  {
    id: 2,
    href: '#',
    icon: AiFillInstagram,
    size: { height: 60, width: 60 },
  },
  {
    id: 3,
    href: '#',
    icon: TbBrandYoutubeFilled,
    size: { height: 60, width: 60 },
  },
];

const Footer = () => {
  return (
    <section className="pt-[30px] pb-[30px]">
      <div className="container flex xs:items-center xs:flex-col xs:sm:flex-row lg:flex-row sm:justify-between sm:items-center lg:justify-between lg:items-center">
        <p className="text-gray font-playfair text-[20px] xs:order-2 sm:order-1 lg:order-1 xs:pt-[16px] sm:pt-[0px] lg:pt-[0px]">
          © All rights reserved 2024
        </p>
        <ul className="flex gap-[30px] xs:order-1 sm:order-2 lg:order-2">
          {footerLinks.map(({ id, href, icon: Icon, size }) => (
            <li key={id}>
              <a href={href} className="cursor-pointer">
                <Icon
                  className="text-gray hover:text-darkOrange transition duration-300 ease-out"
                  style={{ height: size.height, width: size.width }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
