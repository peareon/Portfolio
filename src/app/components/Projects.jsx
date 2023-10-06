"use client";

import { useEffect, useRef, useState } from "react";
import {items} from '../constants/contants.js'

export default function Projects(){

    const [index, setIndex] = useState(0);

    const wheelTimeout = useRef();
    const onwheel = e => {
        // ... some code I needed ...
    
        // while wheel is moving, do not release the lock
        clearTimeout(wheelTimeout.current)
    
        // flag indicating to lock page scrolling (setTimeout returns a number)
        wheelTimeout.current = setTimeout(() => {
          wheelTimeout.current = false;
        }, 400)
    }

      useEffect(() => {
        const cancelWheel = e => wheelTimeout.current && e.preventDefault();
        document.body.addEventListener('wheel', cancelWheel, {passive:false})
        return () => document.body.removeEventListener('wheel', cancelWheel)    
      }, []);
    return(
        <div onWheel={onwheel} className="scrollhide h-[100vh] bg-slate-50 items-center gap-9 overflow-scroll snap-mandatory scroll-smooth">
            <section className="relative snap-start flex flex-col h-[100vh]">
                <div className="flex flex-row h-[70%] w-full items-center justify-evenly px-[20px] gap-[100px]">
                    <div>
                        <img src={items[index].demo} alt="image" />
                    </div>
                    <div>
                        <div>{items[index].title}</div>
                        <div>
                            {items[index].description} 
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-7">
                    {items[index].technologies.map(tech =>(
                        <div key={tech.tech} className="">{tech.tech}</div>
                    ))}
                </div>
            </section>
        </div>
    )
}