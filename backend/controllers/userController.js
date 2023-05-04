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

    async getUserTests(req, res, next){
        try{
            const idCreator = req.params.idCreator
            const userTests = await userService.getUserTests(idCreator)
            return res.json(userTests)
        }
        catch(e){
            next(e)
        }
    }

    async getTest(req, res, next){
        try{
            const testId = req.params.testId
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
            console.log(test)
            let createdTest
            if (req.files != null){
                const {img} = req.files
                let fileName = uuid.v4() + ".png"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                createdTest = await testService.createTest(test.name, test.idCreator, test.category, test.type, {img: fileName})
            }
            else{
                createdTest = await testService.createTest(test.name, test.idCreator, test.category, test.type)
            }

            if (test.sections){
                let array_sections = test.sections
                let currentSection
                let currentQuestion
                let currentAnswer
                for (let i = 0; i < array_sections.length; i++){
                    currentSection = await testService.createSection(array_sections[i].name, array_sections[i].description, createdTest.test.testId)
    
                    if (array_sections[i].questions){
                        let array_questions = array_sections[i].questions
                        for (let j = 0; j < array_questions.length; j++){
                            if (req.files != null){
                                const {img} = req.files
                                let fileName = uuid.v4() + ".png"
                                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                                currentQuestion = await testService.createQuestion(array_questions[j].questionText, currentSection.section.sectionId, array_questions[j].type, array_questions[j].obligatory, {img: fileName})
                            }
                            else{
                                currentQuestion = await testService.createQuestion(array_questions[j].questionText, currentSection.section.sectionId, array_questions[j].type, array_questions[j].obligatory)
                            }

                            if (array_questions[j].answers){
                                let array_answers = array_questions[j].answers
                                for (let k = 0; k < array_answers.length; k++){
                                    currentAnswer = await testService.createAnswer(array_answers[k].text, array_answers[k].correctness, currentQuestion.question.questionId)
                                }
                            }
                        }
                    }
                    
                }
            }
            
            return res.json(1);
        }
        catch(e){
            next(e);
        }
    }

    async saveChangedTest(req, res, next){
        try{
            const {test} = req.body
            console.log(test)

            const changedTest = await userService.deleteTest(test.testId)

            let createdTest
            if (req.files != null){
                const {img} = req.files
                let fileName = uuid.v4() + ".png"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                createdTest = await testService.createTest(test.name, test.idCreator, test.category, test.type, {img: fileName})
            }
            else{
                createdTest = await testService.createTest(test.name, test.idCreator, test.category, test.type)
            }

            if (test.sections){
                let array_sections = test.sections
                let currentSection
                let currentQuestion
                let currentAnswer
                for (let i = 0; i < array_sections.length; i++){
                    currentSection = await testService.createSection(array_sections[i].name, array_sections[i].description, createdTest.test.testId)
    
                    if (array_sections[i].questions){
                        let array_questions = array_sections[i].questions
                        for (let j = 0; j < array_questions.length; j++){
                            if (req.files != null){
                                const {img} = req.files
                                let fileName = uuid.v4() + ".png"
                                img.mv(path.resolve(__dirname, '..', 'static', fileName))
                                currentQuestion = await testService.createQuestion(array_questions[j].questionText, currentSection.section.sectionId, array_questions[j].type, array_questions[j].obligatory, {img: fileName})
                            }
                            else{
                                currentQuestion = await testService.createQuestion(array_questions[j].questionText, currentSection.section.sectionId, array_questions[j].type, array_questions[j].obligatory)
                            }

                            if (array_questions[j].answers){
                                let array_answers = array_questions[j].answers
                                for (let k = 0; k < array_answers.length; k++){
                                    currentAnswer = await testService.createAnswer(array_answers[k].text, array_answers[k].correctness, currentQuestion.question.questionId)
                                }
                            }
                        }
                    }
                    
                }
            }
            
            return res.json(1)
        }
        catch(e){
            next(e);
        }
    }

    async send(req, res, next){
        try{
            console.log('ahaha')
            const email = req.body
            await userService.send(email)
            return 1
        }
        catch(e){
            next(e)
        }
    }

    async pass(req, res, next){
        try{
            return res.redirect(`${process.env.FRONTEND_URL}/test/client`)
        }
        catch(e) {
            next(e);
        }
    }
}

module.exports = new UserController()