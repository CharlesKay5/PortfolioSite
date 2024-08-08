import React from 'react'
import PuppeteerSvg from '../../../public/Puppeteer.svg'

const Puppeteer = () => {
  return (
    <a
            href="/"
            className="flex items-center align-middle justify-center m-2 px-2 py-1 rounded-lg bg-[#00d8a23d] text-[#00D8A2]"
        >
            <PuppeteerSvg width={28} />
            <p className="font-[500] px-1">Puppeteer</p>
        </a>
  )
}

export default Puppeteer