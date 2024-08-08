import React from "react";
import NodeSvg from '../../../public/Node.svg';

const Node = () => {
    return (
        <a
            href="/"
            className="flex items-center align-middle justify-center m-2 px-2 py-1 rounded-lg bg-[#59A8463d] text-[#59A846]"
        >
            <NodeSvg width={28} />
            <p className="font-[500] px-1">Node.js</p>
        </a>
    );
};

export default Node;
