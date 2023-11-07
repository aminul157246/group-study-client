import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Footer from "./pages/Footer"
import Navbar from "./components/layout/Navbar/Navbar"


function App() {

  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster></Toaster>
    </div>
  )
}

export default App
