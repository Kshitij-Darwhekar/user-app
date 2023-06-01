import React, { Component } from 'react';
import userservice from '../user.service';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.service = userservice;
        this.state = {
            email: "",
            password: "",
            user : null
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onLogin = (user) => {
        this.setState({user: this.service.authenticate(user.email, user.password)});
        if(this.state.user){
            localStorage.setItem("User", JSON.stringify(this.state.user));
        }
    }


    render() {
        return(
            <form>
                <label>Email: </label>
                <input type="text" value={this.state.email} onChange={this.handleInput} /> <br/>  
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleInput} /> <br/>
                <button type="button" onClick={this.onLogin}>Login</button>
            </form>
        )
}
}