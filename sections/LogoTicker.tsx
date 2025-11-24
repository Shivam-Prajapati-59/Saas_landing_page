"use client";
import React from 'react'
import acmeLogo from '@/public/assets/logo-acme.png';
import quantumLogo from '@/public/assets/logo-quantum.png';
import echologo from '@/public/assets/logo-echo.png';
import celestialLogo from '@/public/assets/logo-celestial.png';
import pulseLogo from '@/public/assets/logo-pulse.png';
import apexLogo from '@/public/assets/logo-apex.png';
import Image from 'next/image';
import { motion } from 'motion/react';

const logos = [
    { id: 1, src: acmeLogo, alt: 'Acme Logo' },
    { id: 2, src: quantumLogo, alt: 'Quantum Logo' },
    { id: 3, src: echologo, alt: 'Echo Logo' },
    { id: 4, src: celestialLogo, alt: 'Celestial Logo' },
    { id: 5, src: pulseLogo, alt: 'Pulse Logo' },
    { id: 6, src: apexLogo, alt: 'Apex Logo' },
    { id: 7, src: acmeLogo, alt: 'Acme Logo' },
    { id: 8, src: quantumLogo, alt: 'Quantum Logo' },
    { id: 9, src: echologo, alt: 'Echo Logo' },
    { id: 10, src: celestialLogo, alt: 'Celestial Logo' },
    { id: 11, src: pulseLogo, alt: 'Pulse Logo' },
    { id: 12, src: apexLogo, alt: 'Apex Logo' },
]

const LogoTicker = () => {
    return (
        <div className='py-8 md:py-12 bg-white'>
            <div className='container mx-auto'>
                <div
                    className="flex overflow-hidden"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black, transparent)",
                    }}
                >
                    <motion.div className='flex gap-14 flex-none pr-14'
                        animate={{
                            translateX: "-50%",
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {
                            logos.map(logo => (
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    key={logo.id}
                                    className='logo-ticker-image'
                                />
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default LogoTicker