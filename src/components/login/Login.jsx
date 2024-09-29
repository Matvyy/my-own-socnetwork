import React from "react";
import { Field, isAsyncValidating, reduxForm } from "redux-form";
import { Input } from "../common/formsControls/FormsControl";
import { required } from "../../utils/validatores";
import { connect } from "react-redux";
import { login, logout } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import styles from "./Lodin.module.css"



const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    const profile = `/profile/${props.id}` 

    if(props.isAuth){
        return <Navigate to={profile}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}

const LoginForm = (props) => {

    return <div>
        
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" component={Input} name={"email"} validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" component={Input} name={"password"} type="password" validate={[required]}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={Input}  type="checkbox" /> Remember me
            </div>
            {props.error && <div className={styles.formError}> {props.error} </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login',})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    id: state.authReducer.userId
    
})

export default connect(mapStateToProps, {login})(Login)