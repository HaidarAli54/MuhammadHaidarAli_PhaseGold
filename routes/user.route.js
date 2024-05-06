const express = require('express')
const router = express.Router()
const {testUserHealth} = require ('../handler/user.handler')


router.get('/user-health',testUserHealth)


 
module.exports = router