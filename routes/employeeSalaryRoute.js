const express = require('express')
const { handleAddSalary, handleGetSalary, handleGetSalaryById } = require('../controller/employeeSalaryController')


const router = express.Router()

router.post('/', handleAddSalary)
router.get('/', handleGetSalary)
router.get('/:id', handleGetSalaryById)
// router.patch('/:id')
// router.delete('/:id')

module.exports = router