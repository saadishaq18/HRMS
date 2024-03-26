const express = require('express')
const employeeSalaryRoute = require('./employeeSalaryRoute')

const router = express.Router()

router.use('/salary', employeeSalaryRoute)

module.exports = router