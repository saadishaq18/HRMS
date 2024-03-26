const express = require('express')
const { handleaddAddition,
        handleGetAddition,
        handleGetAdditionById,
        handleUpdateAddition,
        handleDeleteAddition } = require('../controller/additionController')

const router = express.Router()

router.post('/', handleaddAddition)
router.get('/', handleGetAddition)
router.get('/:id', handleGetAdditionById)
router.patch('/:id', handleUpdateAddition)
router.delete('/:id', handleDeleteAddition)

module.exports = router