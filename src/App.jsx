import { Outlet } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"


function App() {

  return (
    <div>
       <MainLayout>
        <Outlet></Outlet>
       </MainLayout>
    </div>
  )
}

export default App
