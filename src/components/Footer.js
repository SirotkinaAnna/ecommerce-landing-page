import Links from "./Links";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsPinterest, BsInstagram } from 'react-icons/bs'
function Footer() {
    const nameClass = 'hover:border-b-2 hover:border-white pb-2 cursor-pointer'
    return <footer>
        <div className='pt-10 mt-20 bg-black text-white'>
            <div className=" md:grid md:grid-cols-3 gap-4 px-10 md:px-36 pb-20">
                <div className=" md:col-span-2">
                    <div className='pb-6 text-center md:text-start'><h1 className='font-bold text-3xl  px-2'>loopstudios</h1></div>
                    <div className='my-10 md:mx-0 md:my-0 font-semibold md:w-1/2 text-center md:text-start '>
                        <Links />
                    </div>
                </div>
                <div className="">
                    <div className="text-white flex flex-row mb-4 text-2xl justify-center   md:justify-end gap-4">
                        <div className={nameClass}><AiFillFacebook /></div>
                        <div className={nameClass}><BsTwitter /></div>
                        <div className={nameClass}><BsPinterest /></div>
                        <div className={nameClass}><BsInstagram /></div>
                    </div>
                    <p className="text-center md:text-end text-gray-500 font-semibold">© 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
            <p className="text-gray-500">Challenge by Frontend Mentor. Coded by Anna Sirotkina.</p>
        </div>
    </footer>
}
export default Footer;