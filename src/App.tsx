import { NavBar } from "./Components/NavBar"
import {Routes,Route} from 'react-router-dom'
import { YouTubeDownloaderPage } from "./Components/YouTubeVidoeDownloaderPage"
import { Footer } from "./Components/Footer"
import { YoutubeVidoeToMp3Page } from "./Components/YoutubeVidoeToMp3Page"
import { DownloadPlaylist } from "./Components/DownloadPlaylist"


const App = ()=>{
  return(
  <div className="w-screen h-screen  pt-4">
    <NavBar/>

    
    <Routes>
      <Route path="/" element={<YouTubeDownloaderPage/>} />
      <Route path="/music" element={<YoutubeVidoeToMp3Page/>} />
      <Route path="/playlist" element={<DownloadPlaylist/>} />
    </Routes>
    
    <Footer/>
  </div>
  )
}

export default App