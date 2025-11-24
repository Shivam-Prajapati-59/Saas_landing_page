
import Image from 'next/image'
import logo from '@/public/assets/logosaas.png';
import { Instagram, Linkedin, Pin, X, Youtube } from 'lucide-react';


const Footer = () => {
    return (
        <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
            <div className='container mx-auto'>
                <div
                    className="inline-flex relative 
    before:content-[''] 
    before:absolute before:top-2 before:bottom-0 
    before:h-full before:w-full 
    before:blur 
    before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]
  ">
                    <Image
                        src={logo}
                        alt='Saas Logo'
                        height={40}
                        className='relative'
                    />
                </div>
                <nav className='flex flex-col gap-6 md:flex-row md:justify-center mt-6'>
                    <a href="">About</a>
                    <a href="">Features</a>
                    <a href="">Customers</a>
                    <a href="">Pricing</a>
                    <a href="">Help</a>
                    <a href="">Careers</a>
                </nav>
                <div className='flex justify-center gap-6 mt-6'>
                    <X />
                    <Instagram />
                    <Linkedin />
                    <Pin />
                    <Youtube />
                </div>
                <p className='mt-6'>
                    &copy; 2025 your Company Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer