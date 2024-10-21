import React from "react"
export default function Projects(){

    return(
        <>
        <section id="projects" className="bg-[#02050a] h-full lg:h-screen ">
            <div className="flex flex-col items-center pb-7">
                <div className="text-[#55e6a5] mt-10 font-bold text-3xl 2xl:text-7xl">
                    PROJECTS
                </div>
                <div class="bg-[#09101a] mt-2 w-24 h-1 rounded-lg 2xl:mt-4 2xl:w-32">
                </div>
                <div class="text-white text-lg mt-3 font-medium 2xl:text-2xl">
                    My recent <span class="text-[#55e6a5]">work</span>
                </div>
            </div>

                {/*Projects cards*/}
                <div className="flex flex-col items-center lg:justify-center lg:flex-row lg:w-full lg:space-x-8 pb-5 2xl:pb-5 2xl:mt-12">
                    <div class=" flex flex-col mt-6 bg-[#141c27] shadow-md bg-clip-border rounded-xl w-72 lg:h-[350px]">
                        <div class="p-6">
                        <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#55e6a5]">
                            AcademicEase
                        </h5>
                        <p class="text-white font-sans leading-relaxed font-light">
                            AcademicEase is a system with dual login roles: admin and student. Admins can add, edit, and delete records, requiring a password for authentication. Students, on the other hand, can access and review their own records. 
                        </p>
                        </div>
                        <div class="p-6 pt-0">
                        <a href="https://github.com/YashReddy1963/AcademicEase">
                            <button
                                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#09101a] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                View
                            </button>
                            </a>
                        </div>
                    </div>

                    <div class=" flex flex-col mt-6 bg-[#141c27] shadow-md bg-clip-border rounded-xl w-72 lg:h-[350px] ">
                        <div class="p-6">
                        <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#55e6a5]">
                            Portfolio
                        </h5>
                        <p class="text-white font-sans leading-relaxed font-light">
                        This is the my personal website that I created using TailwindCSS and React.js
                        </p>
                        </div>
                        <div class="p-6 pt-0">
                        <a href="https://github.com/YashReddy1963/AcademicEase">
                            <button
                                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#09101a] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                View
                            </button>
                            </a>
                        </div>
                    </div>

                    <div class=" flex flex-col mt-6 bg-[#141c27] shadow-md bg-clip-border rounded-xl w-72 lg:h-[350px]">
                        <div class="p-6">
                        <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#55e6a5]">
                            Chitra
                        </h5>
                        <p class="text-white font-sans leading-relaxed font-light">
                        Chitra (चित्र) in marathi means a Picture. Chitra is an attempt at making a FOSS alternative for the popular Cleanshot X Screenshot tool in the MacOS Ecosystem.
                        </p>
                        </div>
                        <div class="p-6 pt-0">
                        <a href="https://github.com/YashReddy1963/chitra">
                            <button
                                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#09101a] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                View
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}