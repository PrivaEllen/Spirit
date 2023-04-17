const Router = require('express').Router
const UserController = require('../controllers/userController')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewear/authMiddleware')
const userController = require('../controllers/userController')

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
router.post('/create/test', authMiddleware, UserController.saveTest)
router.post('/save/test', authMiddleware, userController.saveChangedTest)
router.post('/rename/test', authMiddleware, UserController.renameTest)
router.post('/change/private', authMiddleware, UserController.changePrivateOfTest)
router.post('/delete/test', authMiddleware, UserController.deleteTest)

router.get('/user/tests/:idCreator', authMiddleware, UserController.getUserTests)
router.get('/user/test/:testId', authMiddleware, UserController.getTest)
router.get('/user/types', authMiddleware, UserController.getTypes)

module.exports = router
