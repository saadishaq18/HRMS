const express = require('express')


const router = express.Router()

router.post('/')
router.get('/')
router.get('/:id')
router.patch('/:id')
router.delete('/:id')

module.exports = router