"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function CaroucelHistoria() {
  return (
    <div className="w-full relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          740: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {Array.from({ length: 10 }).map((_, index: number) => (
          <>
            <SwiperSlide>
              <div className="w-full flex flex-col -z-0">
                <div className="w-full flex justify-end">
                  <div className="w-[90%] h-[300px] bg-slate-400 !relative"></div>
                </div>
                <div className="w-full text-white -mt-6 z-10">
                  <h2
                    className="text-5xl"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
                  >
                    196{index}
                  </h2>
                  <p className="text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo ut minus fugiat explicabo necessitatibus.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}
