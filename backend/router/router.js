const Router = require('express').Router
const UserController = require('../controllers/userController')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewear/authMiddleware')

router.post('/registration',
            body('email').isEmail(),
            body('password').isLength({min: 8, max: 100}),
            UserController.registration
)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.post('/create/test', authMiddleware, UserController.test)
router.post('/create/section', authMiddleware, UserController.section)
router.post('/create/question', authMiddleware, UserController.question)
router.post('/create/answer', authMiddleware, UserController.answer)
router.get('/user/tests', authMiddleware, UserController.getUserTests)
router.get('/user/test', authMiddleware, UserController.getTest)

module.exports = router
