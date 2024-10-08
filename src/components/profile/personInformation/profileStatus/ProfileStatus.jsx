import React from "react";
import styles from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component{

    state={
        editMode: false,
        status: this.props.status

    }

    componentDidUpdate(prevProps, prevState){

        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }


    }


    activateEditMode=()=>{
        this.setState({
            editMode: true
        })

    }

    deactivateEditMode=()=>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    
    onStatusChange=(e) => {
    
        this.setState({
            status: e.currentTarget.value
        })

    }

    render(){
    return( 

    
    <div>
        {!this.state.editMode && 
        <div className={styles.status}>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        </div>
        }

        {this.state.editMode && 
        <div>
            <input onChange={this.onStatusChange} onDoubleClick={this.deactivateEditMode} value={this.state.status}/> 
        </div> 
        }
    </div> 
    )}
}
export default ProfileStatus