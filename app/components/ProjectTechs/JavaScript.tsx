import React from "react";
import Image from "next/image";

const JavaScript = () => {
    return (
        <a
            href="/"
            className="flex items-center align-middle justify-center m-2 px-2 py-1 rounded-lg bg-[#f7df1e3d] text-[#f7df1e]"
        >
            <Image
                width={28}
                height={25}
                src={"/JavaScript.png"}
                alt="JavaScript Logo"
                className="p-1"
            />
            <p className="font-[500] px-1">JavaScript</p>
        </a>
    );
};

export default JavaScript;
