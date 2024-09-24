import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link
        href={'/'}
        className="flex items-center"
        >
        <Image
        src='/logo.png'
        height={100}
        width={100}
        alt="Logo"
        /><span className="hidden lg:block font-extrabold">The TrainingLand</span>
        </Link>
    )
}

export default Logo