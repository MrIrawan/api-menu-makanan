const express = require('express');
const router = express.Router();

const { storeMenuHandler } = require("../handler/menu")

router.get("/store-menu", storeMenuHandler);