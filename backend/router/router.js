const Router = require('express').Router
const UserController = require('../controllers/userController')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewear/authMiddleware')

router.post('/registration',
            body('email').isEmail(),
            body('password').isLength({min: 6, max: 100}),
            UserController.registration
)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activate)
router.get('/refresh', UserController.refresh)
//router.get('/someMethod', authMiddleware, 'userController.someMethod')

module.exports = router
