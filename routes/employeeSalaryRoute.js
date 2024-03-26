const express = require('express')
const { handleAddSalary } = require('../controller/employeeSalaryController')


const router = express.Router()

router.post('/', handleAddSalary)
// router.get('/')
// router.get('/:id')
// router.patch('/:id')
// router.delete('/:id')

module.exports = router