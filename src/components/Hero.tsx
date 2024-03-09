"use client";

import Image from "next/image";
import logo from "../../public/icons/logo.svg?url";

import Logo from "../../public/icons/logo.svg";

export default function Hero() {
  return (
    <section className="w-full h-full flex flex-col bg-heroMobile sm:bg-heroTablet lg:bg-heroDesktop bg-cover bg-center">
      <div className="container">
        <div>
          <Image src={logo} alt="ku ku" className="w-[50px] h-[50px]" />
          <Logo width={50} height={50} />
          <h1>KU KU</h1>
          <p className="text-white sm:text-blue-500 lg:text-teal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            vel impedit, est fugit accusantium sed, dolor facere dignissimos rem
            dolore similique corrupti amet cupiditate inventore tenetur. Ipsum
            tempore obcaecati quos?
          </p>
        </div>
      </div>
    </section>
  );
}
