'use client';
import Image from 'next/image';
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { teamMembers } from '../../data/dataTeam';

export default function Slider() {
  return (
    <div>
      <Swiper
        id="artists-carousel"
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={{
          prevEl: '.artists-prev',
          nextEl: '.artists-next',
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        pagination={{
          clickable: true,
          el: '.artists-pagination',
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
        modules={[A11y, Keyboard, Navigation, Pagination]}
        a11y={{
          containerMessage: 'Tattoo artists carousel',
          nextSlideMessage: 'Show next artist',
          prevSlideMessage: 'Show previous artist',
          paginationBulletMessage: 'Show artist group {{index}}',
        }}
        className="mySwiper h-[420px]"
      >
        {teamMembers.map(({ src, name }, index) => (
          <SwiperSlide
            key={index}
            className="relative overflow-hidden rounded-3xl shadow-card"
          >
            <Image
              src={src}
              alt={`${name}, tattoo artist`}
              fill
              sizes="(min-width: 1440px) 310px, (min-width: 834px) 230px, calc(100vw - 32px)"
              className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/65 to-transparent"
            />
            <h3 className="absolute inset-x-0 bottom-6 px-4 text-center font-rye text-[24px] text-darkOrange">
              {name}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-7 flex items-center justify-center gap-5 sm:gap-7">
        <button
          type="button"
          aria-label="Show previous artist"
          aria-controls="artists-carousel"
          className="artists-prev group inline-flex h-11 min-w-11 items-center justify-center text-[#a8a8a8] transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
        >
          <HiOutlineArrowLongLeft
            aria-hidden="true"
            className="h-7 w-8 transition-transform group-hover:-translate-x-1"
          />
        </button>

        <div
          className="artists-pagination"
          aria-label="Choose artist group"
        />

        <button
          type="button"
          aria-label="Show next artist"
          aria-controls="artists-carousel"
          className="artists-next group inline-flex h-11 min-w-11 items-center justify-center text-[#a8a8a8] transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
        >
          <HiOutlineArrowLongRight
            aria-hidden="true"
            className="h-7 w-8 transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}
