
'use client';
import pyramidImage from '@/public/assets/pyramid.png'
import tubeImage from '@/public/assets/tube.png'
import productImage from '@/public/assets/product-image.png'
import Image from 'next/image'
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from 'react';

const ProductShowcase = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={sectionRef} className="bg-linear-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
            <div className='container mx-auto px-2'>
                <div className='section-heading'>
                    <div className='flex justify-center'>
                        <div className='tag'>
                            Boost Your Productivity
                        </div>
                    </div>
                    <h2 className='section-title mt-5'>
                        A more Effective way to track Progess
                    </h2>
                    <p className='section-descprition mt-5'>Effortlessly turn your ideas into a fully functional, responsive, Saas Wensite in juts minutes with this template.
                    </p>
                </div>
                <div className='relative'>
                    <Image
                        src={productImage}
                        alt='product Image'
                        className='mt-10'
                    />
                    <motion.img
                        src={pyramidImage.src}
                        alt='Pyramid Image'
                        height={262}
                        width={262}
                        className='absolute hidden md:block -right-36 -top-32 '
                        style={{
                            translateY: translateY
                        }}
                    />
                    <motion.img
                        src={tubeImage.src}
                        alt='Tube Image'
                        height={248}
                        width={248}
                        className='absolute 
                        hidden md:block
                        bottom-24 -left-36'
                        style={{
                            translateY: translateY
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase