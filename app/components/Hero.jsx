'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Hero() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <main className="w-full h-screen flex gap-16 justify-center items-center px-8">
            <div className="w-6/12 flex flex-col justify-center items-center gap-8">
                <h1 className="text-5xl font-bold">Wah Production</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore a itaque fugiat quisquam? Temporibus explicabo enim
                    dolorum doloremque facere est nisi consequatur. Error culpa
                    tempore laudantium animi perferendis modi quis?
                </p>
                <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="bg-sky-800 py-2 px-8 text-white rounded-md "
                >
                    Count {count}
                </button>
            </div>
            <div className="w-6/12">
                <Image
                    src={'/img2.jpg'}
                    alt="logo"
                    width={1980}
                    height={1080}
                    className="object-cover rounded-lg"
                />
            </div>
        </main>
    );
}
