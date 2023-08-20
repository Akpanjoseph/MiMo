import {NavLink} from 'react-router-dom'
import './style.css'
export const NavBar = ()=>{
    return (
        <div className='flex items-center justify-around'>
            <img src="logo.svg" alt="app logo" width={250} />

            <ul className='flex space-x-10 text-[18px] font-semibold'>
                <li><NavLink to={'/'}  > YouTube Downloader</NavLink></li>
                <li><NavLink to={'/music'}> YouTube To Mp3</NavLink></li>
            </ul>
        </div>
    )
}