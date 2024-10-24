import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Nosotros() {
  return (
    <>
      <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-screen relative bg-[url('/assets/images/pquina/fondo_2_mobile.png')] lg:bg-[url('/assets/images/pquina/fondo_2.png')] bg-no-repeat bg-fixed bg-cover ">
        {/* <Image
          unoptimized
          src="/assets/images/pquina/fondo_2.png"
          alt="alt"
          width={0}
          height={0}
          className="w-full h-auto absolute top-0"
        /> */}
        {/* <Image
          unoptimized
          src="/assets/images/pquina/humo.png"
          alt="alt"
          width={0}
          height={0}
          className="w-full h-auto absolute bottom-0"
        /> */}
        <div className="w-full flex justify-center absolute -top-3 md:-top-3 lg:-top-5">
          <Link href={'#contactanos'} className="w-fit px-2 lg:px-4 py-1 lg:py-2 text-xs md:text-sm lg:text-base 2xl:text-xl text-center bg-white font-bold rounded-full drop-shadow-lg">
            Consulta
          </Link>
        </div>
        <div className="max-w-[90%] w-[500px] md:w-[800px] lg:w-[900px] 2xl:w-full 2xl:max-w-screen-2xl mx-auto h-full">
          <div className="w-full h-full grid grid-cols-2 justify-center items-center gap-5">
            <Image
              unoptimized
              src="/assets/images/pquina/nosotros.png"
              alt="alt"
              width={0}
              height={0}
              className="w-full h-auto"
            />
            <div className="w-[95%] h-full flex justify-center flex-col gap-1 sm:gap-3 md:gap-5 lg:gap-7 text-white">
              <h1 className="text-4xl lg:text-6xl 2xl:text-8xl bebas-neue">
                NOSOTROS
              </h1>
              <p className="text-[10px] sm:text-sm md:text-base 2xl:text-2xl ">
                Inspirados en el antiguo nombre del lago Titicaca dimos vida a
                nuestro Salón Gastronómico Puquina Q’ocha, con la única consigna
                de rendir homenaje a la gastronomia puneña en Lima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
