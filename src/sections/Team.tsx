import Image from 'next/image';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

const Team = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[24px] sm:mt-[40px] lg:mt-[74px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px] xs:text-center sm:text-center lg:text-center">
          Our artists
        </h2>
        <ul className="flex justify-center xs:flex-col sm:flex-wrap lg:flex-row gap-[24px]">
          <li className="flex flex-col items-center text-center py-[30px] w-[302px]">
            <Image
              className=""
              src="/images/team-01.png"
              alt="Services logo"
              layout="intrinsic"
              width={326}
              height={346}
            />
            <h4 className="text-darkOrange font-rye text-[24px] mt-[30px]">
              John Smith
            </h4>
            <p className="text-white font-playfair text-[20px]">
              Tattoo artist
            </p>
            <ul className="flex gap-[16px] mt-[16px]">
              <li>
                <a href="#" className="cursor-pointer">
                  <FaSquareFacebook className="h-[36px] w-[36px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <AiFillInstagram className="h-[40px] w-[40px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <TbBrandYoutubeFilled className="h-[40px] w-[40px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
                </a>
              </li>
            </ul>
          </li>
          <li className="flex flex-col items-center text-center py-[30px] w-[302px]">
            <Image
              className=""
              src="/images/team-02.png"
              alt="Services logo"
              layout="intrinsic"
              width={326}
              height={346}
            />
            <h4 className="text-darkOrange font-rye text-[24px] mt-[30px]">
              Michele Doe
            </h4>
            <p className="text-white font-playfair text-[20px]">
              Tattoo artist
            </p>
            <ul className="flex gap-[16px] mt-[16px]">
              <li>
                <a href="#" className="cursor-pointer">
                  <FaSquareFacebook className="h-[36px] w-[36px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <AiFillInstagram className="h-[40px] w-[40px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <TbBrandYoutubeFilled className="h-[40px] w-[40px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
                </a>
              </li>
            </ul>
          </li>
          <li className="flex flex-col items-center text-center py-[30px] w-[302px]">
            <Image
              className=""
              src="/images/team-03.png"
              alt="Services logo"
              layout="intrinsic"
              width={326}
              height={346}
            />
            <h4 className="text-darkOrange font-rye text-[24px] mt-[30px]">
              Alan Black
            </h4>
            <p className="text-white font-playfair text-[20px]">
              Tattoo artist
            </p>
            <ul className="flex gap-[16px] mt-[16px]">
              <li>
                <a href="#" className="cursor-pointer">
                  <FaSquareFacebook className="h-[36px] w-[36px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <AiFillInstagram className="h-[40px] w-[40px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <TbBrandYoutubeFilled className="h-[40px] w-[40px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
