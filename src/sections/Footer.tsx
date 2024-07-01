import Image from 'next/image';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <section className="">
      <div className="container">
        <p>© All rights reserved 2023</p>
        <ul className="">
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
