import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"

export default function Footer(){
    return(
        <>
            <div className="bg-[#141c27] flex flex-row justify-center p-2 space-x-3">
                <a href="https://github.com/YashReddy1963" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} className="text-[#55e6a5] hover:bg-[#141c27] hover:text-white transition-all duration-300 ease-in-out"/>
                </a>
                <a href="https://www.linkedin.com/in/yash-m-81371624a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} className="text-[#55e6a5] hover:bg-[#141c27] hover:text-white transition-all duration-300 ease-in-out"/>
                </a>
                <a href="https://t.me/Yashreddy1963" target="_blank" rel="noopener noreferrer">
                    <FaTelegram size={30} className="text-[#55e6a5] hover:bg-[#141c27] hover:text-white transition-all duration-300 ease-in-out"/>
                </a>
            </div>
        </>
    )
}