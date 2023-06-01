import user from "./user";

export default class userservice{
    constructor(){
        this.users = new Array(user);
}

persist(user){
    this.users.push(user);
}

authenticate(email,password){
    return this.users.find(u => u.email === email && u.password === password);
}
}