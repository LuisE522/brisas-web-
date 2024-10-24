"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

import trs from "@/public/locales/translate.json";
import { useLanguage } from "@/context/LanguageProvider";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Footer() {
  const { language } = useLanguage();
  const translations = trs as any;
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    // Optionally you can capitalize the first letter here
    name: path,
    path: pathNames.slice(0, i + 1).join("/"),
  }));

  console.log(pathItems);

  return (
    <>
      <div className="bg-white py-10 hidden md:block">
        <div className="max-w-[95%] w-[1080px] 2xl:w-full 2xl:max-w-screen-2xl mx-auto flex flex-row gap-1 items-center text-2xl capitalize">
          <span className="font-bold flex flex-row gap-1 items-center">
            Inicio <MdKeyboardArrowRight color="black" />
          </span>
          {pathItems.map((item, index) => (
            <>
              {item.name}
              {index !== pathItems.length - 1 && (
                <MdKeyboardArrowRight color="black" />
              )}
            </>
          ))}
        </div>
        <div className="w-full my-10 border-b-2 border-[#D9D9D9]"></div>

        <div className="max-w-[95%] w-[1080px] 2xl:w-full 2xl:max-w-screen-2xl mx-auto grid grid-cols-4 xl:grid-cols-5 gap-3 2xl:gap-5">
          <div className="w-full flex flex-col gap-3 2xl:gap-5">
            <Link href="/nosotros" className="text-xl 2xl:text-2xl font-bold">
              Sobre nosotros
            </Link>
            <div className="w-full flex flex-col gap-3">
              <p>Nuestra historia</p>
              <p>Misisión y Visión</p>
              <p>Consejo Directivo</p>
              <p>Trabaja con Nosotros</p>
              <p>Promociones</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-xl 2xl:text-2xl font-bold">Eventos</h1>
            <div className="w-full flex flex-col gap-3">
              <p>Almuerzo Show</p>
              <p>Noches de Folklore</p>
              <p>Noches Interculturales</p>
              <p>Eventos Corporativos</p>
              <p>Eventos Externos</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-xl 2xl:text-2xl font-bold">Cultural</h1>
            <div className="w-full flex flex-col gap-3">
              <p>Agenda Cultural</p>
              <p>Revista Brisas</p>
              <p>Noticias</p>
              <p>Estudiantina</p>
              <p>Radio</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <Link
              href="/pquina-qocha"
              className="text-xl 2xl:text-2xl font-bold"
            >
              Puquina Q’ocha
            </Link>
            <div className="w-full flex flex-col gap-3">
              <p>Carta Digital</p>
              <p>Carta de Cocteles</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-xl 2xl:text-2xl font-bold">Asociados</h1>
            <div className="w-full flex flex-col gap-3">
              <p>Comunicados</p>
              <p>Adminsiones</p>
              <p>Asambleas</p>
              <p>Actas</p>
              <p>Estados Financieros</p>
            </div>
          </div>
        </div>

        <div className="w-full my-10 border-b-2 border-[#D9D9D9]"></div>

        <div className="max-w-[95%] w-[1080px] 2xl:w-full 2xl:max-w-screen-2xl mx-auto grid grid-cols-3 justify-between items-center">
          <Image
            unoptimized
            src="/assets/images/nav_logo_negro.png"
            alt="alt"
            width={0}
            height={0}
            className="w-[80%] h-auto"
          />
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex flex-row gap-3 justify-center">
              <div className="w-fit p-2 h-full bg-black rounded-lg flex justify-center items-center text-xl">
                <FaFacebookF color="white" />
              </div>
              <div className="w-fit p-2 h-full bg-black rounded-lg flex justify-center items-center text-xl">
                <FaInstagram color="white" />
              </div>
              <div className="w-fit p-2 h-full bg-black rounded-lg flex justify-center items-center text-xl">
                <FaYoutube color="white" />
              </div>
              <div className="w-fit p-2 h-full bg-black rounded-lg flex justify-center items-center text-xl">
                <FaWhatsapp color="white" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1 justify-center items-center">
              <p>eventos@brisasdeltiticaca.com</p>
              <p>ventas@brisasdeltiticaca.com</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-1 items-center">
            <p className="font-bold text-lg 2xl:text-2xl capitalize">
              {translations[language].contactanos}
            </p>
            <p className="text-sm">Jr. Héroes de Tarapacá 168</p>
            <div className="w-full flex flex-row justify-center gap-2 ">
              <p className="flex flex-row gap-1 items-center">
                <FaPhoneAlt /> 01-715 6960
              </p>
              <p className="flex flex-row gap-1 items-center">
                <FaPhoneAlt />
                01-715 6961
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-5 flex flex-col gap-5 md:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-none font-bold">
              {translations[language].nosotros}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="w-full flex flex-col gap-5 pl-5">
                <li>Nuestra historia</li>
                <li>Misisión y Visión</li>
                <li>Consejo Directivo</li>
                <li>Trabaja con Nosotros</li>
                <li>Promociones</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="border-none font-bold">
              {translations[language].eventos}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="w-full flex flex-col gap-5 pl-5">
                <li>Almuerzo Show</li>
                <li>Noches de Folklore</li>
                <li>Noches Interculturales</li>
                <li>Eventos Corporativos</li>
                <li>Eventos Externos</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="border-none font-bold">
              {translations[language].cultural}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="w-full flex flex-col gap-5 pl-5">
                <li>Agenda Cultural</li>
                <li>Revista Brisas</li>
                <li>Noticias</li>
                <li>Estudiantina</li>
                <li>Radio</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="border-none font-bold">
              Puquina Q’ocha
            </AccordionTrigger>
            <AccordionContent>
              <ul className="w-full flex flex-col gap-5 pl-5">
                <li>Carta Digital</li>
                <li>Carta de Cocteles</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="border-none font-bold">
              {translations[language].asociados}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="w-full flex flex-col gap-5 pl-5">
                <li>Comunicados</li>
                <li>Adminsiones</li>
                <li>Asambleas</li>
                <li>Actas</li>
                <li>Estados Financieros</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="w-full flex flex-col gap-3 items-center">
          <Image
            unoptimized
            src="/assets/images/nav_logo_negro.png"
            alt="alt"
            width={0}
            height={0}
            className="w-[70%] h-auto"
          />

          <div className="w-full flex flex-row gap-3 justify-center">
            <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-black rounded-lg flex justify-center items-center">
              <FaFacebookF color="white" size={25} />
            </div>
            <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-black rounded-lg flex justify-center items-center">
              <FaInstagram color="white" size={25} />
            </div>
            <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-black rounded-lg flex justify-center items-center">
              <FaYoutube color="white" size={25} />
            </div>
            <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-black rounded-lg flex justify-center items-center">
              <FaWhatsapp color="white" size={25} />
            </div>
          </div>

          <div className="w-full flex flex-col gap-1 items-center">
            <p className="font-bold text-lg">
              {translations[language].contactanos}
            </p>
            <p className="text-sm">Jr. Héroes de Tarapacá 168</p>
            <div className="w-full flex flex-row justify-around text-sm">
              <p className="flex flex-row gap-1 items-center">
                <FaPhoneAlt /> 01-715 6960
              </p>
              <p className="flex flex-row gap-1 items-center">
                <FaPhoneAlt />
                01-715 6961
              </p>
            </div>
            <p className="text-sm">eventos@brisasdeltiticaca.com</p>
            <p className="text-sm">ventas@brisasdeltiticaca.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
