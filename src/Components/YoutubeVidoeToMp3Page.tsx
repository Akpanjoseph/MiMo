export const YoutubeVidoeToMp3Page = ()=>{
    return (
        <div className=" flex items-center justify-center space-x-1 pt-4">

           <div className="border-2 border-[#FF5B79] flex w-1/2 shadow-lg  ">
           <input type="text" className="w-full outline-none p-2 "  placeholder="Paste YouTube Url Here.."/>
           <button className="bg-[#FF5B79] text-white py-2 px-4 rounded-sm">
            <span>Download</span>
           </button>
           </div>
        </div>
    )
}