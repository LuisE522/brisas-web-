import Image from "next/image";
import React from "react";

export default function Nosotros() {
  return (
    <>
      <div className="h-[250px] sm:h-[350px] md:h-screen w-full absolute top-0 z-0">
        <div className="bg-gradient-to-l from-black/80 to-transparent w-full h-full absolute top-0"></div>
        {/* Imagen de fondo */}
        <Image
          unoptimized
          src="/assets/images/nosotros/fondo.png"
          alt="alt"
          width={0}
          height={0}
          className="w-full h-full object-cover"
        />
        {/* Imagen de fondo */}
      </div>

      <div className="w-full h-[250px] sm:h-[350px] md:h-screen relative flex justify-end">
        <div className="max-w-[100%] w-[300px] md:w-[500px] 2xl:w-[900px] h-full !relative">
          <div className="h-full w-[90%] 2xl:w-[70%] flex flex-col gap-5 items-start justify-center text-white">
            <span className="text-[10px] sm:text-sm md:text-base lg:text-3xl 2xl:text-5xl ml-2 2xl:ml-4 font-bold">
              Somos Brisas del Titicaca
            </span>
            <p className="text-lg 2xl:text-2xl">
              Nuestra labor ha sido reconocida a través de numerosos galardones
              y distinciones a nivel nacional e internacional. Llevamos con
              orgullo las tradiciones de Puno a cada escenario, celebrando
              nuestra rica herencia en cada presentación.
            </p>
            {/* <span className="text-[10px] sm:text-sm md:text-base 2xl:text-xl">
                Lo mejor de la gastronompia altiplánica bajo el cielo de Lima
                </span> */}
          </div>
        </div>
      </div>

      <div className="w-full h-auto py-36 flex flex-col gap-10">
        <div className="grid grid-cols-[55%_40%] justify-between">
          <div className="w-full pl-10 sm:pl-20 lg:pl-36 xl:pl-52 flex flex-col gap-3 md:gap-5 justify-center">
            <h1 className="font-bold text-base sm:text-2xl md:text-5xl 2xl:text-7xl">
              Nuestra Institución
            </h1>
            <div className="w-full flex flex-col gap-2 md:gap-5 text-xs sm:text-sm md:text-xl 2xl:text-2xl">
              <p>
                La Asociación Cultural Brisas del Titicaca, es una organización
                sin fines de lucro con 56 años dedicados a preservar, fomentar y
                difundir las diversas expresiones culturales de Puno y del Perú.
              </p>
              <p>
                Nuestros emblemáticos Almuerzos Show y Noches de Folklore son
                espectáculos únicos, que nos han valido el reconocimiento
                nacional e internacional
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Image
              unoptimized
              src="/assets/images/nosotros/institucion.png"
              alt="alt"
              width={0}
              height={0}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-[40%_55%] justify-between">
          <div className="w-full flex justify-center">
            <Image
              unoptimized
              src="/assets/images/nosotros/mision.png"
              alt="alt"
              width={0}
              height={0}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full pr-10 sm:pr-20 lg:pr-36 xl:pr-52 flex flex-col gap-3 md:gap-5 justify-center">
            <h1 className="font-bold text-base sm:text-2xl md:text-5xl 2xl:text-7xl">
              Misión
            </h1>
            <div className="w-full flex flex-col gap-2 md:gap-5 text-xs sm:text-sm md:text-xl 2xl:text-2xl">
              <p>
                En el 2021, seremos una organización eficiente y sostenible,
                reconocida a nivel nacional e internacional por su trabajo en la
                preservación, fomento y difusión de la cultura puneña y también
                peruana y por la satisfacción y beneficios generados a todos sus
                grupos de interés.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[55%_40%] justify-between">
          <div className="w-full pl-10 sm:pl-20 lg:pl-36 xl:pl-52 flex flex-col gap-3 md:gap-5 justify-center">
            <h1 className="font-bold text-base sm:text-2xl md:text-5xl 2xl:text-7xl">
              Visión
            </h1>
            <div className="w-full flex flex-col gap-2 md:gap-5 text-xs sm:text-sm md:text-xl 2xl:text-2xl">
              <p>
                En el 2021, seremos una organización eficiente y sostenible,
                reconocida a nivel nacional e internacional por su trabajo en la
                preservación, fomento y difusión de la cultura puneña y también
                peruana y por la satisfacción y beneficios generados a todos sus
                grupos de interés.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Image
              unoptimized
              src="/assets/images/nosotros/vision.png"
              alt="alt"
              width={0}
              height={0}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
