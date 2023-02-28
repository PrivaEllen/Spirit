module.exports = class userDto{
    id;
    Name;
    Surname;
    email;
    isActivated;
    constructor(model){
        this.id = model.id
        this.Name = model.Name
        this.Surname = model.Surname
        this.email = model.email
        this.isActivated = model.isActivated
    }
}