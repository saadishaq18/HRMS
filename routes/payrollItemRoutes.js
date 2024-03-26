const express = require('express')
const additionRoute = require('./additionRoute')

const router = express.Router()

router.use('/addition', additionRoute)
// router.use('/overtime',)
// router.use('/deduction')

module.exports = router