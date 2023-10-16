"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function AvatarWorks() {

    return (
        
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="bottom-0 left-0 hidden md:inline-block md:absolute -z-20">
        <div className="flex flex-col items-baseline mt-10 gap-0 md:flex-row">
            <Image src="/assets/html-logo.png" alt="Avatar works" width="60" height="60" className="w-fit mb-14 ml-8" />
            <Image src="/assets/css-logo.png" alt="Avatar works" width="60" height="60" className="w-fit mb-14 ml-8" />
            <Image src="/assets/js-logo.png" alt="Avatar works" width="60" height="60" className="w-fit mb-14 ml-8" />
            <Image src="/assets/react-logo.png" alt="Avatar works" width="60" height="60" className="w-fit mb-14 ml-8" />
            <Image src="/assets/node-logo.png" alt="Avatar works" width="60" height="60" className="w-fit mb-14 ml-8" />
            <Image src="/assets/typescript-logo.svg" alt="Avatar works" width="80" height="80" className="w-fit mb-14 ml-8" />
            <Image src="/assets/redux-logo.png" alt="Avatar works" width="60" height="60" className="w-fit mb-14 ml-8" />
            <Image src="/assets/next-logo.png" alt="Avatar works" width="60" height="60" className="w-fit mb-14 ml-8" />
            <Image src="/assets/tailwind.png" alt="Avatar works" width="90" height="90" className="w-fit mb-14 ml-8" />
        </div>
        </motion.div>
    )
}
