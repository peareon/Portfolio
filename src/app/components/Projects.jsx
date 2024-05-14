"use client";

import { useEffect, useRef, useState } from "react";
import {items} from '../constants/contants.js'
import { FaGithub, FaArrowLeft, FaArrowRight} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function Projects(){

    const [index, setIndex] = useState(0);
    
    // const lock = useRef();
    // lock.current = true;
    // const wheelTimeout = useRef();

    function setIndexB(index){
        setIndex(index);
    }
    function setIndexAL(){
        if (index != 0){
            setIndex(index-1)
        }
        
    }
    function setIndexAR(){
        if (index < 3){
            setIndex(index+1)
        }
    }

    // const onwheel = e => {
    //     // ... some code I needed ...
    //     // while wheel is moving, do not release the lock

    //     if (e.deltaY < 0){
    //         if(index < 1){
    //             lock.current = false;
    //             setIndex(0);
    //         }
    //         else{
    //             lock.current = true;
    //             setIndex(index-1);
    //         }
    //     }
    //     else if (e.deltaY > 0){
    //         if(index > 2){
    //             lock.current = false;
    //             setIndex(3);
    //         }
    //         else{
    //             lock.current = true;
    //             setIndex(index+1);
    //         }
            
    //     }
    //     clearTimeout(wheelTimeout.current)
    
    //     wheelTimeout.current = setTimeout(() => {
    //       wheelTimeout.current = false;
    //     }, 2000)
    // }

    //   useEffect(() => {
    //     const cancelWheel = e => lock.current && wheelTimeout.current && e.preventDefault();
    //     document.getElementsByClassName("custom-scroll")[0].addEventListener('wheel', cancelWheel, {passive:false})
    //     return () => document.body.removeEventListener('wheel', cancelWheel)     
    //   }, []);
    return(
        <div id="projects" /*onWheel={onwheel}*/ className={`h-[100vh] scrollhide items-center overflow-scroll snap-mandatory scroll-smooth custom-scroll bg-[#808080] bg-opacity-[.2] scrollhide`}>
            <section className="relative snap-start flex flex-col h-[100%]">
                <div className="self-center mt-[2%] text-[17px] md:text-[20px] lg:text-[26px]">Projects</div>
                <div className={`flex flex-row h-[70%] w-full items-center justify-around px-[20px] gap-[100px] sm:mt-[-25px] md:mt-[5px] mt-[25px`}>
                    <div className="sm:mr-[-60px] md:mr-[-80px] sm:ml-[50px] md:ml-[40px] xl:ml-[105px] cursor-pointer" onClick={() => setIndexAL()}><FaArrowLeft /></div>
                    <div className="flex md:flex-row flex-col h-[68%] w-full items-center justify-around px-[20px] gap-[100px] md:mt-[15px] mt-[25px]">
                        <div className="md:mr-[-75px] sm:m-0 sm:ml-0  sm:p-0 sm:w-auto w-[152%]">
                            <video key={items[index].title} src={items[index].demo} autoPlay muted loop className="xl:w-[740px] lg:w-[540px] md:w-[420px] sm:w-[340px] animate-presentation"></video>
                        </div>
                        <div key={items[index].id} className="md:h-[285px] sm:h-[175px] h-[215px] flex flex-col justify-evenly md:max-w-[30%] w-[70%] sm:mt-[-50px] md:mt-0 mt-[-100px] animate-presentation">
                            <div className="lg:mt-[0] lg:pb-[25px] sm:mt-[35px] mt-[30px] pb-[7x] font-Garamond lg:text-[20px] md:text-[15px] text-center">{items[index].title}</div>
                            <div className="text-justify frame m-auto lg:mt-0 py-[25px] px-[25px] outline-[2px] outline-offset-[-2px] outline outline-[#FFF] xl:text-[15px] lg:text-[13px] md:text-[10px] text-[11px] hidden sm:block">
                                {items[index].description} 
                            </div>
                            <div className="flex flex-row gap-[20px] pt-[12px] self-center min-w-[60%] justify-center">
                                <a href={items[index].github} target="_blank"><FaGithub/></a>
                                {items[index].website ? <a href={items[index].website} target="_blank"><CgWebsite/></a> : null}
                            </div>
                        </div>
                    </div>
                    <div className="sm:ml-[-60px] md:ml-[-80px] sm:mr-[50px] md:mr-[40px] xl:mr-[105px] cursor-pointer" onClick={() => setIndexAR()}><FaArrowRight /></div>
                </div>
                <div key={items[index].title} className="flex flex-row items-center justify-center md:gap-7 gap-3 lg:w-[20%] md:w-[25%] sm:w-[30%] w-[37%] m-auto md:mt-[-20px] sm:mt-[30px] mt-[8px] py-[15px] px-[5px]  lg:text-[22px] md:text-[19px] text-[15px] animate-presentation">
                    {items[index].technologies.map(tech =>(
                        <div key={tech.tech} className="">{tech.tech}</div>
                    ))}
                </div>
                <div className="flex flex-row self-center gap-7 absolute md:bottom-12 bottom-10">
                        <span className={`h-[7px] w-[7px] ${index == 0 ? "bg-black": "bg-slate-400" } rounded-[50%] inline cursor-pointer`}><button className="inline h-[7px] w-[7px] absolute" onClick={() => setIndexB(0)}></button></span>
                        <span className={`h-[7px] w-[7px] ${index == 1 ? "bg-black": "bg-slate-400" } rounded-[50%] inline cursor-pointer`}><button className="inline h-[7px] w-[7px] absolute" onClick={() => setIndexB(1)}></button></span>
                        <span className={`h-[7px] w-[7px] ${index == 2 ? "bg-black": "bg-slate-400" } rounded-[50%] inline cursor-pointer`}><button className="inline h-[7px] w-[7px] absolute" onClick={() => setIndexB(2)}></button></span>
                        <span className={`h-[7px] w-[7px] ${index == 3 ? "bg-black": "bg-slate-400" } rounded-[50%] inline cursor-pointer`}><button className="inline h-[7px] w-[7px] absolute" onClick={() => setIndexB(3)}></button></span> 
                </div>
                
            </section>
        </div>
    )
                    }