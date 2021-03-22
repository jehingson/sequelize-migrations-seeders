const express = require('express')
const router = express.Router();
// Importamos el controlador
const UserController = require('../controllers/UserController')
const AddressController = require('../controllers/AddressController')

// Home
router.get('/', (req, res) => res.json({messages: "Hola mundo"}))

// Users
router.get('/users', UserController.all)

// Address
router.get('/address', AddressController.all )

module.exports = router;