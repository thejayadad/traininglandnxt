import React from "react";
import Link from "next/link";

const routes = [
    { name: 'Program', id: 'program'},
    { name: 'Gallery', id: 'gallery'},
    { name: 'Calculator', id: 'calculator'},

]


const HeaderLinks = () => {
    return(
        <div className="space-x-4">
            {routes.map((route) => (
                <Link
                href={`#${route.id}`}
                className="nav"
                >
                {route.name}
                </Link>
            ))}
        </div>
    )
}

export default HeaderLinks