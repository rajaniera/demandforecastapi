const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/sales", controller.getSalesData);
router.get("/forecast/:product_id", controller.getForecast);

module.exports = router;
