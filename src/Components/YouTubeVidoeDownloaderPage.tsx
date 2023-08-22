import {NavLink} from 'react-router-dom'
export const YouTubeDownloaderPage = () => {
  return (
    <div className="pt-4 pb-10 flex items-center justify-around flex-col lg:flex-row">
      <img src="side-image.svg" alt="side-image" className="w-[80%] md:w-[40%] lg:w-[32%]" />
     <div>

     <div className="flex  flex-col space-y-4 md:flex-row md:space-x-10 md:space-y-0">

      
     <NavLink to={'signleVideo'} className="border-2 border-dashed border-[#6E41E2] py-14 px-8  flex flex-col justify-center items-center rounded-md">
          <img src="video-icon-active.svg" alt="" width={70} />
          <p className="py-4 text-[#6E41E2]">Single Download</p>
        </NavLink>

      
        <NavLink to={'/playlistVideo'} className="border-2 border-dashed border-[#6E41E2] py-14 px-8 flex flex-col justify-center items-center rounded-md">
         <img src="playlist-inactive-icon.svg" alt="" width={70} />
          <p className=" py-4">Download PlayList</p>
        </NavLink>

      </div>
      <p className="text-center pt-4 capitalize">Select download method</p>
     </div>
    </div>
  );
};
