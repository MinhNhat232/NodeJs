const express = require('express')
const router = express.Router()
const { getHomePage, getSamplePage } = require('../controller/HomeController');

router.get('/', getHomePage)

// Khai bao route
router.get('/mn7', getSamplePage)

module.exports = router;