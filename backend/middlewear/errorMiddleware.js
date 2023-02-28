const Errors = require('./errors')
module.exports = function(err, req, res, next){
    console.log(err)
    if (err instanceof Errors){
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    return res.status(500).json({message: "Непредвиденная ошибка"})
}