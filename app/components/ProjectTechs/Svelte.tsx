import React from 'react'
import SvelteSvg from '../../../public/Svelte.svg'

const Svelte = () => {
  return (
    <a
            href="/"
            className="flex items-center align-middle justify-center m-2 px-2 py-1 rounded-lg bg-[#ff3e003d] text-[#FF3E00]"
        >
            <SvelteSvg width={28} />
            <p className="font-[500] px-1">Svelte</p>
        </a>
  )
}

export default Svelte