const userService = require('../service/userService');
const {validationResult} = require('express-validator');
const Errors = require('../middlewear/errors');

class UserController{
    async registration (req, res, next){
        try{
            const error = validationResult(req)
            if (!error.isEmpty()){
                return (next(Errors.BadRequest('Ошибка при валидации', error.array())))
            }
            const {Name, Surname, email, password, Photo} = req.body
            const user = await userService.registration(Name, Surname, email, password, Photo)
            res.cookie('refreshToken', user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(user)
        }
        catch(e){
            next(e);
        }
    }
    async login (req, res, next){
        try{
            const {email, password} = req.body
            const user = await userService.login(email, password)
            res.cookie('refreshToken', user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(user)
        }
        catch(e){
            next(e);
        }
    }
    async logout (req, res, next){
        try{
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        }
        catch(e){
            next(e);
        }
    }
    async activate (req, res, next){
        try{
            const activationLink = req.params.link 
            await userService.activate(activationLink)
            return res.redirect(`${process.env.FRONTEND_URL}/login`)
        }
        catch(e) {
            next(e);
        }
    }
    async refresh (req, res, next){
        try{
            const {refreshToken} = req.cookies
            const user = await userService.refresh(refreshToken)
            res.cookie('refreshToken', user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(user)
        }
        catch(e){
            next(e);
        }
    }
}

module.exports = new UserController()