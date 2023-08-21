//@ts-nocheck
import { VideoCard } from "./VideoCard";
import {useState} from 'react'
import data from '../JSON/video.json'
export const DownloadPlaylist = () => {

   

    const [text,setText] = useState()
    
    function HandleFetch(value){
        let videId = text.split('=')
        if(videId.length === 1) alert('Invaild link')
        else alert(videId[1]);
    }

    return (
        <div>
            <div className="flex flex-col items-center rounded-sm space-y-4 justify-center space-x-1 pt-4 md:flex-row md:space-y-0">
                <div className="border-2 border-[#6E41E2] flex w-[80%] md:w-[40%] shadow-lg rounded-sm ">
                    <input type="text" className="w-full outline-none p-2 " placeholder="Paste PlayList Url Here.." value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
                <button className="bg-[#6E41E2] text-white py-1 md:py-2 px-2 rounded-sm capitalize flex items-center space-x-2" onClick={HandleFetch}>
                    <img src="download-icon2.svg" alt="" />
                    <span>Download </span>
                </button>
            </div>
               

               <div className="flex justify-center items-center mt-[10%]">
                <VideoCard data={data} />
               </div>
        </div>
    )
} 