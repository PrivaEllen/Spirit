module.exports = class Errors extends Error{
    status;
    errors;

    constructor(status, message, errors = []){
        super(message)
        this.status = status;
        this.errors = errors;
    }

    static NoLogin(){
        return new Errors(401, "Вы не были авторизованы.")
    }

    static BadRequest(message, errors = []){
        return new Errors(400, message, errors)
    }
}