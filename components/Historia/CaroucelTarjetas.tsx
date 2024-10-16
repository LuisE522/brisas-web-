import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosCloseCircle, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function CaroucelTarjetas() {
  const tarjetas = [
    {
      titulo: "Más acerca de nuestros fundadores",
      img: "/assets/images/info/historia_70.png",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100'");

  const onShowInfoTarjeta = (info: string) => {
    setShowInfoTarjeta(true);
    setCurrentIndex(0); // Reinicia al índice 0 al mostrar la tarjeta
  };

  const handleNext = () => {
    setFadeClass("opacity-0"); // Inicia el fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tarjetas.length); // Cambia el índice
      setFadeClass("opacity-100"); // Inicia el fade in
    }, 300); // Espera un poco antes de cambiar
  };

  const handlePrevious = () => {
    setFadeClass("opacity-0"); // Inicia el fade out
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + tarjetas.length) % tarjetas.length
      ); // Cambia el índice
      setFadeClass("opacity-100"); // Inicia el fade in
    }, 300); // Espera un poco antes de cambiar
  };

  useEffect(() => {
    if (showInfoTarjeta) {
      setFadeClass("opacity-100"); // Asegúrate de que la imagen se muestre al inicio
    }
  }, [currentIndex, showInfoTarjeta]);

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
              className="object-cover h-[70px] sm:h-[100px] md:h-[120px] lg:h-[160px] xl:h-[200px] w-full"
            />
            <div className="absolute w-full h-full bg-[#121212]/60 top-0"></div>
            <div className="absolute w-full h-full grid grid-cols-[80%_17%] p-2 md:p-5 justify-between items-center top-0">
              <h1
                className="text-white max-[400px]:text-[8px] max-[500px]:text-[10px] max-[600px]:text-xs max-[639px]:text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl bebas-neue"
                style={{ lineHeight: "1" }}
              >
                {tarjeta.titulo}
              </h1>
              <FaCirclePlus
                color="#B32C16"
                className="max-[500px]:text-[10px] max-[600px]:text-xs max-[639px]:text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showInfoTarjeta && (
        <div className="w-full h-screen left-0 top-0 fixed bg-black z-[999] grid grid-cols-[70%_30%]">
          <div className="w-full h-full bg-white relative">
            <div className="w-full h-full absolute p-10">
              <div className="w-full h-full flex flex-col justify-between items-center text-white text-5xl">
                <div className=" rounded-full bg-black/20 p-1 flex justify-center items-center">
                  <IoIosArrowUp
                    className="cursor-pointer"
                    onClick={handlePrevious}
                  />
                </div>
                <div className=" rounded-full bg-black/20 p-1 flex justify-center items-center">
                  <IoIosArrowDown
                    className="cursor-pointer"
                    onClick={handleNext}
                  />
                </div>
              </div>
            </div>
            <Image
              unoptimized
              src={tarjetas[currentIndex].img}
              alt="alt"
              width={0}
              height={0}
              className={`w-full h-full object-cover transition-opacity duration-300 ${fadeClass}`}
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
