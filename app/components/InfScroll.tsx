'use client';
import React, { use, useEffect, useState } from 'react'
import Card from './Card'
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'framer-motion';

const InfScroll = () => {

    const images = [
        "/Github.svg",
        "/JavaScript.png",
        "/React.svg",
        "/TypeScript.png",
        "/Next.js.png",
        "/Tailwind.svg",
        "/Node.svg",
        "/Git.png",
        "/SQL.svg"
    ];

    const FAST_DURATION = 50;
    const SLOW_DURATION = 75;

    const [duration, setDuration] = useState(FAST_DURATION);

    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

        if (mustFinish) {

            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender)
                }
            });

        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            });
        }
        return controls?.stop;
    }, [xTranslation, width, duration, rerender]);


    return (
        <div className='py-8 translate-x-[25%]'>
            <motion.div
                className=' flex gap-4'
                ref={ref}
                style={{ x: xTranslation }}
                onHoverStart={() => {setMustFinish(true); setDuration(SLOW_DURATION);}}
                onHoverEnd={() => {setMustFinish(true); setDuration(FAST_DURATION)}}
            >
                {[...images, ...images].map((item, idx) => (
                    <Card image={item} key={idx} />
                ))}
            </motion.div>
        </div>
    )
}

export default InfScroll