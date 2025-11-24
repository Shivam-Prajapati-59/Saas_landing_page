import { ArrowBigRight, MenuIcon } from 'lucide-react'
import Logo from '@/public/assets/logosaas.png'
import Image from 'next/image'


const Header = () => {
    return (
        <header className='sticky top-0 z-20 backdrop-blur-sm'>
            <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
                <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
                <div className='inline-flex gap-1 items-center'>
                    <p>Get started for free</p>
                    <ArrowBigRight className='h-4 w-4' />
                </div>
            </div>
            <div className='py-5'>
                <div className='container mx-auto px-4'>
                    <div className='flex items-center justify-between'>
                        <Image
                            src={Logo}
                            alt='Saas Logo'
                            height={40}
                            width={40}
                        />
                        <MenuIcon className='h-5 w-5 md:hidden' />
                        <nav className='hidden md:flex gap-6 text-black/60 items-center'>
                            <a href="#" className='hover:text-black transition'>About</a>
                            <a href="#" className='hover:text-black transition'>Features</a>
                            <a href="#" className='hover:text-black transition'>Pricing</a>
                            <a href="#" className='hover:text-black transition'>Blog</a>
                            <a href="#" className='hover:text-black transition'>Contact</a>
                            <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight hover:bg-black/90 transition'>
                                Get for free
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header