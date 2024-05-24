const controller = require('../controllers/cliente.controller.js')
const router = require('express').Router();

router.post('/', controller.createCliente);

module.exports = router;