const HrUser = require('../models/hrUser')
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mailService');
const tokenService = require('./tokenService');
const Errors = require('../middlewear/errors')
const userDto = require('../dto/userDto')
class userService {
    async registration(Name, Surname, email, password, Photo) {
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
                Photo: Photo,
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
        console.log(token.refreshToken)
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
}


module.exports = new userService()