import { NavLink } from 'react-router-dom'
import './style.css'
export const NavBar = () => {
    return (
        <div className='flex flex-col-reverse px-2 md:items-center md:justify-around md:flex-row '>
            <img src="logo.svg" alt="app logo" width={250} />

            <div className='text-[18px] font-semibold '>
                <ul className='md:flex space-x-10 hidden'>
                    <li><NavLink to={'/'}  > YouTube Downloader</NavLink></li>
                    <li><NavLink to={'/music'}> YouTube To Mp3</NavLink></li>
                </ul>
                
                <div>
                    <button className=' md:hidden'>Menu</button>
                </div>
            </div>
        </div>
    )
}