import { NavLink } from 'react-router-dom'
import './style.css'
export const NavBar = () => {
    return (
        <div className='flex  justify-between px-8 '>
            <img src="logo.svg" alt="app logo" className='w-[250px] md:w-[300px]' />

            <div className='text-[18px] font-semibold '>
                <ul className='md:flex space-x-10 hidden'> 
                    {/* <li><NavLink to={'/'}  >YouTube Downloader</NavLink></li> */}
                    {/* <li><NavLink to={'/'}> YouTube To Mp3</NavLink></li> */}
                    {/* <li><NavLink to={'/'}> Tiktok</NavLink></li> */}
                    {/* <li><NavLink to={'/'}> Instagram</NavLink></li> */}
                  </ul> 
                
                {/* <div>
                    <button className=' md:hidden'>Menu</button>
                </div> */}
            </div>
        </div>
    )
}