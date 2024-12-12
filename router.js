const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/getUsers', controller.getUsers);
router.post('/addUser', controller.addUsers);
router.put('/updateUser', controller.updateUser);
router.delete('/deleteUser', controller.deleteUser);

module.exports = router;