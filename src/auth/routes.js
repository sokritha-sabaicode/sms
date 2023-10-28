const express = require('express');
const kindeClient = require('../../services/kinde')
const controller = require('./controllers')

const router = express.Router();

router.get('/login', kindeClient.login(), controller.login);
router.get('/register', kindeClient.register(), controller.register);
router.get('/callback', kindeClient.callback(), controller.callback);
router.get('/createOrg', kindeClient.createOrg(), controller.createOrg);

module.exports = router;