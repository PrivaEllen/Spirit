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

    static async saveChanges(id, Name, Surname, company, phone, emailForFeedback){
        return $api.post('/save/changes', {id, Name, Surname, company, phone, emailForFeedback})
    }

    static async renameTest(testId, name){
        return $api.post('/rename/test', {testId, name})
    }

    static async changePrivateOfTest(testId){
        return $api.post('/change/private', {testId})
    }

    static async deleteTest(testId){
        return $api.post('/delete/test', {testId})
    }
}
