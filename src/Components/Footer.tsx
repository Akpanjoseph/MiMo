
export const Footer = ()=>{
    return(
       <div className="fixed bottom-0 w-full">
         <div className="px-[10%] md:flex flex-col items-start hidden">
            {/* <div className="flex flex-col justify-start items-center font-bold text-lg capitalize">
                <p>Download chrome extension</p>
                <img src="download-icon.svg" alt="" width={40} />
            </div> */}
        </div>

       <div className=" capitalize text-sm font-semibold bg-slate-600 text-white py-1">
       <p className="text-center">copyright &copy;2023 mimo downloader</p>
       </div>
       </div>
    )
}