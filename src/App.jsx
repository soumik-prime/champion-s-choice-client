import { Outlet } from "react-router-dom"
import Footer from "./components/allpage/Footer"
import NavBar from "./components/allpage/NavBar"
import ThemeController from "./components/ThemeController"

function App() {


  return (

    <div className="max-w-[1440px] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>

  )
}

export default App
