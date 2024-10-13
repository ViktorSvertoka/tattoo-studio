'use client';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { teamMembers } from '../../data/dataTeam';

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        834: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {teamMembers.map(({ src, alt, name }, index) => (
        <SwiperSlide
          key={index}
          className="w-full rounded-3xl overflow-hidden shadow-card"
        >
          <>
            <Image
              src={src}
              alt={alt}
              width={200}
              height={400}
              loading="lazy"
              className="w-full object-cover object-center relative"
            />
            <h4 className="text-darkOrange font-rye text-[24px] mt-[30px] absolute inset-x-0 bottom-0">
              {name}
            </h4>
            <a
              href="#"
              className="cursor-pointer absolute top-0 right-0 p-[10px]"
            >
              <AiFillInstagram className="h-[36px] w-[36px] text-gray hover:text-darkOrange transition duration-300 ease-out" />
            </a>
          </>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
