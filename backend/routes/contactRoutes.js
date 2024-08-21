const express = require('express');
const { saveMessage } = require('../controllers/contactController');

const router = express.Router();

router.post('/', saveMessage);

module.exports = router;