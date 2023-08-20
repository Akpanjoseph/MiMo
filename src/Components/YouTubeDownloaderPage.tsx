export const YouTubeDownloaderPage = () => {
  return (
    <div className="pt-4 flex items-center justify-around">
      <img src="side-image.svg" alt="side-image" className="w-[32%]" />

     <div>
     <div className="flex space-x-10">
        <div className="border-2 border-dashed border-[#6E41E2] py-14 px-8 flex flex-col  justify-center items-center rounded-md">
          <img src="playlist-lcon.svg" alt="" width={70} />
          <p className="text-[#6E41E2] py-4">Download PlayList</p>
        </div>



        <div className="border-2 border-dashed border-[#6E41E2] py-14 px-8 flex flex-col  justify-center items-center rounded-md">
          <img src="single-video-icon.svg" alt="" width={70} />
          <p className=" py-4">Single Download</p>
        </div>

      </div>
      <p className="text-center pt-4 capitalize">Select download method</p>
     </div>
    </div>
  );
};
