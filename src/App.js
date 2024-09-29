import HeaderComponent from "./components/header/HeaderContainer"
import NavBar from "./components/navbar/NavBar"
import ProfileContainer from "./components/profile/ProfileContainer"
import DialogContainer from "./components/dialog/DialogContainer"
import FindUsersContainer from "./components/findUsers/UsersContainer"
import Login from "./components/login/Login"
import "./App.css"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { render } from "@testing-library/react"
import { connect } from "react-redux"
import { setUserData } from "./redux/authReducer"
import { compose } from "redux"
import { initializeApp } from "./redux/appReducer"
import Preloader from "./components/common/preloader/Preloader"


class App extends React.Component{

  componentDidMount(){
    this.props.initializeApp()
  }

  render(){

    if(this.props.initioalazed){
      return <Preloader/>
    }

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
            <Route path="/profile/:userId?" element={<ProfileContainer />}/>

            <Route path="/dialog" element={< DialogContainer/>}/>

            <Route path="/find-users" element={<FindUsersContainer/>}/>
            <Route path="/login" element={<Login/>}/>
            
          </Routes>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initioalazed: state.appReducer.initioalazed
})

export default connect(mapStateToProps, {initializeApp})(App)