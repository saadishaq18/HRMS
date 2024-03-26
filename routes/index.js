const express = require('express')
const payrollRoute = require('./payrollRoute')

const router = express.Router()

router.use('/account', payrollRoute)

module.exports  = router