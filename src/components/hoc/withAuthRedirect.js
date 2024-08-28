import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuthB: state.authReducer.isAuthB
  })

export let withAuthReducer = (Component) => {
    class RedirectComponent extends React.Component {
        
        render () {
            if (!this.props.isAuthB) {
                return <Navigate to="/login" />

              } else{
                return <Component {...this.props}/>
              }
            

        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect, {})(RedirectComponent)

    return ConnectedRedirectComponent
}

