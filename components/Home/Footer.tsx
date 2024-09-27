'use client'

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

import trs from '@/public/locales/translate.json'
import { useLanguage } from "@/context/LanguageProvider";

export default function Footer() {

    const { language } = useLanguage();
    const translations = trs as any

    return (
        <div className="bg-black py-10">
            <div className='max-w-[95%] w-[1080px] mx-auto flex flex-col gap-10'>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-between gap-5">
                    <Image unoptimized src={'/assets/images/nav_logo.png'} alt="Footer logo" width={0} height={0} className="h-[50px] w-auto" />
                    <div className="w-full flex flex-row items-center rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-white text-black">
                            <input type="email" className="bg-white text-black w-full h-full outline-none px-2" placeholder="Escribe tu e-mail" />
                        </div>
                        <span className="w-fit h-full px-5 py-2 bg-[#00A859] flex items-center text-white">Suscríbete</span>
                    </div>
                    <div className="w-full flex lg:grid lg:grid-cols-5 gap-x-5">
                        <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaFacebookF color="black" size={25} />
                        </div>
                        <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaXTwitter color="black" size={25} />
                        </div>
                        <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaInstagram color="black" size={25} />
                        </div>
                        <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaYoutube color="black" size={25} />
                        </div>
                        <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                            <FaWhatsapp color="black" size={25} />
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 gap-5 lg:grid-cols-2 text-white">
                    <div className="w-full grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2">
                        <div className="w-full flex flex-col gap-1">
                            <p>{translations[language].nosotros}</p>
                            <p>{translations[language].nuestra_institucion}</p>
                            <p>{translations[language].mision_vision}</p>
                            <p>{translations[language].consejo_directivo}</p>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p>{translations[language].elenco}</p>
                            <p>{translations[language].elenco_danzas}</p>
                            <p>{translations[language].coro_brizas_titicaca}</p>
                            <p>{translations[language].estudiantina}</p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2">
                        <div className="w-full flex flex-col gap-1">
                            <p>{translations[language].libro_reclamaciones}</p>
                            <p>{translations[language].trabaja_con_nosotros}</p>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <p>{translations[language].contactanos}</p>
                            <p>Jr. Héroes de Tarapacá 168</p>
                            <div className="w-full flex flex-row justify-between">
                                <p>01-715 6960</p>
                                <p>01-715 6961</p>
                            </div>
                            <p>eventos@brisasdeltiticaca.com</p>
                            <p>ventas@brisasdeltiticaca.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
