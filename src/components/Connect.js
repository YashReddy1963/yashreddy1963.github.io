import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import Footer from "./Footer"

export default function Connect(){

    const[state, handleSubmit] =useForm("xbljjewo")
    if(state.succeeded){
        return (
            <>
                <div className="font-bolda text-2xl p-6 flex flex-col items-center text-[#55e6a5]">
                    Thanks for connecting!!
                </div>
                <Footer />
            </>
        )
            
    }

    return(
        <>
        <section id="skills" className="h-full pb-4 pt-4 bg-[#02050a] ">
            <div className="2xl:flex 2xl:flex-col 2xl:items-center">
                <div className="bg-[#09101a] m-4 mt-7 pb  2xl:w-[700px]">
                    <form className="ml-3 mr-3 pb-3 space-y-6 " onSubmit={handleSubmit}>
                        <div className="font-bolda text-3xl pt-5 text-white">
                        GET TOUCH ME?
                        </div>

                        <input name="name" type="text" placeholder="Your Name" className="bg-[#09101a] text-white font-bold border-2 border-[#55e6a5] p-5 mt-3 w-full focus:outline-none focus:text-white" required/>
                        <ValidationError prefix='Name' field='name' errors={state.errors}/>

                        <input name="email" type="text" placeholder="Your Email" className="bg-[#09101a] text-white font-bold border-2 border-[#55e6a5] p-5 mt-3 w-full focus:outline-none focus:text-white " required/>
                        <ValidationError prefix='Email' filed='email' errors={state.errors} />

                        <input name="subject" type="text" placeholder="Subject" className="bg-[#09101a] font-bold border-2 border-[#55e6a5] p-5 mt-3 w-full text-white focus:outline-none focus:text-white " required/>
                        <ValidationError prefix='Subject' filed='subject' errors={state.errors} />

                        <textarea name="message" type="text" placeholder="Message" id="" className="bg-[#09101a] border-2 font-bold border-[#55e6a5] p-5 mt-3 w-full h-72 text-white focus:outline-none focus:text-white " required></textarea>
                        <ValidationError prefix='Message' filed='message' errors={state.errors} />
                        
                        <button className="bg-[#55e6a5] w-40 text-black p-5 flex flex-col items-center mt-8 hover:bg-[#141c27] hover:text-white transition-all duration-300 ease-in-out" type="submit" disabled={state.submitting} >
                            submit now
                        </button>
                    </form>
                    {/*Social accounts*/}
                    <Footer />
                </div>
            </div>
        </section>
        </>
    )
}