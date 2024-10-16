"use client";

import React, { useState } from "react";
import CreateTomos from "./CreateTomos";

export default function Tomos({ tomos }: any) {
  const [listTomos, setListTomos] = useState(tomos);

  console.log(tomos)

  const showDialog = (index: number) => {
    /* setDialogInfo(listFundadores[index]); */
  };

  const onDialogClose = () => {
    /* setDialogInfo(null); */
  };

  const closeCreate = (newTomo: any) => {
    /* console.log(newFundador) */

    setListTomos((prevTomo: any) => [...prevTomo, newTomo]);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="bg-black/40 px-5 py-3 rounded-lg flex flex-row justify-between items-center">
          <h1 className="text-sm lg:text-xl">Lista de todos los fundadores</h1>
          <CreateTomos onClose={(newFundador) => closeCreate(newFundador)} />
        </div>
        <div className="w-full grid grid-cols-4"></div>
      </div>
    </>
  );
}
