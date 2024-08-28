import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUsersProfile, getUsersProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import { profileAPI } from "../../api/api";
import { Navigate } from "react-router-dom";
import { withAuthReducer } from "../hoc/withAuthRedirect";
import { isAuth } from "../../redux/authReducer";
import { compose } from "redux";

  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }



class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.router.params.userId

        this.props.getUsersProfile(userId)
        // profileAPI.getUser(userId)
        //     .then(response=>{
        //     this.props.setUsersProfile(response.data)
        //     })
    }

    render(){


        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


//let AuthRedirectComponent = withAuthReducer(ProfileContainer)



let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,

})



//let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {getUsersProfile}), withRouter, withAuthReducer)(ProfileContainer)