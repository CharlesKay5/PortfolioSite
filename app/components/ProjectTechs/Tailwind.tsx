import React from 'react'
import TailwindSvg from '../../../public/TailwindIcon.svg'

const Tailwind = () => {
  return (
    <a
            href="/"
            className="flex items-center align-middle justify-center m-2 px-2 py-1 rounded-lg bg-[#44A8B33d] text-[#44A8B3]"
        >
            <TailwindSvg width={28} />
            <p className="font-[500] px-1">Tailwind</p>
        </a>
  )
}

export default Tailwind