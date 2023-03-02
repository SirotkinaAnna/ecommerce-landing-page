import './navigation.css'

import { GoThreeBars } from "react-icons/go";
import Links from './Links';
function Navigation({ handleClick }) {
    return <nav className='text-white h-screen w-screen'>

        <div className='flex justify-between px-6 mx-4 pt-10 md:mx-40 md:pt-20'>
            <h1 className='font-bold text-3xl'>loopstudios</h1>

            <div className='md:hidden text-3xl'><GoThreeBars onClick={handleClick} /></div>  <div className='hidden md:inline font-semibold'>
                <Links />
            </div>
        </div>
        <div className='grid content-center h-5/6  md:mx-0 md:w-1/2'>
            <div className=' text-5xl md:text-7xl p-10 m-auto md:mx-40 md:mt-10 border-2 border-white w-5/6'>
                <p>IMMERSIVE</p>
                <p>EXPERIENCES</p>
                <p>THAT DELIVER</p>
            </div>
        </div>

    </nav>
}
export default Navigation;