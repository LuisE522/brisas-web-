"use client";

import Image from "next/image";
import NavTransparent from "../Home/NavTransparent";
import Link from "next/link";
import { useState } from "react";

export default function Puquina() {
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
    <>
      <div className="h-screen w-full absolute top-0 z-0">
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
        <Image
          unoptimized
          src="/assets/images/pquina/logo.png"
          alt="alt"
          width={0}
          height={0}
          className="w-auto h-[70px] object-cover absolute top-[124px] right-10"
        />
        {/* Logo en la esquina derecha */}

        <p className="bottom-12 w-full absolute text-white text-center">
          Atención de 12:00 a.m. 4:00 p.m.
        </p>
        <div className="w-full flex justify-center absolute -bottom-5">
          <button className="w-fit px-4 py-2 text-center bg-white font-bold rounded-full drop-shadow-lg">
            Consulta
          </button>
        </div>
      </div>

      <div className="w-full h-screen bg-black">
        <div className="mx-auto w-[500px]  h-full !relative">
          <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white text-center">
            <span>SALÓN GASTRONOMICO</span>
            <h1
              className="text-8xl bebas-neue text-[#FF9900]"
              style={{ lineHeight: "1.2" }}
            >
              pUQUINA Q’OCHA
            </h1>
            <span className="w-[400px]">
              Inspirados en el antiguo nombre del lago Titicaca dimos vida a
              nuestro Salón Gastronómico, con la única consigna de rendir
              homenaje a la gastronomia puqueña en Lima.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-auto">
        <Image
          unoptimized
          src="/assets/images/pquina/fondo_2.png"
          alt="alt"
          width={0}
          height={0}
          className="w-full h-auto"
        />
      </div>

      <div className="w-full relative flex flex-col gap-20 py-20">
        <div className="max-w-[95%] mx-auto w-[900px] 2xl:w-full 2xl:max-w-screen-lg flex flex-col gap-8">
          <p className="text-4xl bebas-neue text-center">
            Deléitese con lo mejor de la culinaria puneña y peruana a través de
            deliciosos potahes preparados con recetas e insumos originales
          </p>
        </div>

        <div className="w-full h-screen bg-slate-300 animate-pulse"></div>

        <div className="mx-auto max-w-[95%] w-[900px] 2xl:w-full 2xl:max-w-screen-lg flex flex-col gap-8">
          <div className="w-full flex flex-col gap-3">
            <p className="text-4xl bebas-neue text-center">
              Descubre nuestro menú
            </p>
            <div className="w-full text-center">
              <span>
                El menú consiste en una mezcla de comidas tipica de Puno y
                cambia según la estación.
              </span>
              <br />
              <span>
                ¡No te olvides de preguntar por los platos especiales del día!
              </span>
            </div>
          </div>

          <div className="w-full h-[50px] flex flex-row flex-wrap items-center justify-between gap-1 uppercase">
            <div
              onClick={() => changeCategoria("Entradas")}
              className={`cursor-pointer transition-all duration-500 ${
                categoria === "Entradas" ? "text-lg font-bold" : "text-sm"
              }`}
            >
              Entradas
            </div>
            <div
              onClick={() => changeCategoria("Típico")}
              className={`cursor-pointer transition-all duration-500 ${
                categoria === "Típico" ? "text-lg font-bold" : "text-sm"
              }`}
            >
              Típico
            </div>
            <div
              onClick={() => changeCategoria("Criollos")}
              className={`cursor-pointer transition-all duration-500 ${
                categoria === "Criollos" ? "text-lg font-bold" : "text-sm"
              }`}
            >
              Criollos
            </div>
            <div
              onClick={() => changeCategoria("Especialidades")}
              className={`cursor-pointer transition-all duration-500 ${
                categoria === "Especialidades" ? "text-lg font-bold" : "text-sm"
              }`}
            >
              Especialidades
            </div>
            <div
              onClick={() => changeCategoria("Menu infantil")}
              className={`cursor-pointer transition-all duration-500 ${
                categoria === "Menu infantil" ? "text-lg font-bold" : "text-sm"
              }`}
            >
              Menu infantil
            </div>
            <div
              onClick={() => changeCategoria("Tragos")}
              className={`cursor-pointer transition-all duration-500 ${
                categoria === "Tragos" ? "text-lg font-bold" : "text-sm"
              }`}
            >
              Tragos
            </div>
            <div
              onClick={() => changeCategoria("Postres")}
              className={`cursor-pointer transition-all duration-500 ${
                categoria === "Postres" ? "text-lg font-bold" : "text-sm"
              }`}
            >
              Postres
            </div>
          </div>
          <p className="text-6xl text-center bebas-neue" id="entradas">
            {categoria}
          </p>
          <div className="w-full grid grid-cols-4 gap-5">
            {entradas.map((entrada: any, index: number) => (
              <div
                key={index}
                className="w-full relative h-80 overflow-hidden rounded-lg grid grid-rows-[60%_37%] justify-between"
                style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
              >
                <Image
                  src={`${entrada.imagen}`}
                  alt="alt"
                  width={0}
                  height={0}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="p-3 w-full flex flex-col gap-1">
                  <h1 className="font-bold">{entrada.nombre}</h1>
                  <p className="text-xs">{entrada.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
