import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <section className="pt-[30px] pb-[30px]">
      <div className="container flex justify-between items-center">
        <p className="text-gray font-playfair text-[20px]">
          © All rights reserved 2024
        </p>
        <ul className="flex gap-[30px]">
          <li>
            <a href="#" className="cursor-pointer">
              <FaSquareFacebook className="h-[56px] w-[56px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <AiFillInstagram className="h-[60px] w-[60px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <TbBrandYoutubeFilled className="h-[60px] w-[60px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
