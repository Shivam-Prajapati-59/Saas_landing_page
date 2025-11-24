"use client";
import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features",
        ],
    },
];


const Pricing = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto lg:px-10">
                <div className="section-heading">
                    <h2 className="section-title">Pricing</h2>
                    <p className="section-descprition mt-5">Free Forever. Upgrade for Unlimited tasks, better security, and exclusive features.</p>
                    <div>
                        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end  lg:justify-center xl:gap-16">
                            {pricingTiers.map((tier) => (
                                <div
                                    key={tier.title}
                                    className={twMerge(
                                        "card",
                                        tier.inverse === true && "border-black bg-black text-white/60"
                                    )}
                                >
                                    <div className="flex justify-between">
                                        <h3 className={twMerge(
                                            "text-lg font-bold text-black/50", tier.inverse === true && "text-white/60"
                                        )}>{tier.title}</h3>

                                        {tier.popular === true && (

                                            <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 ">
                                                <motion.span
                                                    animate={{
                                                        backgroundPositionX: "100%",
                                                    }}

                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                        repeatType: 'loop'
                                                    }}

                                                    className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)]
                                                bg-size-[200%]
                                        text-transparent bg-clip-text font-medium
">
                                                    Popular
                                                </motion.span>
                                            </div>
                                        )}

                                    </div>
                                    <div className="flex items-baseline gap-1 mt-[30px]">
                                        <span className="text-4xl font-bold tracking-tighter leading-none">${tier.monthlyPrice}</span>
                                        <span className="tracking-tight font-bold text-black/50">/month</span>
                                    </div>
                                    <button className={twMerge(
                                        "btn btn-primary w-full mt-[30px]", tier.inverse === true && "bg-white text-black ")}>
                                        {tier.buttonText}
                                    </button>
                                    <ul className="flex flex-col gap-5 mt-8">
                                        {tier.features.map(feature => (
                                            <li key={feature} className="text-sm flex items-center gap-4 ">
                                                <CheckIcon className="h-6 w-6" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Pricing