const express = require('express')
const UserController = require('../controllers/students')
const router = express.Router();

router.post('/create', UserController.create);
router.patch('/update/:id', UserController.update);
router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.delete('/:id', UserController.destroy);
module.exports = router