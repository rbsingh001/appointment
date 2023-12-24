const express = require('express');

const router = express.Router();
const userController = require('../controller/user');

router.get('/',userController.getUser );

router.post('/user', userController.addUser);

router.delete('/user/:id', userController.deleteUser);

module.exports = router;