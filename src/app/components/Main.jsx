export default function Main(){
    return(
        <div className="h-[calc(100vh-100px)] bg-slate-50 flex flex-row justify-between items-center gap-9">
            <div className="flex flex-col items-end basis-[calc(50%-19px)]">
                <div className="text-9xl">Alejandro</div>
                <div className="text-7xl">Peralta</div>
            </div>
            <div className="bg-slate-800 h-[30%] w-[2px] bg-opacity-40">
                
            </div>
            <div className="flex flex-col basis-[calc(50%-19px)]">
                <div className="text-stone-700">
                    Your next fullstack developer
                </div>
                <div className="text-stone-700">
                    Some cool idea
                </div>
            </div>
        </div>
    )
}