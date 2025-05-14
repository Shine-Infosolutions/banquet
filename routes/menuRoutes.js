const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router.post("/menu-items", menuController.addMenuItem);
router.get("/menu-items", menuController.getMenuItems);

module.exports = router;
