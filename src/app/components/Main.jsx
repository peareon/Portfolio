export default function Main(){
    return(
        <div className="h-[calc(100vh-100px)] bg-[#e2e9e9] flex flex-row justify-evenly items-center gap-9 scrollhide">
            <div className="flex flex-col items-end basis-[calc(50%-19px)]">
                <div className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-3xl">Alejandro</div>
                <div className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl text-2xl">Peralta</div>
            </div>
            <div className="bg-slate-800 xl:h-[28%] md:h-[18%] lg:h-[22%] sm:h-[13%] h-[11%] w-[1px] md:w-[2px] bg-opacity-40 xl:mt-[30px] lg:mt-[20px] md:mt-[12px] sm:mt-[5px] mt-[3px]">
                
            </div>
            <div className="flex flex-col basis-[calc(50%-19px)]">
                <div className="text-stone-700 xl:text-xl lg:text-[0.9rem] md:text-[0.87rem] md:leading-5 sm:text-[0.67rem] sm:leading-[1rem] text-[0.6rem] leading-[]0.8rem max-w-[65%]">
                    Fullstack developer, MERN & PERN specialized, with solid knowledge on Python
                </div>
                {/* <div className="text-stone-700 xl:text-2xl sm:text-xl text-xs">
                    Some cool idea
                </div> */}
            </div>
        </div>
    )
}