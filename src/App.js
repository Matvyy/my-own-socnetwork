import HeaderComponent from "./components/header/HeaderContainer"
import NavBar from "./components/navbar/NavBar"
import ProfileContainer from "./components/profile/ProfileContainer"
import DialogContainer from "./components/dialog/DialogContainer"
import FindUsersContainer from "./components/findUsers/UsersContainer"
import Login from "./components/login/Login"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Dialog from "./components/dialog/Dialog"



const App = (props) => {

  return(
    <div className="appWrapper">
      <header className="header">
        <HeaderComponent/>
      </header>
      
      <div className="navbar">
        <NavBar/>
      </div>
      
      <div className="content">
        <Routes>
          <Route path="/profile/:userId?" element={<ProfileContainer 

              />
          }/>

          <Route path="/dialog" element={< DialogContainer
              // state={props.state.dialogsReducer}
              />
          }/>

          <Route path="/find-users" element={<FindUsersContainer/>}/>
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
      </div>
      
    </div>
  )
}



export default App