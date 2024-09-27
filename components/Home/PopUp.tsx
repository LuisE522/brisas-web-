'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { FaCircleXmark } from "react-icons/fa6";

export default function PopUp() {
    const [isOpen, setIsOpen] = useState(true); // Iniciar como true para abrir el modal al cargar la página

    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto'; // Restaurar al desmontar el componente
        };
    }, [isOpen]);

    return (
        <div className="">
            {isOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-40" />
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className='w-[95%] max-w-[500px] h-auto relative'>
                            <Image unoptimized src={'/assets/images/popup/popup2.png'} alt='popup' width={0} height={0} className='w-full h-auto ' />
                            <FaCircleXmark onClick={closeModal} size={20} className='mt-4 text-white rounded absolute top-px right-4 cursor-pointer' />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
