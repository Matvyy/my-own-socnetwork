import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUsersProfile, updateStatus} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import { withAuthReducer } from "../hoc/withAuthRedirect";
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
        this.props.getStatus(userId)
    }

    render(){


        return(
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}


//let AuthRedirectComponent = withAuthReducer(ProfileContainer)



let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status

})



//let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}), withRouter, withAuthReducer)(ProfileContainer)