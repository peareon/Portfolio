export default function Main(){
    return(
        <div className="h-[calc(100vh-100px)] bg-[#e2e9e9] flex flex-row justify-between items-center gap-9 scrollhide">
            <div className="flex flex-col items-end basis-[calc(50%-19px)]">
                <div className="xl:text-9xl lg:text-7xl md:text-6xl text-3xl">Alejandro</div>
                <div className="xl:text-7xl lg:text-6xl md:text-5xl text-2xl">Peralta</div>
            </div>
            <div className="bg-slate-800 md:h-[18%] lg:h-[28%] h-[6%] w-[1px] md:w-[2px] bg-opacity-40">
                
            </div>
            <div className="flex flex-col basis-[calc(50%-19px)]">
                <div className="text-stone-700 xl:text-2xl sm:text-xl text-xs">
                    Your next fullstack developer
                </div>
                {/* <div className="text-stone-700 xl:text-2xl sm:text-xl text-xs">
                    Some cool idea
                </div> */}
            </div>
        </div>
    )
}