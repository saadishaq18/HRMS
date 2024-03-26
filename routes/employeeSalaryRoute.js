const express = require('express')
const { handleAddSalary, handleGetSalary, handleGetSalaryById, handleUpdateSalary } = require('../controller/employeeSalaryController')


const router = express.Router()

router.post('/', handleAddSalary)
router.get('/', handleGetSalary)
router.get('/:id', handleGetSalaryById)
router.patch('/:id', handleUpdateSalary)
// router.delete('/:id')

module.exports = router