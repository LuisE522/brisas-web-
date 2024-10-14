import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function CaroucelTarjetas() {
  const tarjetas = [
    {
      titulo: "Más acerca de nuestros fundadores",
      img: "/assets/images/info/mas-acerca-de-fundadores.png",
    },
    {
      titulo: "antecedentes a las actividades artisticas",
      img: "/assets/images/info/antecedentes-actividades-artisticas.png",
    },
    {
      titulo: "actividades culturales",
      img: "/assets/images/info/actividades_culturales.png",
    },
    {
      titulo: "Actividades sociales",
      img: "/assets/images/info/sociales.png",
    },
    {
      titulo: "Locales que ocupó la institución",
      img: "/assets/images/info/infraestructura.png",
    },
  ];

  const [showInfoTarjeta, setShowInfoTarjeta] = useState(false);
  const onShowInfoTarjeta = (info: string) => {
    setShowInfoTarjeta(true);
  };

  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        {tarjetas.map((tarjeta: any, index: number) => (
          <SwiperSlide
            key={index}
            className="!relative  cursor-pointer w-[280px] lg:w-[320px] "
            onClick={() => onShowInfoTarjeta(tarjeta.nombre)}
          >
            <Image
              unoptimized
              src={tarjeta.img}
              alt="alt"
              width={0}
              height={0}
              className="object-cover h-[70px] sm:h-[100px] md:h-[120px] lg:h-[160px] w-full"
            />
            <div className="absolute w-full h-full bg-[#121212]/60 top-0"></div>
            <div className="absolute w-full h-full grid grid-cols-[80%_17%] p-2 md:p-5 justify-between items-center top-0">
              <h1
                className="text-white max-[400px]:text-[8px] max-[500px]:text-[10px] max-[600px]:text-xs max-[639px]:text-sm sm:text-base md:text-xl lg:text-2xl bebas-neue"
                style={{ lineHeight: "1" }}
              >
                {tarjeta.titulo}
              </h1>
              <FaCirclePlus
                color="#B32C16"
                className="max-[500px]:text-[10px] max-[600px]:text-xs max-[639px]:text-sm sm:text-base md:text-xl lg:text-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showInfoTarjeta && (
        <div className="w-full h-screen left-0 top-0 fixed bg-black z-50 grid grid-cols-[70%_30%]">
          <div className="w-full h-full bg-white">
            <Image
              unoptimized
              src="/assets/images/info/historia_70.png"
              alt="alt"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#E8E8E8] w-full h-full overflow-y-auto p-10 grid grid-rows-[30%_68%] justify-between !relative">
            <IoIosCloseCircle
              className="cursor-pointer absolute right-3 top-2"
              size={20}
              onClick={() => setShowInfoTarjeta(false)}
            />
            <div className="w-full h-full">
              <FaLongArrowAltLeft size={20} />
              <p>
                Primera imagen de los iniciadores de Brisas del Titikaka,
                fotografia tomada en un estudio fotográfico del distrito de la
                Victoria, Lima
              </p>
            </div>
            <div className="w-full h-full">
              <p>
                Corría el año de 1960, ‘hombres forjados en el yunque de la
                Meseta Andina’ como diría Dante Nava, llegaron a tierras
                extrañas a Lima la capital. Trajeron en su alforja sus penas y
                alegrías, gastronomía, creencias religiosas, música y danza, y
                otras costumbres, en busca de mejores condiciones de vida, tal
                como lo han hecho generaciones íntegras de puneños residentes en
                Lima. Dentro de estos hombres y sus familiares esta un grupo de
                músicos quechuas y aymaras que se agruparon para formar una
                institución musical netamente integrada por puneños.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
