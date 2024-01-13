'use client';

import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Navbar(){

    const [toggle, setToggle] = useState(false);

    return(
        <nav className="flex flex-row h-[100px] px-[20px] justify-between bg-slate-50 pr-[40px]">
            <div className="items-center flex w-[170px]"><img className="h-[170px] w-[170px]" src="/images/logo.png" alt="" /></div>
            <div className="flex items-center">
                <ul className="sm:flex hidden flex-1 gap-10 text-gray-600 text-[16px]">
                    <li><a href="#projects" className="hover:text-gray-950 hover:text-[17px]">Projects</a></li>
                    <li><a href="#experience" className="hover:text-gray-950 hover:text-[17px]">Experience</a></li>
                    <li><a href="#contacto" className="hover:text-gray-950 hover:text-[17px]">Contact</a></li>
                    <li><a href="/CV.pdf" download={true} className="hover:text-gray-950 hover:text-[17px]">Resume</a></li>
                </ul>
            </div>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <div className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}>
                    {toggle ? <IoClose /> : <CiMenuFries />}
                </div>
                <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                    <ul className="list-none flex justify-end items-start flex-col gap-4 text-gray-600 text-[16px]">
                        <li><a href="#projects" className="hover:text-gray-950 hover:text-[17px]">Projects</a></li>
                        <li><a href="#experience" className="hover:text-gray-950 hover:text-[17px]">Experience</a></li>
                        <li><a href="#contacto" className="hover:text-gray-950 hover:text-[17px]">Contact</a></li>
                        <li><a href="/CV.pdf" download={true} className="hover:text-gray-950 hover:text-[17px]">Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}