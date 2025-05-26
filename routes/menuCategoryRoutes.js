const express = require('express');
const router = express.Router();
const menuCategoryController = require('../controllers/menuCategoryController');

router.post('/', menuCategoryController.createMenuCategory);
router.get('/', menuCategoryController.getAllMenuCategories);
router.get('/:id', menuCategoryController.getMenuCategoryById);
router.put('/:id', menuCategoryController.updateMenuCategory);
router.delete('/:id', menuCategoryController.deleteMenuCategory);

module.exports = router;
// 