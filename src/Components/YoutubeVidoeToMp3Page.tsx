//@ts-nocheck

import { useState } from "react"
import { Card } from "./SingleMediaCard"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

export const YoutubeVidoeToMp3Page = () => {

    const [url, setUrl] = useState('')
    const [loader, setloader] = useState(false)
    const [audioInfo, setAudioInfo] = useState({})
    // const [audioUrl,setAudioUrl] = useState('')

    const data ={}

    function getId(url) {
        const text = url.split('=')
        return text[1]
    }

    let audioUrl;

    const DownloadMp3 = async (option) => {
        try {
            const response = await axios.request(option);
            // console.log(response.data.link);
            
            // setAudioUrl()
            audioUrl =response.data.link

            // data.url= response.data.link
            
            setloader(false)
        } catch (error) {
            console.error(error);
        }
    }


    const GetVideoInfo = async (option) => {
        try {
            const response = await axios.request(option);
            setAudioInfo({url:audioUrl,image: response.data.videoDetails.thumbnail.thumbnails[1].url, title: response.data.videoDetails.title })
            
        } catch (error) {
            const err = error.message;
            console.log(err);
            
            // if(err.includes === "network") toast.error('Network Error!❌ ')
        }
    }


    const HandleDowload = async () => {
        setloader(true)
        const id = getId(url);

        const option1 = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: { id: `${id}` },
            headers: {
                'X-RapidAPI-Key': '4946a6b3dbmsh470bc27f05c6116p1fa079jsne42699169e20',
                'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
        };

        const option2 = {
            method: 'GET',
            url: 'https://youtube-search-and-download.p.rapidapi.com/video',
            params: { id: `${id}` },
            headers: {
                'X-RapidAPI-Key': '4946a6b3dbmsh470bc27f05c6116p1fa079jsne42699169e20',
                'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
            }
        };



        DownloadMp3(option1)
        GetVideoInfo(option2)
        setUrl('')
    }



    return (
        <div className="pb-[20%] md:pb-0 overflow-x-hidden" >
            {/* title  */}
            <h1 className="text-center font-bold text-4xl py-10 text-[#FF5B79] capitalize">Youtube to mp3</h1>

            {/* form */}
            <div className=" flex flex-col items-center space-y-4 justify-center space-x-1 pt-4 md:flex-row md:space-y-0">

                <div className="border-2 border-[#FF5B79] flex w-[80%] md:w-[40%] shadow-lg rounded-sm ">
                    <input type="search" className="w-full outline-none p-2 " placeholder="Paste YouTube Url Here.." value={url} onChange={(e) => setUrl(e.target.value)} />
                </div>


                {/* download btn */}
                <button className="bg-[#FF5B79] text-white py-1 md:py-2 px-2 rounded-sm capitalize flex items-center space-x-2" onClick={HandleDowload}>
                    <img src="download-icon2.svg" alt="" />
                    <span>Convert to mp3</span>
                </button>
            </div>



            {/* lodaer */}
            {audioInfo ? '' :
                <div className={`flex justify-center mt-4 ${loader ? '' : 'hidden'}`}>
                    <img src="loader1.svg" alt="" width={'80px'} />
                </div>}

            {/* <Card data={data} /> */}
            <div className="flex justify-center items-center mt-[5%]">

                {audioInfo && <Card data={audioInfo} />}

            </div>

            <Toaster  />
        </div>
    )
}