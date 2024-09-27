"use client";

import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

import trs from "@/public/locales/translate.json";

export default function NavTransparent() {
  const { language, changeLanguage } = useLanguage();

  const translations = trs as any;

  return (
    <div className="w-full mx-auto">
      {" "}
      {/* max-w-[1280px] */}
      <div className="w-full grid grid-cols md:grid-cols-3 gap-3 md:gap-0 justify-center md:justify-between h-auto p-3 md:p-0 md:h-[124px] items-center text-base z-[9999]">
        <div className="w-full text-white flex justify-center gap-5">
          <Link href="#eventos">{translations[language].eventos}</Link>
          <Link href="#cultural">{translations[language].cultural}</Link>
          <Link href="#cultural">{translations[language].nosotros}</Link>
        </div>
        <Link href="/">
          <Image
            unoptimized
            src={`/assets/images/nav_logo.png`}
            width={0}
            height={0}
            alt="Logo"
            className="h-[60px] w-auto "
          />
        </Link>
        <div className="hidden text-white w-full md:flex justify-between gap-3 items-center">
          <div className="w-full flex justify-start gap-8 items-center">
            <Image
              unoptimized
              src={"/assets/images/logo nav_Puquina_Qocha.png"}
              height={0}
              width={0}
              alt="Puquina Q´ocha"
              className="w-auto h-[60px]"
            />
            <Image
              unoptimized
              src={"/assets/images/logo_CFA_Brisas_Vertical.png"}
              height={0}
              width={0}
              alt="Puquina Q´ocha"
              className="w-auto h-[60px]"
            />
          </div>
          <div className="w-full h-full items-center gap-3 flex">
            {" "}
            {/* justify-end */}
            {/* <GrLanguage className='' size={25} /> */}
            <div className="flex flex-row gap-1 font-bold z-[99999]">
              <span
                className={`cursor-pointer ${
                  language == "es" ? "text-muted-foreground" : ""
                }`}
                onClick={() => changeLanguage("es")}
              >
                ESP
              </span>
              <span>|</span>
              <span
                className={`cursor-pointer ${
                  language == "en" ? "text-muted-foreground" : ""
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </span>
            </div>
            <FaRegCircleUser className="" size={25} />
            <IoSearch className="" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
