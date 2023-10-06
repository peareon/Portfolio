export default function Navbar(){
    return(
        <nav className="flex flex-row h-[100px] px-[20px] justify-between bg-slate-50">
            <div className="items-center flex">Logo</div>
            <div className="flex items-center">
                <ul className="sm:flex hidden flex-1 gap-10 text-black">
                    <li><a href="">Projects</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
            <div className="flex sm:hidden flex-1 justify-end items-center">
                Hola
            </div>
        </nav>
    )
}