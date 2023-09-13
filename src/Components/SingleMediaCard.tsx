//@ts-nocheck
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import JsFileDownloader from 'js-file-downloader';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export const Card = ({ data }) => {
    console.log(data);
    // const [videoQuality, setVideoQuality] = useState(720)




    return (
        <div className="flex items-center justify-between space-x-4  p-2 flex-col md:flex-row ">
            <img src={data.image} alt="" />


            <div className="shadow-md space-y-4 px-4 py-2 rounded-md">
                <p>{data.title}</p>
                <div className="flex justify-between items-center">
            <a href={data.url} target='_blank' rel='noreferrer' download={`[mimo-downloader]-${data.title}`}>
                    <button  className="bg-[#6E41E2] text-white py-1 md:py-2 px-2 rounded-sm capitalize flex items-center space-x-2" >
                        <img src="download-icon2.svg" alt="" />
                        <span>Download </span>
                    </button>

                    </a>
                </div>
            </div>
            <Toaster />
        </div>
    )
}