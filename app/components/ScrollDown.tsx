'use client';

import React from 'react'
import DownArrow from '../../public/downArrow.svg';
import styles from './ScrollDown.module.css'

const ScrollDown = () => {

    const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const currentScrollPosition = window.pageYOffset;
        const currentPageIndex = Math.floor(currentScrollPosition / viewportHeight);
        const nextPageIndex = currentPageIndex + 1;
    
        const targetScrollPosition = nextPageIndex * viewportHeight;
    
        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
        });
    };


    return (
        <div className='w-12 h-12 cursor-pointer p-4'>
            <DownArrow width={30} height={30} className={`fill-green-300 translate-y-[-6vh] absolute left-0 bottom-0 m-4 ${styles.animateDownArrow}`} onClick={handleScroll} />
            <DownArrow width={30} height={30} className={`fill-green-300 translate-y-[-6vh] absolute left-0 bottom-0 m-4 ${styles.animateDownArrowDelayed}`} onClick={handleScroll} />
        </div>
    )
}

export default ScrollDown