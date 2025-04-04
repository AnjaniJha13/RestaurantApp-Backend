const express = require('express')
const { testUserController } = require('../controllers/testControllers')


//router object
const router = express.Router()

//routes GET | POST | UPDATE | DELETE
router.get('/test-user',testUserController)

//export
module.exports = router
