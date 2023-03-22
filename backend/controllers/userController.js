const userService = require('../service/userService');
const testService = require('../service/testService')
const {validationResult} = require('express-validator');
const Errors = require('../middlewear/errors');
const uuid = require('uuid');
const path = require('path');

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
            console.log(refreshToken);
            const user = await userService.refresh(refreshToken)
            res.cookie('refreshToken', user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(user)
        }
        catch(e){
            next(e);
        }
    }

    async test (req, res, next){
        try{
            const {name, description, idCreator, type, category} = req.body
            const test = await testService.createTest(name, description, idCreator, type, category)
            return res.json(test)
        }
        catch(e){
            next(e)
        }
    }

    async section (req, res, next){
        try{
            const {name, description, id_test} = req.body
            const test = await testService.createSection(name, description, id_test)
            return res.json(test)
        }
        catch(e){
            next(e)
        }
    }

    async question (req, res, next){
        try{
            const {questionText, idSection, type} = req.body
            const question = await testService.createQuestion(questionText, idSection, type)
            return res.json(question)
        }
        catch(e){
            next(e)
        }
    }

    async answer (req, res, next){
        try{
            const {text, idQuestion} = req.body
            const answer = await testService.createAnswer(text, idQuestion)
            return res.json(answer)
        }
        catch(e){
            next(e)
        }
    }

    async getUserTests(req, res, next){
        try{
            const idCreator = req.params.idCreator
            console.log(idCreator)
            const userTests = await userService.getUserTests(idCreator)
            return res.json(userTests)
        }
        catch(e){
            next(e)
        }
    }

    async getTest(req, res, next){
        try{
            const {testId} = req.body
            const userTest = await userService.getTest(testId)
            return res.json(userTest)
        }
        catch(e){
            next(e)
        }
    }
}

module.exports = new UserController()