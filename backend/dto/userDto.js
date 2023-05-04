module.exports = class userDto{
    id;
    Name;
    Surname;
    email;
    isActivated;
    Photo;
    emailForFeedback;
    company;
    phone;
    constructor(model){
        this.id = model.id
        this.Name = model.Name
        this.Surname = model.Surname
        this.email = model.email
        this.isActivated = model.isActivated
        this.Photo = model.Photo
        this.company = model.company
        this.phone = model.phone
        this.emailForFeedback = model.emailForFeedback
    }
}