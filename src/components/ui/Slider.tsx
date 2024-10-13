'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { teamMembers } from '../../data/dataTeam';
import TeamMemberCard from '../ui/TeamCard';

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
        },
        834: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
    >
      {teamMembers.map(({ src, alt, role, name, icon }, index) => (
        <SwiperSlide key={index}>
          <TeamMemberCard
            alt={alt}
            image={src}
            name={name}
            role={role}
            socialLinks={icon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
