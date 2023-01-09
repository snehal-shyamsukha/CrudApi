const express = require('express')
const UserController = require('../controllers/students')
const router = express.Router();

router.post('/create', UserController.create);
router.patch('/update', UserController.update);
router.get('/', UserController.findAll);
router.get('/getbyid', UserController.findOne);
router.delete('/', UserController.destroy);
module.exports = router