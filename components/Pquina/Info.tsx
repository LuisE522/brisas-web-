import Image from "next/image";
import React from "react";

export default function Info() {
  return (
    <>
      <div className="w-full h-[250px] sm:h-[350px] md:h-screen relative">
        <div className="w-full h-full flex bg-black text-white">
          <div className="max-w-[40%] w-full h-full overflow-hidden">
            <Image
              src="/assets/images/pquina/senio_papa.png"
              unoptimized
              alt="alt"
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full grid grid-cols-3 grid-rows-2">
            <div className="max-w-[90%] w-full mx-auto flex flex-col justify-center items-center text-center gap-1 md:gap-3">
              <h1 className="font-bold text-[10px] sm:text-sm md:text-base lg:text-xl">
                LOS PICARONES
              </h1>
              <p className="text-[6px] sm:text-[9px] md:text-xs lg:text-sm">
                Los picarones son dulces fritos en forma de anillo hechos con
                maza de harina de trigo mezclada con zapallo
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/assets/images/pquina/info_picarones.png"
                unoptimized
                alt="alt"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-[90%] w-full mx-auto flex flex-col justify-center items-center text-center gap-1 md:gap-3">
              <h1 className="font-bold text-[10px] sm:text-sm md:text-base lg:text-xl">
                Chairo
              </h1>
              <p className="text-[6px] sm:text-[9px] md:text-xs lg:text-sm">
                tradición boliviana principalmente de la ciudad de La Paz y
                también forma parte de una tradición peruana de Puno, conocido
                plato de origen Aimara
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/assets/images/pquina/info_chancho.png"
                unoptimized
                alt="alt"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-[90%] w-full mx-auto flex flex-col justify-center items-center text-center gap-1 md:gap-3">
              <h1 className="font-bold text-[10px] sm:text-sm md:text-base lg:text-xl">
                Pisco sour
              </h1>
              <p className="text-[6px] sm:text-[9px] md:text-xs lg:text-sm">
                Cóctel Peruano tradicional compuesto por pisco, jugo de
                limón,azúcar,hielo y bitters.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/assets/images/pquina/info_bebida.png"
                unoptimized
                alt="alt"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
