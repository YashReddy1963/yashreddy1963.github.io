import myimg from './img/profile.jpeg'

export default function About(){


    return(
        <>
        <section id="about" className="bg-[#02050a] h-full lg:flex lg:items-center lg:flex-col lg:h-screen lg:mb-0">
            <div className='flex flex-col items-center lg:flex-row lg:w-[700px] lg:items-center 2xl:w-[1100px]'>
                <div className="flex flex-col items-center m-3 2xl:m-0">
                    <div className="text-[#55e6a5] mt-10 lg:mt-16 font-bold text-3xl w-full 2xl:text-6xl 2xl:mt-0">
                        ABOUT ME
                    </div>
                    <div className="text-[#a2a2a2] mt-6 m-4 leading-6 2xl:text-xl">
                    Halo! I am Yash, a Computer Science student. I currently develop websites and am learning front-end technologies. While I'm not very skilled at back-end development yet, I have a strong interest in it and enjoy exploring different topics related to it.
                    </div>
                    <div className="text-[#a2a2a2] m-4 leading-6 2xl:text-xl">
                    My hobbies include photography and video editing. I capture pictures, edit them, and also try to create cinematic reels. In video editing, I work on graphically edited shorts and reels, and I also edit videos for my friends.
                    </div>
                </div>
                <img src={myimg} alt="my-image" className='w-64 m-6 shadow-box mt-7 lg:mt-24 2xl:size-96 2xl:mt-36' />
            </div>
        </section>
        </>
    )
}