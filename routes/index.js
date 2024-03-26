const express = require('express')
const payrollRoute = require('./payrollRoute')

const router = express.Router()

router.use('/payroll', payrollRoute)

module.exports  = router