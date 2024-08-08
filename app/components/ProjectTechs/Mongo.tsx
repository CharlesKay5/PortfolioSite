import React from 'react'
import MongoSvg from '../../../public/Mongo.svg'

const Mongo = () => {
  return (
    <a
            href="/"
            className="flex items-center align-middle justify-center m-2 px-1 py-1 rounded-lg bg-[#449C453d] text-[#449C45]"
        >
            <MongoSvg width={28} />
            <p className="font-[500] -pl-1 pr-2">MongoDB</p>
        </a>
  )
}

export default Mongo