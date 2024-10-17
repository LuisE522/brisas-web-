"use client";

import React from "react";
import { Contenido_I, TomosWithContenido_I } from "./Tomos";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { API_URL } from "@/const";
import { getAuthTokenClient } from "@/lib/getUserData";
import Image from "next/image";
import Link from "next/link";
import CreateContenido from "./Contenido/CreateContenido";
import { toast } from "react-toastify";

export default function ShowTomo({ tomo }: { tomo: TomosWithContenido_I }) {
  /* console.log(tomo); */

  const [titulo, setTitulo] = useState(tomo.titulo);
  const [image, setImage] = useState<string>(tomo.image);

  const [listContenido, setListContenido] = useState<Contenido_I[]>(
    tomo.contenidos
  );

  const token = getAuthTokenClient();

  const onUpdate = async () => {
    const updateTomoToast = toast.loading("Creando...");

    const data = {
      titulo,
      image,
    };

    const update = await fetch(`${API_URL}/tomos/update/${tomo.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const res = await update.json();

    if (update.ok) {
      toast.update(updateTomoToast, {
        render: res.message,
        isLoading: false,
        type: "success",
        autoClose: 2000,
      });
    } else {
      toast.update(updateTomoToast, {
        render: res.message,
        isLoading: false,
        type: "error",
        autoClose: 2000,
      });
    }

    /* console.log(res); */
  };

  const showDialog = (index: number) => {
    /* setDialogInfo(listFundadores[index]); */
  };

  const onDialogClose = () => {
    /* setDialogInfo(null); */
  };

  const closeCreate = (newContenido: Contenido_I) => {
    /* console.log(newFundador) */
    setListContenido((prevContenido: Contenido_I[]) => [
      ...prevContenido,
      newContenido,
    ]);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[30%_68%] justify-between">
          <div className="w-full h-auto flex flex-col gap-2">
            <Image
              src={image}
              alt="alt"
              width={300}
              height={250}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full h-auto flex flex-col gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="titulo-es">Titulo (ES)</Label>
              <Input
                type="text"
                id="titulo-es"
                value={titulo.es}
                onChange={(e) => setTitulo({ ...titulo, es: e.target.value })}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="titulo-en">Titulo (EN)</Label>
              <Input
                type="text"
                id="titulo-en"
                value={titulo.en}
                onChange={(e) => setTitulo({ ...titulo, en: e.target.value })}
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="imagen">Imagen</Label>
              <Input
                type="text"
                id="imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <Button onClick={onUpdate}>Actualizar</Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="bg-black/40 px-5 py-3 rounded-lg flex flex-row justify-between items-center">
            <h1 className="text-sm lg:text-xl">Contenido del tomo</h1>
            <CreateContenido
              tomoId={tomo.id}
              onClose={(newContenido) => closeCreate(newContenido)}
            />
          </div>

          <div className="w-full grid grid-cols-4 gap-3">
            {listContenido.map((contenido: Contenido_I, index: number) => (
              <div
                className="w-full flex flex-col gap-2.5 cursor-pointer"
                key={index}
                onClick={() => showDialog(index)}
              >
                <div className="w-full flex justify-end">
                  <div className="w-full h-[200px] md:h-[250px] xl:h-[300px] bg-slate-400 !relative rounded-lg overflow-hidden">
                    {contenido.image && (
                      <Image
                        /* unoptimized */
                        src={contenido.image}
                        alt="alt"
                        width={300}
                        height={250}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* <div className="absolute bottom-1 right-1 flex flex-row gap-1 z-20">
                    <span className="px-3 py-1 text-xs text-white bg-black/70 rounded-lg">

                    </span>
                  </div> */}
                  </div>
                </div>
                {/* <div className="w-full relative text-white z-10 flex flex-col gap-1">
                  <h1 className="font-semibold text-center">
                    {contenido.titulo.es}
                  </h1>
                </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="w-full mt-4">
        <TinyEditor />
      </div> */}
      </div>
    </>
  );
}
