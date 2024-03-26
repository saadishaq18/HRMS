const express = require('express')
const employeeSalaryRoute = require('./employeeSalaryRoute')
const payrollItemRoute = require('./payrollItemRoutes')

const router = express.Router()

router.use('/salary', employeeSalaryRoute)
router.use('/payroll_items', payrollItemRoute)

module.exports = router