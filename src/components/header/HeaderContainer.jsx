import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import { headerAPI } from "../../api/api";
import { isAuth } from "../../redux/authReducer";

class HeaderComponent extends React.Component{
    componentDidMount(){
        this.props.isAuth()
        // headerAPI.getUser().then(respose => {
        //     if(respose.data.resultCode === 0){
        //         let {id, email, login} = respose.data.data
        //         this.props.setUserData(id, email, login)
        //     }
        // })
    }

    render(){
        return <Header {...this.props} isAuth={this.props.isAuthB}/>
    }
}

const mapStateToProps = (state) => ({
    isAuthB: state.authReducer.isAuthB,
    login: state.authReducer.login
})



export default connect(mapStateToProps, {setUserData, isAuth})(HeaderComponent)