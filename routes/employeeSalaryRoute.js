const express = require('express')
const { handleAddSalary, handleGetSalary, handleGetSalaryById, handleUpdateSalary, handleDeleteSalary } = require('../controller/employeeSalaryController')


const router = express.Router()

router.post('/', handleAddSalary)
router.get('/', handleGetSalary)
router.get('/:id', handleGetSalaryById)
router.patch('/:id', handleUpdateSalary)
router.delete('/:id', handleDeleteSalary)

module.exports = router