import React from "react";
import "./Login.css"
import {Form} from 'react-bootstrap';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "", passwort: "", token: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.apiCall = this.apiCall.bind(this)
        this.onLogin = this.onLogin.bind(this)
     }

    handleChange(event){
        const {id, type, checked, value} = event.target
        console.log(event.target)
        type === 'checkbox' ?
            this.setState({[id]:checked}) :
            this.setState({[id]:value})
    }

    apiCall(){
        const url = "https://infoserver.ecs-deutschland.de/services/rest/auth/login/"
        const loginData = {
            "Username": this.state.login,
            "Password": this.state.passwort
        }
        console.log(loginData)
        axios.post(url, loginData, {
            headers: {"Access-Control-Allow-Origin": "*"}
            })
        .then(response => console.log(response));
    }

    onLogin(){
        if(this.state.login.includes(".")){
            console.log("valid")
            this.apiCall()
        }
        
    }

    render() {
        return (
            <div className="container-fluid loign_form">
                <div className="row">
                    <div className="col-4"></div><div className="col-4">
                        <input
                                placeholder="Benutzername" type="text" className="form-control systeme_felder" id="login"
                                value={this.state.login}
                                onChange={this.handleChange}
                        /> 
                    </div><div className="col-4"></div>
                    <div className="col-4"></div><div className="col-4">
                        <Form.Control id="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    </div><div className="col-4"></div>
                    <div className="col-4"></div><div className="col-4 loginButton">
                        <button type="button" class="btn btn-primary" onClick={this.onLogin}>Login</button>
                    </div><div className="col-8"></div>
                </div>
            </div>
        );
    }
}

export default Login

