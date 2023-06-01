import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: new user()
    }
}

componentDidMount() {
    var data = JSON.parse(localStorage.getItem("User"));
    this.setState({user: data});
}

render() {
    return(
        <table border = "2">
            <tr><td>Name</td></tr><td>{this.state.user.name}</td><tr/>
            <tr><td>Email</td></tr><td>{this.state.user.email}</td><tr/>     
            <tr><td>Password</td></tr><td>{this.state.user.password}</td><tr/>  
        </table>
    );

}
}
