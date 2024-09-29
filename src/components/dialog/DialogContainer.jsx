import React from "react";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { withAuthReducer } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class DialogContainer extends React.Component {
    render () {
        return(
            <Dialog {...this.props} state={this.props.state} isAuthB={this.props.isAuthB}/>
        )
    }
}



let mapStateToProps = (state)=>{
    return {state: state.dialogsReducer,}
}


export default compose( connect (mapStateToProps, {}), withAuthReducer)(DialogContainer)