const Errors = require('./errors')
const tokenService = require('../service/tokenService')

module.exports = function (req, res, next){
    try{
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader){
            return next(Errors.NoLogin())
        }
        const accessToken = authorizationHeader.split(' ')[1]
        console.log(accessToken)
        if (!accessToken){
            return next(Errors.NoLogin())
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData){
            return next(Errors.NoLogin())
        }
        req.user = userData
        next()
    }
    catch(e){
        return next(Errors.NoLogin())
    }
}