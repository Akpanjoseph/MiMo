export const YoutubeVidoeToMp3Page = ()=>{
    return (
        <div className=" flex flex-col items-center space-y-4 justify-center space-x-1 pt-4 md:flex-row md:space-y-0">

           <div className="border-2 border-[#FF5B79] flex w-[80%] md:w-[40%] shadow-lg rounded-sm ">
           <input type="text" className="w-full outline-none p-2 "  placeholder="Paste YouTube Url Here.."/>
           </div>
           <button className="bg-[#FF5B79] text-white py-1 md:py-2 px-2 rounded-sm capitalize">
            <span>Convert to mp3</span>
           </button>
        </div>
    )
}