import React from 'react';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="w-full flex justify-around items-center p-2 bg-sky-700 text-white">
            <Image
                src={'/wahprod.png'}
                alt="logo"
                width={60}
                height={60}
                className="filter invert"
            />
            <nav className="w-fit">
                <ul className="flex gap-8 text-lg">
                    <li className="nav-item-hover ">Home</li>
                    <li className="nav-item-hover ">About</li>
                    <li className="nav-item-hover ">Services</li>
                    <li className="nav-item-hover ">Contact</li>
                </ul>
            </nav>
        </header>
    );
}
