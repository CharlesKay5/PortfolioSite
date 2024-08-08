import React from 'react'
import TypeScriptSvg from '../../../public/TypeScript.svg'

const TypeScript = () => {
  return (
    <a
            href="/"
            className="flex items-center align-middle justify-center m-2 px-2 py-1 rounded-lg bg-[#3178C63d] text-[#3178C6]"
        >
            <TypeScriptSvg width={23} />
            <p className="font-[500] px-2">TypeScript</p>
        </a>
  )
}

export default TypeScript