import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"
import Users from "./Pages/User"



const Router=()=>{

  return(
    <BrowserRouter>
     <Sidebar/>
       <Routes>
        <Route  path="/users" element={<Users/>}/>
       </Routes>
    
    </BrowserRouter>
  )
}

export default Router