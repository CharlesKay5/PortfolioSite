import React from 'react'
import ReactSvg from '../../../public/ReactIcon.svg'

const ReactTech = () => {
  return (
    <a
            href="/"
            className="flex items-center align-middle justify-center m-2 px-2 py-1 rounded-lg bg-[#53c0de3d] text-[#53C1DE]"
        >
            <ReactSvg width={28} />
            <p className="font-[500] px-1">React</p>
        </a>
  )
}

export default ReactTech