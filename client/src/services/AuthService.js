import $api from "../http/http";

export default class AuthService{
    static async registration(Name, Surname, email, password){
        return $api.post('/registration', {Name, Surname, email, password})
    }

    static async login(email, password){
        return $api.post('/login', {email, password})
    }

    static async logout(){
        return $api.post('/logout', {})
    }
}
