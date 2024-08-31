import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      {/* <hr style={{color:"green", border:"2px solid"}}/> */}
      {/* <h1>SpringStore🏆</h1> */}
    </div>
  )
}

export default App