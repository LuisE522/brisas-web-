"use client";

import Image from "next/image";
import NavTransparent from "../Home/NavTransparent";
import Link from "next/link";
import { useState } from "react";
import Nosotros from "./Nosotros";
import Reseña from "./Reseña";
import Mapa from "./Mapa";
import Promociones from "./Promociones";
import Carta from "./Carta";
import Info from "./Info";

export default function Puquina() {
  return (
    <>
      <div className="h-[250px] sm:h-[350px] md:h-screen w-full absolute top-0 z-0">
        <div className="bg-black/60 w-full h-full absolute top-0"></div>
        {/* Imagen de fondo */}
        <Image
          unoptimized
          src="/assets/images/puquina/fondo.png"
          alt="alt"
          width={0}
          height={0}
          className="w-full h-full object-cover"
        />
        {/* Imagen de fondo */}

        {/* Logo en la esquina derecha */}
        {/* <Image
          unoptimized
          src="/assets/images/pquina/logo.png"
          alt="alt"
          width={0}
          height={0}
          className="w-auto h-[50px] md:h-[70px] object-cover absolute top-[124px] right-10"
        /> */}
        {/* Logo en la esquina derecha */}
      </div>

      <div className="w-full h-[250px] sm:h-[350px] md:h-screen bg-black">
        <div className="mx-auto max-w-[100%] w-[300px] md:w-[500px] 2xl:w-[1000px]  h-full !relative">
          <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white text-center">
            <span className="text-[10px] sm:text-sm md:text-base 2xl:text-xl">
              SALÓN GASTRONOMICO
            </span>
            <h1
              className="text-4xl lg:text-6xl 2xl:text-8xl bebas-neue text-[#FF9900]"
              style={{ lineHeight: "1.2" }}
            >
              PUQUINA Q’OCHA
            </h1>
          </div>
        </div>
      </div>

      <Nosotros />
      <Reseña />
      <Mapa />
      <Promociones />

      <Carta />

      <Info />
    </>
  );
}
