import React from 'react'
import ExpressSvg from '../../../public/Express.svg'

const Express = () => {
  return (
    <a
            href="/"
            className="flex items-center align-middle justify-center m-2 pl-3 pr-2 py-1 rounded-lg bg-[#ffffff] text-[#000000]"
        >
            <ExpressSvg width={20} />
            <p className="font-[500] px-1">Express</p>
        </a>
  )
}

export default Express