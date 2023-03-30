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

router.post('/save/changes', authMiddleware, UserController.saveChanges)
router.post('/create/type', authMiddleware, UserController.createTypeOfTest)
router.post('/create/test', authMiddleware, UserController.createTest)
router.post('/rename/test', authMiddleware, UserController.renameTest)
router.post('/change/private', authMiddleware, UserController.changePrivateOfTest)
router.post('/delete/test', authMiddleware, UserController.deleteTest)

router.post('/create/section', authMiddleware, UserController.createSection)
router.post('/create/question', authMiddleware, UserController.createQuestion)
router.post('/create/answer', authMiddleware, UserController.createAnswer)
router.get('/user/tests/:idCreator', authMiddleware, UserController.getUserTests)
router.get('/user/test/:testId', authMiddleware, UserController.getTest)

module.exports = router
