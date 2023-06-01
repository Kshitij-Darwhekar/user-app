
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.service = userservice;
        this.user = new user();

}

handleInput = (e) => {
    this.user[e.target.name] = e.target.value;
}

onRegister = () => {
    this.service.persist(this.user);
}

render() {
    return(
        <form>
            <label>Name: </label>
            <input type="text"  onChange={this.handleInput} /> <br/>  
            <label>Password: </label>
            <input type="password"  onChange={this.handleInput} /> <br/>
            <button type="button" onClick={this.onRegister}>Register</button>
        </form>
    )
}
}
