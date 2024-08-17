import Header from "./components/header/Header"
import NavBar from "./components/navbar/NavBar"
import Profile from "./components/profile/Profile"
import Dialog from "./components/dialog/Dialog"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const App = () => {
  return(
    <BrowserRouter>
    <div className="appWrapper">
      <header className="header">
        <Header/>
      </header>
      
      <div className="navbar">
        <NavBar/>
      </div>
      
      <div className="content">
      <Routes>
          <Route path="/" element={<Profile/>}/>
          <Route path="/dialog" element={<Dialog/>}/>
      </Routes>
      </div>
      
    </div>
    </BrowserRouter>
  )
}



export default App