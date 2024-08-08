'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

interface CardProps {
    image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {

    const [showOverlay, setShowOverlay] = useState(false);
    const imageName = image?.split('/')?.pop()?.split('.')[0];

    return (
        <motion.div className='relative overflow-hidden h-[100px] min-w-[100px] xl:h-[220px] xl:min-w-[220px] rounded-xl flex justify-center items-center '
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
                {showOverlay && (
                    <motion.div className='absolute inset-0 z-10 flex justify-center items-center '
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full' />

                        <motion.h1 className='bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5vh]'
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            exit={{ y: 10 }}
                        >
                            <span className='text-black cursor-default'>{imageName}</span>
                            {/* <Arrow className="h-5 w-5" /> */}
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
            <Image src={image} alt={image} fill className='object-cover' />
        </motion.div>
    )
}

export default Card