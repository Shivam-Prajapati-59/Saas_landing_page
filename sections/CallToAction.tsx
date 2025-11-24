"use client";
import { ArrowRight } from 'lucide-react'
import starImage from '@/public/assets/star.png'
import springImage from '@/public/assets/spring.png'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react';

const CallToAction = () => {

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={sectionRef} className='bg-linear-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
            <div className='container mx-auto'>
                <div className='section-heading relative'>
                    <h2 className='section-title'>
                        Sign up for free today!
                    </h2>
                    <p className='section-descprition mt-5'>
                        Celebrate the joy of accomplishmnet with an app designed to track your progress and motivate your efforts.
                    </p>
                    <motion.img
                        src={starImage.src}
                        alt='star Image'
                        width={360}
                        className='absolute -left-[230px] -top-[197px] hidden md:block'
                        style={{ translateY }}
                    />
                    <motion.img
                        src={springImage.src}
                        alt='spring Image'
                        width={360}
                        className='absolute 
                        -right-[231px] -top-[19px]
                        hidden md:block'
                        style={{ translateY }}
                    />
                    <div className='flex gap-2 mt-10 justify-center'>
                        <button className='btn btn-primary'>
                            Get for free
                        </button>
                        <button className='btn btn-text gap-1'>
                            <span>
                                Learn more
                            </span>
                            <ArrowRight className='h-5 w-5 ' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction