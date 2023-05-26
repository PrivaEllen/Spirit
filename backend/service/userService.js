const HrUser = require('../models/hrUser')
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mailService');
const tokenService = require('./tokenService');
const Errors = require('../middlewear/errors')
const userDto = require('../dto/userDto');
const Tests = require('../models/Tests');
const Questions = require('../models/Questions');
const Answers = require('../models/Answers');
const Sections = require('../models/Sections');
const Types = require('../models/TypesOfTests');
const Interns = require('../models/Interns');
const HrInterns = require('../models/HrandInterns');

class userService {
    async registration(Name, Surname, email, password) {
        let check = await HrUser.findOne({
            where: {
                email: email
            }
        })
        if (check == null) {
            password = bcrypt.hashSync(password, 10)
            const activationLink = uuid.v4()
            const registr = HrUser.build({
                Name: Name,
                Surname: Surname,
                email: email,
                password: password,
                activationLink: activationLink
            })
            await registr.save()
            
            await mailService.sendActivationMail(email, `${process.env.BACKEND_URL}/spirit/activate/${activationLink}`)
            
            const user = new userDto(registr)
            const token = tokenService.generateTokens({ ...user })
            await tokenService.saveToken(user.id, token.refreshToken)

            return {
                ...token,
                user: user
            }
        }
        else {
            throw Errors.BadRequest('Почта уже занята')
        }
    }

    async activate(activationLink) {
        console.log('[ INFO ] activate')
        const user = await HrUser.findOne({
            where: {
                activationLink: activationLink
            }
        })
        if (user == null) {
            throw Errors.BadRequest("Некорректная ссылка активации")
        }
        user.isActivated = true
        await user.save()
    }

    async login(email, password) {
        let auth = await HrUser.findOne({
            where: {
                email: email
            }
        })

        if (auth == null) {
            throw Errors.BadRequest('Пользователь с таким email не найден')
        }
        
        const isPassword = await bcrypt.compareSync(password, auth.password)
        if (isPassword == false) {
            throw Errors.BadRequest('Неверный пароль')
        }
        const user = new userDto(auth)
        const token = tokenService.generateTokens({ ...user })
        await tokenService.saveToken(user.id, token.refreshToken)
        return {
            ...token,
            user: user
        }
    }

    async logout(refreshToken){
        const token = await tokenService.deleteToken(refreshToken)
        return token
    }

    async refresh(refreshToken){
        if (!refreshToken){
            throw Errors.NoLogin()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const find = await tokenService.findToken(refreshToken)
        if (userData == null || find == null){
            throw Errors.NoLogin()
        }
        const user = await HrUser.findOne({where: {
                id: userData.id
            }    
        })
        const dataUser = new userDto(user)
        const token = tokenService.generateTokens({ ...dataUser})
        await tokenService.saveToken(dataUser.id, token.refreshToken)
        return {
            ...token,
            dataUser: dataUser
       }
    }

    async saveChanges({id, Name, Surname, company, phone, emailForFeedback, Photo}){
        const currentHrUser = await HrUser.findOne({
            where: {
                id: id
            }
        })
        currentHrUser.Name = Name
        currentHrUser.Surname = Surname
        currentHrUser.company = company
        currentHrUser.phone = phone
        currentHrUser.emailForFeedback = emailForFeedback
        currentHrUser.Photo = Photo
        await currentHrUser.save()
        return currentHrUser
    }

    async changePhoto(testId, img){
        const currentTest = await Tests.findOne({
            where:{
                testId: testId
            }
        })
        currentTest.img = img
        await currentTest.save()
        return currentTest.img
    }

    async createTypeOfTest(name){
        const type = await Types.findOne({
            where: {
                name: name
            }
        })
        if (type == null) {
            const newType = Types.build({
                name: name
            })
            await newType.save()
            return {
                type: newType
            }
        }
        else {
            throw Errors.BadRequest('Такой тип теста уже был создан')
        }
    }

    async renameTest(testId, name){
        const newTest = await Tests.findOne({
            where: {
                testId: testId
            }
        })
        newTest.name = name
        await newTest.save()
        return {
            newTest: newTest
        }
    }

    async changePrivateOfTest(testId){
        const newTest = await Tests.findOne({
            where: {
                testId: testId
            }
        })
        newTest.private = !newTest.private
        await newTest.save()
        return {
            newTest: newTest
        }    
    }

    async deleteTest(testId){
        const test = await Tests.destroy({
            where: {
                testId: testId
            },
            include: [{
                model: Sections,
                include: [{
                    model: Questions,
                    include: [{
                        model: Answers,
                    }]
                }]
            }]
        })
        return {
            test: 1
        }
    }

    async getUserTests(idCreator){
        const userTests = await Tests.findAll({
            where: {
                idCreator: idCreator
            }
        })
        return {
            userTests: userTests
        }
    }

    async getTest(testId){
        const userTest = await Tests.findOne({
            where: {
                testId: testId
            },
            include: [{
                model: Sections,
                include: [{
                    model: Questions,
                    include: [{
                        model: Answers,
                    }]
                }]
            }]
        })    
        return {
            userTest: userTest
        }
    }

    async getTypes(){
        const types = await Types.findAll()
        return {
            types: types
        }
    }

    async send(testId, email, internId){
        await mailService.sendTest(email, `${process.env.FRONTEND_URL}/open/test/${testId}/${internId}`)
    }

    async addIntern(email, idHr){
        const check = await Interns.findOne({
            where:{
                email: email
            }
        })
        
        if (check == null){
            const intern = Interns.build({
                email: email
            })
            await intern.save()
            
            const relation = HrInterns.build({
                id_intern: intern.internId,
                id_hr: idHr
            })
            await relation.save()
            return{
                intern: intern
            }
        }
        else{
            const relation = await HrInterns.findOne({
                where:{
                    id_hr: idHr
                }
            })

            if (relation == null){
                const newRelation = HrInterns.build({
                    id_intern: check.internId,
                    id_hr: idHr
                })

                await newRelation.save()
            }

            return{
                intern: check
            } 
        }
    }

}


module.exports = new userService()