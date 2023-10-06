import { experience } from "../constants/contants.js";

export default function Experience(){
    return(
        <div className="h-[100vh] bg-slate-50 relative">
            <div className="absolute bg-black w-2 h-[90%] m-auto right-0 left-0"></div>
            <div className="flex px-80 h-[100%] flex-col items-center justify-evenly">
                {experience.map(exp =>(
                    <div key={exp.job} className={`relative min-h-[180px] ${exp.position}`}>
                        <img src={exp.bg} alt="bg" />
                        <div className="absolute">{exp.role}</div>
                        <div className="hidden">
                            {exp.tasks.map(task =>(
                                <div key={task} className="bulletpoint">{task}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}