//@ts-nocheck
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import JsFileDownloader from 'js-file-downloader';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export const Card = ({ data, color }) => {
    console.log(data);
    const [videoQuality, setVideoQuality] = useState(720)


    const url = data.formats[2].url

    // async function downloader(url: string, filename: string) {
    //     return new Promise((resolve, reject) => {
    //         axios({
    //             method: 'get',
    //             url,
    //             headers: {"Access-Control-Allow-Origin": "*"},
    //             responseType: 'stream',
            
    //         })
    //             .then((response) => {
    //                 console.log(response.data)
    //                     .pipe(fs.createWriteStream(filename))
    //                     .on('finish', (err: Error) => {
    //                         if (err) reject(err);
    //                         else resolve();
    //                     });
    //             });
    //     });
    // }



    return (
        <div className="flex items-center justify-between space-x-4  p-2 flex-col md:flex-row ">
            <img src={data.thumbnail[1].url} alt="" />


            <div className="shadow-md space-y-4 px-4 py-2 rounded-md">
                <p>{data.title}</p>
                <div className="flex justify-between items-center">



                    <div className="space-x-2">
                        <span> Quality:</span>
                        <select name="" id="" className="border border-[#6E41E2]">
                            <option value="720">720</option>
                            <option value="360">360</option>
                        </select>
                    </div>

            <a href={url} target='_blank' download={ data.titl}>
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