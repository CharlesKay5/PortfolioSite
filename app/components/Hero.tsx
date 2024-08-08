"use client";

import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import DavidHead from './DavidHead';
import ScrollDown from './ScrollDown';
import { ReactTyped } from 'react-typed';
import Github from '../../public/GithubGreen.svg';
import Email from '../../public/Email.svg';
import LinkedIn from '../../public/LinkedIn.svg';
import { motion } from 'framer-motion';

const HeroSection = () => {

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<section id='section-1' className='flex flex-col h-screen w-screen justify-center items-center z-50 relative'>
			<div className="flex flex-row align-top justify-center items-start h-full w-full z-">
				<div className='flex flex-col items-center justify-center'>
					<div className="flex flex-col-reverse xl:flex-row justify-center items-center h-[90vh] xl:h-screen ">
						<div className='min-w-[400px] cursor-default select-none xl:scale-100 scale-90 -mt-10 xl:mt-0'>
							<p className={`ml-2 py-2 text-lg text-green-300 font-[500]`}>Hi, my name is</p>
							<ReactTyped
								strings={["Charles Kay."]}
								startDelay={1000}
								typeSpeed={200}
								className={`text-6xl font-bold hover:text-green-200 duration-500`}
							/>
							<h2 className='text-2xl ml-2 pt-3 pb-1 opacity-90 font-[500]'>I'm a Front End Developer</h2>
							<p className='ml-2 mb-2 opacity-80'>Based in Sydney, Australia</p>
							<div className='flex justify-start'>
								<a href='https://github.com/charleskay5' className='flex p-4 mt-2 mb-2 mr-2 bg-neutral-900 w-full rounded-3xl justify-start hover:bg-neutral-800'>
									<Github width={22}/>
									<p className='ml-2 font-[500]'>Github</p>
								</a>
								<a href='https://www.linkedin.com/in/charles-kay-258753321' className='flex p-4 m-2 bg-neutral-900 w-full rounded-3xl items-center justify-center hover:bg-neutral-800'>
									<LinkedIn width={25}/>
									<p className='ml-2 font-[500]'>LinkedIn</p>
								</a>
								<a href='mailto:charleskay5@outlook.com' className='flex p-4 m-2 bg-neutral-900 w-full rounded-3xl items-center justify-center hover:bg-neutral-800'>
									<Email width={20}/>
									<p className='ml-2 font-[500]'>Email</p>
								</a>
							</div>
						</div>
						<motion.div
							className=''
							initial={isMobile ? { height: "0%" } : { width: "0%" }}
                			whileInView={isMobile ? { height: "500px", width: "100%" } : { width: "100%" }}
							transition={{ duration: 0.8, delay: 5 }}
							viewport={{ once: true }}
						>
							<motion.div
								className=''
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 5.5 }}
								viewport={{ once: true }}
							>
								<DavidHead />
							</motion.div>
						</motion.div>
					</div>
					<motion.div className='relative -left-2 hidden xl:visible'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 5 }}
						viewport={{ once: true }}
					>
						<ScrollDown />
					</motion.div>
				</div>
			</div>

		</section>
	);
}

export default HeroSection;
