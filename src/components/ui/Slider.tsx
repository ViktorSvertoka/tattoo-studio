'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { teamMembers } from '../../data/dataTeam';

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      navigation={true}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
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
      className="mySwiper pb-14 [--swiper-navigation-color:#ff6c00] [--swiper-pagination-color:#ff6c00]"
    >
      {teamMembers.map(({ src, name }, index) => (
        <SwiperSlide
          key={index}
          className="relative h-[420px] overflow-hidden rounded-3xl shadow-card"
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
  );
}
