const jwt = require('jsonwebtoken');
const Token = require('../models/tokenModel')
class tokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.ACCESS, {expiresIn: '60m'})
        const refreshToken = jwt.sign(payload, process.env.REFRESH, {expiresIn: '30d'})
        return{
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token){
        try {
            const userData = jwt.verify(token, process.env.ACCESS)
            return userData
        }
        catch(e){
            return null
        }
    }

    validateRefreshToken(token){
        try {
            const userData = jwt.verify(token, process.env.REFRESH)
            return userData
        }
        catch(e){
            return null
        }
    }

    async saveToken(id, refreshToken){
        console.log(id, refreshToken)
        const tokenData = await Token.findOne({where: {
            user: id
        }})
        if (tokenData != null){
            tokenData.RefreshToken = refreshToken
            return tokenData.save()
        }
        const newToken = Token.build({
            id: id,
            user: id,
            RefreshToken: refreshToken
        })
        console.log(newToken)
        await newToken.save()
        return newToken
    }

    async deleteToken(refreshToken){
        const tokenData = await Token.destroy({ where:{
                RefreshToken: refreshToken
            }
        })
        return tokenData
    }

    async findToken(refreshToken){
        const tokenData = await Token.findOne({ where:{
            RefreshToken: refreshToken
        }
    })
        return tokenData
    }
}

module.exports = new tokenService()