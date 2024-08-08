import React from 'react'
import NextSvg from '../../../public/NextIcon.svg'

const Next = () => {
  return (
    <a
            href="/"
            className="flex items-center align-middle justify-center m-2 px-2 py-1 rounded-lg bg-[#ffffff] text-[#000000]"
        >
            <NextSvg width={22} />
            <p className="font-[500] px-1">Next.js</p>
        </a>
  )
}

export default Next