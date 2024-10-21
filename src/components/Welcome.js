import React from "react"
import { useEffect, useState } from "react"
import myimg from './img/my-img.jpeg'


export default function Welcome(){

    const words=['Developer..', 'Photographer..', 'Video Editor..']
    const colors=['lightgreen', 'lightpink', 'lightblue']

    const [currentWord, setCurrentWord] = useState(words[0])//To set the current word
    const [currentColor, setCurrentColor] = useState(colors[0])//To set current color
    const [letterCount, setLetterCount] = useState(1)//For counting letters
    const [x, setX] = useState(1)//To move underscore forward and backword
    const [waiting, setWaiting] = useState(false)//To pause while swithcing to another word
    const [visible, setVisible] = useState(true)//Making the cursor blink

    useEffect(()=>{
        //Animation effect
        const typingInterval = setInterval(()=>{
            if(!waiting){
                
                //Moving to next word
                if(letterCount === 0){
                    setWaiting(true)
                    setTimeout(()=>{
                        //Getting the next word
                        const nextIndex = (words.indexOf(currentWord) + 1) % words.length
                        setCurrentColor(colors[nextIndex])
                        setCurrentWord(words[nextIndex])
                        setX(1)
                        setLetterCount(1)
                        setWaiting(false)
                    },1000)
                }
                //Deleting the existing word
                else if(letterCount === currentWord.length + 1){
                    setWaiting(true)
                    setTimeout(()=>{
                        setX(-1)
                        setLetterCount(letterCount - 1)
                        setWaiting(false)
                    },1000)
                }
                //Writing the current word
                else{
                    setLetterCount(letterCount + x)
                }
            }
        },120)

        //Cursor blink
        const cursorBlinkInterval = setInterval(()=>{
            setVisible((v)=>!v)
        },400)

        //Cleaning the interals on component unmount
        return()=>{
            clearInterval(typingInterval)
            clearInterval(cursorBlinkInterval)
        }
    },[currentWord, letterCount, waiting, x])


    return(
        <>
        <section id="home" className="bg-[#09101a] h-screen lg:flex lg:flex-col lg:items-center">

            <div className="2xl:flex 2xl:flex-row 2xl:justify-center 2xl:w-[1250px] 2xl:mt-36 2xl:space-x-8">
                <div className=" p-2 lg:w-[700px] lg:space-y-10  flex flex-col">        
                    <h1 className="text-white text-[45px] mt-24 font-black 2xl:text-7xl">HI, I'M YASH! Creative</h1>    
                
                    {/*Text animation*/}
                    <div className="console-container w-full mt-4 text-4xl" style={{height: '50px'}}>
                        <span id="text" style={{color:currentColor}} className="font-medium">{currentWord.substring(0, letterCount)}
                        </span>
                        <span className={`text-[#55e6a5] bg-[#55e6a5] console-underscore ${visible ? '' : 'hidden'}`}>
                        &#95;
                        </span>    
                    </div>

                    <div className="mt-8 text-[#a2a2a2] leading-7 font-bold lg:w-[700px] 2xl:text-xl 2xl:mt-24">
                        I'm a frontend developer with expertise in React.js, TailwindCSS, and other modern web technologies to craft sleek, responsive user interfaces. My focus is on creating clean, efficient code and visually appealing web experiences. In my free time, I enjoy video editing and photography as hobbies.    
                    </div>
                    <button className="bg-[#55e6a5] w-40 text-black p-5 flex flex-col items-center mt-10 font-extrabold hover:bg-[#141c27] hover:text-white transition-all duration-300 ease-in-out 2xl:mt-10">
                    Download CV
                </button>
                </div>
                <img src={myimg} alt="my-image" className=' hidden shadow-box 2xl:block m-0 mt-20' />
            </div>
        </section>
        </>
    )
}