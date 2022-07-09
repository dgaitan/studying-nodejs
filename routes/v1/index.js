var router = require('express').Router()

router.use('/jobs', require('./jobs'))

module.exports = router