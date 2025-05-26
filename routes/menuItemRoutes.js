const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');

router.post('/', menuItemController.createMenuItem);
router.get('/', menuItemController.getAllMenuItems);

module.exports = router;
