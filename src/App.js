import Header from "./components/header/Header"
import NavBar from "./components/navbar/NavBar"
import ProfileContainer from "./components/profile/ProfileContainer"
import Dialog from "./components/dialog/Dialog"
import FindUsersContainer from "./components/findUsers/UsersContainer"
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
          <Route path="/profile/:userId" element={<ProfileContainer 
              state={props.state.profileReducer}
              />
          }/>

          <Route path="/dialog" element={<Dialog 
              state={props.state.dialogsReducer}
              />
          }/>

          <Route path="/find-users" element={<FindUsersContainer/>}/>

        </Routes>
      </div>
      
    </div>
  )
}



export default App