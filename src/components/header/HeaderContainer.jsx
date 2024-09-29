import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import { isAuth } from "../../redux/authReducer";
import { logout } from "../../redux/authReducer";

class HeaderComponent extends React.Component{
    componentDidMount(){
        this.props.isAuth()
    }

    render(){
        return <Header {...this.props} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})



export default connect(mapStateToProps, {isAuth, logout})(HeaderComponent)