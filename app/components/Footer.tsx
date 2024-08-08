"use client";
import React, { useEffect, useRef, useState } from "react";
import InfScroll from "./InfScroll";
import Github from "../../public/GithubGreen.svg";
import LinkedIn from "../../public/LinkedIn.svg";
import Email from "../../public/Email.svg";
import Image from "next/image";
import Me from "../../public/Me.jpg";
import { motion } from "framer-motion";
import CreationAdam from "../../public/CreationAdam-cropped.svg";

const Footer = () => {
    const infScrollRef = useRef(null);
    const [bottomHeight, setBottomHeight] = useState(0);

    useEffect(() => {
        if (infScrollRef.current) {
            const height =
                (infScrollRef.current as HTMLElement)?.offsetHeight || 0;
            setBottomHeight(height * 3);
        }
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
    };

    return (
        <section
            id="section-3"
            className="w-screen h-screen flex justify-center cursor-default pt-8 relative"
        >
            <CreationAdam className="invert opacity-10 w-full h-full absolute top-[20%]" />
            <div className="flex flex-col justify-start items-center w-[90vw] xl:w-[30vw] pb-28 z-10">
                <motion.h2
                    className="text-4xl xl:text-6xl font-bold py-3 text-center hover:text-green-200"
                    {...fadeIn}
                >
                    Let&apos;s work together!
                </motion.h2>
                <motion.p
                    className="text-2xl text-center text-green-300 my-2"
                    {...fadeIn}
                >
                    Please contact me if you&apos;re interested :){" "}
                </motion.p>
                <motion.p className="text-center" {...fadeIn}>
                    Thanks in advance!
                </motion.p>

                <motion.div className="flex justify-center pt-6" {...fadeIn}>
                    <Image
                        width={1000}
                        height={1000}
                        alt="Picture of Charles Kay"
                        src={Me}
                        className="rounded-full w-[225px] h-[225px] xl:w-[375px] xl:h-[375px] object-cover hover:scale-105 duration-500"
                    />
                </motion.div>
                <h2 className="text-xl font-bold mt-2">Charles Kay</h2>
                <div className="flex justify-start">
                    <a
                        href="https://github.com/charleskay5"
                        className="flex p-4 mt-2 mb-2 mr-2 bg-neutral-900 w-full rounded-3xl justify-start hover:bg-neutral-800"
                    >
                        <Github width={22} />
                        <p className="ml-2 font-[500]">Github</p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/charles-kay-258753321"
                        className="flex p-4 m-2 bg-neutral-900 w-full rounded-3xl items-center justify-center hover:bg-neutral-800"
                    >
                        <LinkedIn width={25} />
                        <p className="ml-2 font-[500]">LinkedIn</p>
                    </a>
                    <a
                        href="mailto:charleskay5@outlook.com"
                        className="flex p-4 m-2 bg-neutral-900 w-full rounded-3xl items-center justify-center hover:bg-neutral-800"
                    >
                        <Email width={20} />
                        <p className="ml-2 font-[500]">Email</p>
                    </a>
                </div>
                <div
                    ref={infScrollRef}
                    className="opacity-70 z-20"
                >
                    <InfScroll />
                </div>
            </div>
        </section>
    );
};

export default Footer;
