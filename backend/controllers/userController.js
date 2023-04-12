const userService = require('../service/userService');
const testService = require('../service/testService')
const {validationResult} = require('express-validator');
const Errors = require('../middlewear/errors');
const uuid = require('uuid');
const path = require('path');
const Types = require('../models/TypesOfTests');
const Tests = require('../models/Tests');
const Questions = require('../models/Questions');

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

    async saveChanges(req, res, next){
        try{
            const {id, Name, Surname, company, phone, emailForFeedback} = req.body
            if (req.files != null){
                const {Photo} = req.files
                let fileName = uuid.v4() + ".png"
                Photo.mv(path.resolve(__dirname, '..', 'static', fileName))
                const hrUser = await userService.saveChanges({id, Name, Surname, company, phone, emailForFeedback, Photo: fileName})
                return res.json(hrUser)
            }
            else{
                const hrUser = await userService.saveChanges({id, Name, Surname, company, phone, emailForFeedback})
                return res.json(hrUser)
            }
        }
        catch(e){
            next(e)
        }
    }

    async createTypeOfTest(req, res, next){
        try{
            const {name} = req.body
            const type = await userService.createTypeOfTest(name)
            return res.json(type)
        }
        catch(e){
            next(e)
        }
    }

    async createTest (req, res, next){
        try{
            const {name, description, idCreator, category, privat, type} = req.body
            if (req.files != null){
                const {img} = req.files
                let fileName = uuid.v4() + ".png"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                const test = await testService.createTest({name, description, idCreator, category, privat, type, img: fileName})
                return res.json(test)
            }
            else{
                const test = await testService.createTest({name, description, idCreator, category, privat, type})
                return res.json(test)
            }
        }
        catch(e){
            next(e)
        }
    }

    async changeTest (req, res, next){
        try{
            const {testId, name, description, type} = req.body
            if (req.files != null){
                const {img} = req.files
                let fileName = uuid.v4() + ".png"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                const test = await testService.changeTest({testId, name, description, type, img: fileName})
                return res.json(test)
            }
            else{
                const test = await testService.createTest({name, description, typeId})
                return res.json(test)
            }
        }
        catch(e){
            next(e)
        }
    }

    async renameTest(req, res, next){
        try{
            const {testId, name} = req.body
            const newTest = await userService.renameTest(testId, name)
            return res.json(newTest)
        }
        catch(e){
            next(e)
        }
    }

    async changePrivateOfTest(req, res, next){
        try{
            const {testId} = req.body
            const newTest = await userService.changePrivateOfTest(testId)
            return res.json(newTest)
        }
        catch(e){
            next(e)
        }
    }

    async deleteTest(req, res, next){
        try{
            const {testId} = req.body
            const test = await userService.deleteTest(testId)
            return res.json(test)
        }
        catch(e){
            next(e)
        }
    }

    async createSection (req, res, next){
        try{
            const {name, description, id_test} = req.body
            const test = await testService.createSection(name, description, id_test)
            return res.json(test)
        }
        catch(e){
            next(e)
        }
    }

    async changeSection (req, res, next){
        try{
            const {idSection, name, description} = req.body
            const section = await testService.changeSection(idSection, name, description)
            return res.json(section)
        }
        catch(e){
            next(e)
        }
    }

    async deleteSection(req, res, next){
        try{
            const {idSection} = req.body
            const section = await testService.deleteSection(idSection)
            return res.json(section)
        }
        catch(e){
            next(e)
        }
    }

    async createQuestion (req, res, next){
        try{
            const {questionText, idSection, type, obligatory} = req.body
            if (req.files != null){
                const {img} = req.files
                let fileName = uuid.v4() + ".png"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                const question = await testService.createQuestion({questionText, idSection, type, obligatory, img: fileName})
                return res.json(question)
            }
            else{
                const question = await testService.createQuestion({questionText, idSection, type, obligatory})
                return res.json(question)
            }
        }
        catch(e){
            next(e)
        }
    }

    async changeQuestion (req, res, next){
        try{
            const {questionId, questionText, type, obligatory} = req.body
            if (req.files != null){
                const {img} = req.files
                let fileName = uuid.v4() + ".png"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                const question = await testService.changeQuestion(questionId, questionText, type, obligatory, img)
                return res.json(question)
            }
            else{
                const question = await testService.changeQuestion(questionId, questionText, type, obligatory)
                return res.json(question)
            }
        }
        catch(e){
            next(e)
        }
    }

    async deleteQuestion(req, res, next){
        try{
            const {questionId} = req.body
            const question = await testService.deleteQuestion(questionId)
            return res.json(question)
        }
        catch(e){
            next(e)
        }
    }

    async createAnswer (req, res, next){
        try{
            const {text, correctness, idQuestion} = req.body
            const answer = await testService.createAnswer(text, correctness, idQuestion)
            return res.json(answer)
        }
        catch(e){
            next(e)
        }
    }

    async changeAnswer (req, res, next){
        try{
            const {answerId, text, correctness} = req.body
            const answer = await testService.changeAnswer(answerId, text, correctness)
            return res.json(answer)
        }
        catch(e){
            next(e)
        }
    }

    async deleteAnswer(req, res, next){
        try{
            const {answerId} = req.body
            const answer = await testService.deleteAnswer(answerId)
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

    async getTypes(req, res, next){
        try{
            const types = await userService.getTypes()
            return res.json(types)
        }
        catch(e){
            next(e)
        }
    }

    async saveTest(req, res, next){
        try{
            const {test} = req.body
            const Test = await this.createTest(test.name, test.description, test.idCreator, test.category, test.type)
            let array_sections = test.sections
            array_sections.forEach(element => {
                let Section = this.createSection(element.name, element.description, element.id_test)
            });
            let array_questions = test.sections.questions
            array_questions.forEach(element => {
                let Question = this.createQuestion(element.questionText, element.idSection, element.type, element.obligatory)
            });
            return res.json(Test)
        }
        catch(e){
            next(e);
        }
    }

    async saveChangedTest(req, res, next){
        try{
            const {test} = req.body
            const Test = await this.changeTest(test.testId, test.name, test.description, test.idCreator, test.category, test.type)
            let array_sections = test.sections
            array_sections.forEach(element => {
                let Section = this.changeSection(element.idSection, element.name, element.description)
            });
            let array_questions = test.sections.questions
            array_questions.forEach(element => {
                let Question = this.changeQuestion(element.questionId, element.questionText, element.type, element.obligatory)
            });
            return res.json(Test)
        }
        catch(e){
            next(e);
        }
    }
}

module.exports = new UserController()