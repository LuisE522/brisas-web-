import Link from "next/link";
import React from "react";
import Reseña from "./Reseña";

export default function Mapa() {
  return (
    <div className="py-10 w-full h-auto relative bg-black" id="mapa">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="px-5 py-14 mx-auto max-w-[95%] w-[500px] md:w-[800px] lg:w-[900px] 2xl:w-full 2xl:max-w-screen-2xl h-full flex flex-col-reverse md:grid md:grid-cols-2 gap-10 relative">
          <div className="w-full h-full flex flex-col gap-1 md:gap-5 2xl:gap-10 text-white relative">
            <h1 className="hidden md:block text-4xl md:text-5xl 2xl:text-7xl bebas-neue">
              ¿Dónde estamos ubicados?
            </h1>
            <p className="hidden md:block text-sm sm:text-base md:text-xl 2xl:text-3xl">
              Jr. Heroes de Tarapaca 168, Lima, Peru
            </p>
            <div className="w-full flex flex-row md:flex-col mb-5 md:mb-0 gap-3 md:gap-5 2xl:gap-10">
              <div className="w-full flex flex-col gap-1">
                <h1 className="text-sm sm:text-base md:text-xl 2xl:text-3xl text-[#FF9900]">
                  Teléfono:
                </h1>
                <p className="text-sm sm:text-base md:text-xl 2xl:text-3xl">
                  (01) 7156961
                </p>
              </div>
              <div className="w-full flex flex-col gap-1">
                <h1 className="text-sm sm:text-base md:text-xl 2xl:text-3xl text-[#FF9900]">
                  Nuestra Carta Digital
                </h1>
                <Link
                  href="https://bit.ly/CartaPuquina"
                  className="text-sm sm:text-base md:text-xl 2xl:text-3xl"
                >
                  https://bit.ly/CartaPuquina
                </Link>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-xl 2xl:text-3xl">
              Siguenos en nuestras redes sociales
            </p>
            <p className="text-sm sm:text-base md:text-xl 2xl:text-3xl text-[#FF9900]">
              @puquinaqocha
            </p>
            <Link
              href="#contactanos"
              className="w-fit px-4 md:px-6 py-2 bg-[#FF9900] rounded-xl cursor-pointer text-sm md:text-base 2xl:text-xl"
            >
              Contactanos
            </Link>
          </div>
          <div className="w-full h-full text-white relative flex flex-col gap-5 justify-center items-center">
            <div className="w-full h-full flex flex-col gap-3 md:gap-5 2xl:gap-10 text-white relative md:hidden">
              <h1 className="text-4xl md:text-5xl 2xl:text-7xl bebas-neue">
                ¿Dónde estamos ubicados?
              </h1>
              <p className="text-sm sm:text-base md:text-xl 2xl:text-3xl">
                Jr. Heroes de Tarapaca 168, Lima, Peru
              </p>
            </div>
            <div className="w-full rounded-lg bg-slate-500 h-[400px] md:h-[500px] lg:h-[600px]"></div>
          </div>
        </div>
        <Reseña />
        <div className="px-5 py-14 mx-auto max-w-[95%] w-[500px] md:w-[800px] lg:w-[900px] 2xl:w-full 2xl:max-w-screen-2xl h-full flex flex-col gap-3 2xl:gap-5 justify-center items-center text-white text-center">
          <h1 className="text-bold bebas-neue text-4xl md:text-5xl 2xl:text-7xl">
            Descubre nuestro menú
          </h1>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xs sm:text-sm md:text-xl 2xl:text-3xl text-center">
              El menú consiste en una mezcla de comidas tipica de Puno y cambia
              según la estación.
            </p>
            <p className="text-xs sm:text-sm md:text-xl 2xl:text-3xl text-center">
              ¡No te olvides de preguntar por los platos especiales del día!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
