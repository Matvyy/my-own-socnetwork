import Header from "./components/header/Header"
import NavBar from "./components/navbar/NavBar"
import Profile from "./components/profile/Profile"
import Dialog from "./components/dialog/Dialog"
import "./App.css"
import { Route, Routes } from "react-router-dom"


const App = (props) => {

  return(
    <div className="appWrapper">
      <header className="header">
        <Header/>
      </header>
      
      <div className="navbar">
        <NavBar/>
      </div>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Profile 
              // animate={true} 
              dispatch={props.dispatch}
              state={props.state}
              />
          }/>
          <Route path="/dialog" element={<Dialog 
              // animate={true} 
              dispatch={props.dispatch}
              state={props.state}
              />
          }/>
        </Routes>
      </div>
      
    </div>
  )
}



export default App