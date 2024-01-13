import { experience } from "../constants/contants.js";


export default function Experience(){
    return(
        <div id="experience" className="bg-[#F1F1F1] relative h-[100vh] bg-opacity-[1] md:py-[50px] sm:py-[100px] py-[125px]">
            <div className="flex lg:px-40 md:px-20 px-8 h-[100%] flex-col md:justify-between justify-center">
                <h2 className="flex justify-center md:text-[26px] text-[17px] pb-11 font-Hedvig"> Job Experience </h2>
                {experience.map(exp =>(
                    <div key={exp.job} className={`relative lg:h-[125px] sm:h-[92px] md:h-[110px] md:mb-[0px] h-[80px] w-[80%] ${exp.position}`}>
                        <div className={`unveil font-Hedvig text-gray-50 text-outline-stroke absolute bg-cover bg-${exp.imgpos} w-[100%] h-[100%] bg-${exp.bg} bg-opacity-10 bg-center z-[2] md:text-[20px] text-[17px] flex justify-center items-center font-semibold`}>
                            {exp.role}
                        </div>

                        <div className={`flex justify-evenly items-center relative h-[100%] w-[100%] before:content-[' '] before:block before:absolute 
                        before:left-0 before:top-0 before:w-[100%] before:h-[100%] 
                        before:opacity-[0.2] before:bg-${exp.bg} before:bg-cover before:bg-no-repeat before:bg-center`}>
                            <div className="relative lg:text-[22px] md:text-[20px] text-[14px] font-medium font-Hedvig ">{exp.role2}</div>
                            <div className="relative md:w-[55%] w-[60%]">
                                {exp.tasks.map(task =>(
                                    <div key={task} className="bulletpoint lg:text-[14px] md:text-[13px] sm:text-[12px] text-[8.5px] text-start">{task}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}