import { NavBar } from "./Components/NavBar"
import {Routes,Route} from 'react-router-dom'
import { YouTubeDownloaderPage } from "./Components/YouTubeDownloaderPage"
import { Footer } from "./Components/Footer"


const App = ()=>{
  return(
  <div className="w-screen h-screen  pt-4">
    <NavBar/>

    
    <Routes>
      <Route path="/" element={<YouTubeDownloaderPage/>} />
    </Routes>
    
    <Footer/>
  </div>
  )
}

export default App