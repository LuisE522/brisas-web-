"use client";

import React, { useState } from "react";
import NavTransparent from "./NavTransparent";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";

import trs from "@/public/locales/translate.json";
import CaroucelHistoria from "../Historia/CaroucelHistoria";

export default function Page2() {
  const [load, setLoad] = useState(false);
  const { language } = useLanguage();

  const translations = trs as any;

  return (
    <div className="flex flex-col gap-10 bg-black">
      <div
        className={`h-screen w-full bg-[url("/assets/images/fondo2_home.png")] bg-no-repeat bg-cover bg-center relative z-0`}
      >
        <div className="bg-[#343434]/40 h-full w-full absolute top-0 left-0 -z-10"></div>
        <div className="bg-gradient-to-t from-black to-transparent w-full h-[200px] absolute bottom-0 left-0"></div>
        <div className="w-full h-auto z-[9990]">
          <NavTransparent />
        </div>
        <div className="w-full h-[calc(100%-124px)] absolute top-[62px] left-0 z-50">
          <div className="relative max-w-[95%] w-[1080px] mx-auto h-full flex flex-col gap-1 items-start justify-center">
            <p className="text-white">Lo mejor del Perú</p>
            <h1 className="tracking-tight uppercase font-bold text-4xl md:text-5xl leading-tight bg-gradient-to-t from-[#FC228A] to-[#FF9900] bg-clip-text text-transparent">
              {translations[language].info_titulo}
            </h1>

            <p className="w-full md:w-2/4 text-white text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. Egestas amet tincidunt
              platea id. Ut augue proin odio est molestie elit nisl facilisis
              sodales. Varius adipiscing maecenas ut dolor.
            </p>
            <div className="w-[230px] h-fit absolute bottom-0 right-0">
              <p className="text-white text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur. Egestas amet tincidunt{" "}
                <span className="text-[#FF8814]">
                  platea id. Ut augue proin odio est molestie elit nisl
                </span>{" "}
                facilisis sodales.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-full z-10">
          <div className="w-full h-[70px] bg-white"></div>
        </div> */}
      </div>
      <div className="w-full bg-black">
        <div className="relative max-w-[95%] w-[800px] mx-auto">
          <div className="w-full flex flex-col gap-5">
            <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="w-[90%]">
                <h1 className="text-white text-3xl md:text-5xl">
                  Lorem ipsum dolor sit amet consectetur. Laoreet elemen Laoreet
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-[#D9D9D9] w-full md:w-[280px] h-[150px]">
                  <Image
                    unoptimized
                    src="https://i.ytimg.com/vi/JIT8tGjFRco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBI7pArXM2i-4PNIqOvYh3lw6emag"
                    alt="alt"
                    width={0}
                    height={0}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur. In pulvinar nulla
                </p>
                <p className="text-white text-xs">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu dui mattis
                  vitae metus. Ipsum aliquam neque dictum amet id quis nunc.
                  Viverra senectus semper nulla tellus. Magna viverra mollis
                  cras condimentum dictum quis commodo.Lorem ipsum dolor sit
                  amet consectetur. Eget arcu dui mattis vitae metus. Ipsum
                  aliquam neque dictum amet id quis nunc. Viverra senectus
                  semper nulla tellus. Magna viverra mollis cras condimentum
                  dictum quis commodo viverra mollis.
                </p>
              </div>
            </div>
            <div className="h-[250px]"></div>
          </div>
        </div>
        <div className="w-full bg-white min-h-screen h-auto">
          <div className="relative max-w-[95%] w-[800px] mx-auto pt-36 pb-10">
            <div className="w-full flex flex-col gap-5 absolute -top-36">
              <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <div className="bg-[#D9D9D9] w-[150px] h-[250px]">
                    <Image
                      unoptimized
                      src="https://i.ytimg.com/vi/JIT8tGjFRco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBI7pArXM2i-4PNIqOvYh3lw6emag"
                      alt="alt"
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-10">
                <p className="text-3xl">
                  Ocean shipping is the cheapest way to transport goods, but...
                </p>
                <div className="flex flex-col gap-2">
                  <div className="bg-[#D9D9D9] w-full md:w-[280px] h-[150px]">
                    <Image
                      unoptimized
                      src="https://i.ytimg.com/vi/JIT8tGjFRco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBI7pArXM2i-4PNIqOvYh3lw6emag"
                      alt="alt"
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur. In pulvinar nulla
                  </p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur. Risus urna ornare
                    sit morbi. Dolor sit viverra bibendum suscipit nunc cursus
                    dis sed pellentesque. Aliquam fermentum dolor rutrum ut nisl
                    odio tortor ullamcorper id. Commodo sed faucibus malesuada
                    fringilla purus ut.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-2 -mt-16">
                  <div className="bg-[#D9D9D9] w-full h-[150px]">
                    <Image
                      unoptimized
                      src="https://i.ytimg.com/vi/JIT8tGjFRco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBI7pArXM2i-4PNIqOvYh3lw6emag"
                      alt="alt"
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-right">Lorem ipsum dolor.</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur. Risus urna ornare
                    sit morbi. Dolor sit viverra bibendum suscipit nunc cursus
                    dis sed pellentesque. Aliquam fermentum dolor rutrum ut nisl
                    odio tortor ullamcorper id. Commodo sed faucibus malesuada
                    fringilla purus ut.
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-16">
                  <div className="bg-[#D9D9D9] w-full h-[150px]">
                    <Image
                      unoptimized
                      src="https://i.ytimg.com/vi/JIT8tGjFRco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBI7pArXM2i-4PNIqOvYh3lw6emag"
                      alt="alt"
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-right">
                    Lorem ipsum dolor sit amet consectetur. Sollicitudin.
                  </p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur. Risus urna ornare
                    sit morbi. Dolor sit viverra bibendum suscipit nunc cursus
                    dis sed pellentesque. Aliquam fermentum dolor rutrum ut nisl
                    odio tortor ullamcorper id. Commodo sed faucibus malesuada
                    fringilla purus ut.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 -ml-36">
                <div className="flex flex-col gap-2 -mt-36">
                  <div className="bg-[#D9D9D9] w-[150px] h-[250px]">
                    <Image
                      unoptimized
                      src="https://i.ytimg.com/vi/JIT8tGjFRco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBI7pArXM2i-4PNIqOvYh3lw6emag"
                      alt="alt"
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur. Sollicitudin.</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur. Risus urna ornare
                    sit morbi. Dolor sit viverra bibendum suscipit nunc cursus
                    dis sed pellentesque. Aliquam fermentum dolor rutrum ut nisl
                    odio tortor ullamcorper id. Commodo sed faucibus malesuada
                    fringilla purus ut.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-[#D9D9D9] w-[180px] h-[250px]">
                    <Image
                      unoptimized
                      src="https://i.ytimg.com/vi/JIT8tGjFRco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBI7pArXM2i-4PNIqOvYh3lw6emag"
                      alt="alt"
                      width={0}
                      height={0}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur. Sollicitudin.</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur. Risus urna ornare
                    sit morbi. Dolor sit viverra bibendum suscipit nunc cursus
                    dis sed pellentesque. Aliquam fermentum dolor rutrum ut nisl
                    odio tortor ullamcorper id. Commodo sed faucibus malesuada
                    fringilla purus ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black min-h-screen py-14">
        <div className="mx-auto max-w-[95%] w-[1333px]">
          <div className="w-full grid grid-cols-1 lg:justify-between lg:grid-cols-[25%_73%] xl:grid-cols-[20%_78%]">
            <h1 className="text-5xl text-white font-bold">NUESTRA HISTORIA</h1>
            <div className="w-full py-10 relative">
              <CaroucelHistoria />
            </div>
          </div>

          <div className="w-full h-auto relative">
            <Image unoptimized src="/assets/images/info/fondo_historia.png" alt="alt" width={0} height={0} className="w-full h-auto" />
          </div>

        </div>
      </div>
    </div>
  );
}
