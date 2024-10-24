import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Carta() {
  const [categoria, setCategoria] = useState("Entradas");

  const entradas = [
    {
      imagen: "/assets/images/pquina/tamal-criollo.png",
      nombre: "Tamal Criollo",
      descripcion:
        "Suave masa a base de maiz mote, envuelta en hojas de plátano y acompañado de sarza criolla.",
    },
    {
      imagen: "/assets/images/pquina/humita-dulce.png",
      nombre: "Humita Dulce",
      descripcion:
        "Suave masa a base de choclo tierno, envuelto en panca y un toque dulce.",
    },
    {
      imagen: "/assets/images/pquina/choclo-con-queso.png",
      nombre: "Choclo con queso",
      descripcion:
        "Delicioso choclo tierno, con dados de queso, acompañado de papa amarilla y salsa de la casa.",
    },
    {
      imagen: "/assets/images/pquina/chunio-revuelto.png",
      nombre: "Chuño revuelto",
      descripcion: "Chuño blanco revuelta con tres tipos de quesos.",
    },
    {
      imagen: "/assets/images/pquina/solterito-de-queso.png",
      nombre: "Solterito de queso",
      descripcion:
        "Ensalada clásica de habas, tomate, cebolla, choclo, zanahoria, queso. fresco y aliño.",
    },
    {
      imagen: "/assets/images/pquina/queso-frito.png",
      nombre: "Queso frito",
      descripcion:
        "Delicioso queso paria, acompañada de choclo y papa amarilla.",
    },
    {
      imagen: "/assets/images/pquina/zarza-de-patita.png",
      nombre: "Zarza de patita",
      descripcion:
        "Patitas de cerdo maceradas con aliño de la casa, coronadas con cebolla, acompañados con papa sancochada",
    },
    {
      imagen: "/assets/images/pquina/rocoto-relleno.png",
      nombre: "rocoto-relleno",
      descripcion: "Relleno de carne picada, con pastel de papa.",
    },
    {
      imagen: "/assets/images/pquina/causa-de-pollo.png",
      nombre: "Causa de pollo",
      descripcion:
        "Puré de papa amarilla con ají amarillo toques de limón relleno con pollo deshilachado.",
    },
    {
      imagen: "/assets/images/pquina/papa-a-la-huancaina.png",
      nombre: "Papa a la huancaína",
      descripcion:
        "Papa bañada con una deliciosa salsa huancaína, decorado con huevo y aceituna.",
    },
    {
      imagen: "/assets/images/pquina/pastel-de-papa.png",
      nombre: "Pastel de papa",
      descripcion: "Papa en láminas con queso, sarza criolla y leche horneada.",
    },
    {
      imagen: "/assets/images/pquina/ceviche-de-pescado.png",
      nombre: "Ceviche de pescado",
      descripcion:
        "Dados de pescado marinados en una salsa de limón con crema de rocoto, acompañado con choclo desgranando y camote.",
    },
  ];

  const changeCategoria = (option: string) => {
    setCategoria(option);
  };
  return (
    <div className="max-w-[95%] w-[500px] md:w-[800px] lg:w-[900px] 2xl:w-full 2xl:max-w-screen-2xl mx-auto relative flex flex-col gap-10 md:gap-20 py-10 md:py-20">
      <div className="w-full flex flex-col gap-8">
        <div className="w-full h-[70px] lg:h-[50px] flex flex-row flex-nowrap overflow-x-auto items-center justify-between gap-7 md:gap-5 lg:gap-3 uppercase text-nowrap">
          <div
            onClick={() => changeCategoria("Entradas")}
            className={`cursor-pointer transition-all duration-500 ${
              categoria === "Entradas" ? "text-lg 2xl:text-2xl font-bold" : "text-sm 2xl:text-lg"
            }`}
          >
            Entradas
          </div>
          <div
            onClick={() => changeCategoria("Típico")}
            className={`cursor-pointer transition-all duration-500 ${
              categoria === "Típico" ? "text-lg 2xl:text-2xl font-bold" : "text-sm 2xl:text-lg"
            }`}
          >
            Típico
          </div>
          <div
            onClick={() => changeCategoria("Criollos")}
            className={`cursor-pointer transition-all duration-500 ${
              categoria === "Criollos" ? "text-lg 2xl:text-2xl font-bold" : "text-sm 2xl:text-lg"
            }`}
          >
            Criollos
          </div>
          <div
            onClick={() => changeCategoria("Especialidades")}
            className={`cursor-pointer transition-all duration-500 ${
              categoria === "Especialidades" ? "text-lg 2xl:text-2xl font-bold" : "text-sm 2xl:text-lg"
            }`}
          >
            Especialidades
          </div>
          <div
            onClick={() => changeCategoria("Menu infantil")}
            className={`cursor-pointer transition-all duration-500 ${
              categoria === "Menu infantil" ? "text-lg 2xl:text-2xl font-bold" : "text-sm 2xl:text-lg"
            }`}
          >
            Menu infantil
          </div>
          <div
            onClick={() => changeCategoria("Tragos")}
            className={`cursor-pointer transition-all duration-500 ${
              categoria === "Tragos" ? "text-lg 2xl:text-2xl font-bold" : "text-sm 2xl:text-lg"
            }`}
          >
            Tragos
          </div>
          <div
            onClick={() => changeCategoria("Postres")}
            className={`cursor-pointer transition-all duration-500 ${
              categoria === "Postres" ? "text-lg 2xl:text-2xl font-bold" : "text-sm 2xl:text-lg"
            }`} 
          >
            Postres
          </div>
        </div>
        <p className="text-6xl text-center bebas-neue" id="entradas">
          {categoria}
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
          {entradas.map((entrada: any, index: number) => (
            <div
              key={index}
              className="w-full relative h-auto overflow-hidden rounded-lg"
              style={{ boxShadow: "0px 8px 19px 4px rgba(51,51,51,0.3)" }}
            >
              <div className="w-full h-44 lg:h-52 2xl:h-96 relative overflow-hidden">
                <Image
                  unoptimized
                  src={entrada.imagen}
                  alt="alt"
                  width={0}
                  height={0}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-3 w-full h-32 md:h-40 flex flex-col gap-1">
                <h1 className="font-bold text-base 2xl:text-2xl">{entrada.nombre}</h1>
                <p className="text-[10px] md:text-xs 2xl:text-base line-clamp-4">
                  {entrada.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-5 text-center text-sm md:text-base">
        <Link
          href="https://bit.ly/CartaPuquina"
          target="_blank"
          className="border-2 border-[#949393] w-[250px] px-2 py-1 text-[#949393]"
        >
          Carta Digital Puquina Q'ocha
        </Link>
        <Link
          href="https://drive.google.com/file/d/1eDl5szVReJaHh0TXnJhRQwjASrb9EGWw/view?usp=drive_link"
          target="_blank"
          className="border-2 border-[#949393] w-[250px] px-2 py-1 text-[#949393]"
        >
          Carta Fiesta Patronal
        </Link>
        <Link
          href="https://drive.google.com/file/d/155FCBm7fASrwjYI8WUQ9CvDoOAvKuZ8z/view?usp=drive_link"
          target="_blank"
          className="border-2 border-[#949393] w-[250px] px-2 py-1 text-[#949393]"
        >
          Carta Cócteles
        </Link>
      </div>
    </div>
  );
}
