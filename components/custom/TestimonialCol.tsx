"use client";
import { motion } from "motion/react";
import Image from 'next/image'
import React from "react";

interface Testimonial {
    name: string;
    username: string;
    text: string;
    imageSrc: string;
}

interface TestimonialColProps {
    testimonials: Testimonial[];
    className?: string;
    duration?: number;
}

const TestimonialCol = ({ testimonials, className, duration }: TestimonialColProps) => {
    return (
        <div className={className}>
            <motion.div
                animate={{
                    translateY: "-50%"
                }}
                transition={{
                    duration: duration || 10,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop'
                }}
                className="flex flex-col gap-6 pb-6">
                {
                    [...new Array(2)].fill(0).map((_: any, index: any) => (
                        <React.Fragment key={index}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="card">
                                    <div>{testimonial.text}</div>
                                    <div className="flex items-center gap-2 mt-5">
                                        <Image
                                            src={testimonial.imageSrc}
                                            alt={testimonial.name}
                                            width={40}
                                            height={40}
                                            className="h-10 w-10 rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-medium tracking-tight leading-5">{testimonial.name}</div>
                                            <div className="leading-5 tracking-tight">{testimonial.username}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))
                }
            </motion.div >
        </div >
    )
}

export default TestimonialCol