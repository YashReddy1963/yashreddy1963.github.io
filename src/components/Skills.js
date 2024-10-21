import React from "react"
import { useState, useEffect, useRef } from "react"
export default function Skills(){

    const [isVisible, setIsVisible] = useState(false)
    const skillsRef = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries)=>{
                const entry = entries[0]

                if(entry.isIntersecting){
                    setIsVisible(true)
                    observer.unobserve(skillsRef.current)
                }
            },{threshold: 0.5}
        )

        if(skillsRef.current){
            observer.observe(skillsRef.current)
        }

        return()=>{
            if(skillsRef.current){
                observer.unobserve(skillsRef.current)
            }
        }
    },[])

        return(
            <>
            <section id="skills" className="bg-[#09101a] h-screen">
                
                <div className="flex flex-col items-center">
                <div className="text-[#55e6a5] mt-10 font-bold text-3xl 2xl:text-7xl">
                    EDUCATION & SKILLS
                </div>
                <div class="bg-[#02050a] mt-1 w-40 h-1 rounded-lg 2xl:w-52 2xl:mt-2">
                </div>
                <div class="text-white text-lg mt-3 font-medium 2xl:text-2xl">
                    What I <span class="text-[#55e6a5]">know</span>
                </div>
                </div>

                {/*Education part*/}
                <div className="flex flex-col items-center w-full">
                <div className="lg:w-[700px] lg:space-y-16">
                        <div className="m-4  font-bold text-[#a2a2a2] 2xl:text-xl 2xl:mt-12">
                            I am currently pursuing a degree in Computer Science Engineering from a Tier-3 college, having previously completed a diploma in my hometown before entering the field of engineering.
                        </div>

                        {/*Skills part*/}
                        <div ref={skillsRef}>
                            <div className="ml-2 mr-2 mt-5 font-extrabold text-white bg-[#141c27]">
                                <div className="flex flex-col items-center p-4 2xl:p-7 2xl:text-3xl">
                                    HTML 
                                </div> 
                                <div className={`bg-[#55e6a5] h-1 transition-width duration-700 ${isVisible ? "w-75 animate-expandBar75" : "w-0"}`}>
                                </div>
                            </div>
                            <div className="ml-2 mr-2 mt-5 font-extrabold text-white bg-[#141c27]">
                                <div className="flex flex-col items-center p-4 2xl:p-7 2xl:text-3xl">
                                    Python
                                </div>
                                <div className={`bg-[#55e6a5] h-1 transition-width duration-700 ${isVisible ? "w-85 animate-expandBar85" : "w-0"}`}>
                                </div>
                            </div>
                            <div className="ml-2 mr-2 mt-5 font-extrabold text-white bg-[#141c27]">
                                <div className="flex flex-col items-center p-4 2xl:p-7 2xl:text-3xl">
                                    TailwindCSS
                                </div>
                                <div className={`bg-[#55e6a5] h-1 transition-width duration-700 ${isVisible ? "w-80 animate-expandBar80" : "w-0"}`}>
                                </div>
                            </div>
                            <div className="ml-2 mr-2 mt-5 font-extrabold text-white bg-[#141c27]">
                                <div className="flex flex-col items-center p-4 2xl:p-7 2xl:text-3xl">
                                    JavaScript
                                </div>
                                <div className={`bg-[#55e6a5] h-1 transition-width duration-700 ${isVisible ? "w-75 animate-expandBar75" : "w-0"}`}>
                                </div>
                            </div>
                            <div className="ml-2 mr-2 mt-5 font-extrabold text-white bg-[#141c27]">
                                <div className="flex flex-col items-center p-4 2xl:p-7 2xl:text-3xl">
                                    React.JS
                                </div>
                                <div className={`bg-[#55e6a5] h-1 transition-width duration-700 ${isVisible ? "w-70 animate-expandBar70" : "w-0"}`}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            </>
        )
}