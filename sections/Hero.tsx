'use client';
import { ArrowRight } from 'lucide-react'
import cogImage from '@/public/assets/cog.png'
import Image from 'next/image'
import cylinderImage from '@/public/assets/cylinder.png'
import noodleImage from "@/public/assets/noodle.png"
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import { useRef } from 'react';

const Hero = () => {

    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip'
            style={{
                background: "radial-gradient(ellipse 200% 100% at bottom left, #183ec2, #EAEEFE 100%)"
            }}
        >
            <div className='container mx-auto px-4'>
                <div className='md:flex items-center'>
                    <div className='md:w-[478px]'>
                        <div className='tag'>Version 2.0 is here</div>
                        <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-linear-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Pathway to the Productivity</h1>
                        <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
                            Celebrate the Joy of accomplishment with an app designed to boost your progress, motivate you efforts, and celebrate your success.
                        </p>
                        <div className='flex gap-1 items-center mt-[30px]'>
                            <button className='btn btn-primary'>Get for free</button>
                            <button className='btn btn-text gap-1'>
                                <span>
                                    Learn More
                                </span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                    {/* Image warp  */}
                    <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative xl:left-50 2xl:left-95'>

                        <motion.img
                            src={cogImage.src}
                            alt='cog image'
                            className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
                            animate={{
                                translateY: [-30, 30],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 3,
                                ease: 'easeInOut'
                            }}
                        />
                        <motion.img
                            src={cylinderImage.src}
                            alt='Cylinder Image'
                            width={220}
                            height={220}
                            className='hidden md:block -top-8 -left-32 md:absolute'
                            style={{
                                translateY: translateY
                            }}
                        />

                        <motion.img
                            src={noodleImage.src}
                            alt='NoodleImage'
                            width={220}
                            className='hidden lg:block absolute top-[524px] left-[428px]'
                            style={{
                                rotate: '30deg',
                                translateY: translateY
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero