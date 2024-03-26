const express = require('express')
const employeeSalaryRoute = require('./employeeSalaryRoute')

const router = express.Router()

router.use('/estimate', employeeSalaryRoute)

module.exports = router