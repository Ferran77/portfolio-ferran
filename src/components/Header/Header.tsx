"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'

export function Header() {
    return (
        <div className='absolute z-20 inline-block ml-5 w-full top-5 md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container justify-between mx-auto md:flex">
                    <Link href="/">
                        <h1 className="my-0 mx-4 text-3xl text-center text-white md:text-lef">Ferrán
                            <span className="text-secondary">Developer</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center mr-14 gap-7">
                        {socialNetworks.map(({ logo, src }) => (
                            <Link key={src} href={src} target="_blank" className="transition-all duration-300 hover:text-secondary">
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
