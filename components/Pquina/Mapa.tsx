import Link from "next/link";
import React from "react";

export default function Mapa() {
  return (
    <div className="w-full h-screen relative px-5 py-14 bg-black" id="mapa">
      <div className="max-w-[85%] w-full mx-auto h-full grid grid-rows-[75%_25%]">
        <div className="w-full h-full grid grid-cols-2 gap-10 relative">
          <div className="w-full h-full flex flex-col gap-5 2xl:gap-10 text-white relative">
            <h1 className="text-5xl 2xl:text-7xl bebas-neue">¿Dónde estamos ubicados?</h1>
            <p className="text-xl 2xl:text-3xl">Jr. Heroes de Tarapaca 168, Lima, Peru</p>
            <div className="w-full flex flex-col gap-1">
              <h1 className="text-xl 2xl:text-3xl text-[#FF9900]">Teléfono:</h1>
              <p className="text-xl 2xl:text-3xl">(01) 7156961</p>
            </div>
            <div className="w-full flex flex-col gap-1">
              <h1 className="text-xl 2xl:text-3xl text-[#FF9900]">Nuestra Carta Digital</h1>
              <Link href="https://bit.ly/CartaPuquina" className="text-xl 2xl:text-3xl">
                https://bit.ly/CartaPuquina
              </Link>
            </div>
            <p className="text-xl 2xl:text-3xl">Siguenos en nuestras redes sociales</p>
            <p className="text-xl 2xl:text-3xl text-[#FF9900]">@puquinaqocha</p>
            <div className="w-fit px-6 py-2 bg-[#FF9900] rounded-xl cursor-pointer text-base 2xl:text-xl">Contactanos</div>
          </div>
          <div className="w-full h-full border-2"></div>
        </div>
        <div className="w-full h-full flex flex-col gap-3 2xl:gap-5 justify-center items-center text-white">
          <h1 className="text-bold bebas-neue text-5xl 2xl:text-7xl">Descubre nuestro menú</h1>
          <div className="w-full flex flex-col gap-1">
            <p className="text-xl 2xl:text-3xl text-center">
              El menú consiste en una mezcla de comidas tipica de Puno y cambia
              según la estación.
            </p>
            <p className="text-xl 2xl:text-3xl text-center">
              ¡No te olvides de preguntar por los platos especiales del día!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
