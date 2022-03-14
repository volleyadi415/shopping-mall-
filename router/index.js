const express =require("express");
const login = require("../controllers/Login");
const login = require("../controllers/delete");
const controller = require("../controllers/controller")
const router = express.Router();

const routes =require("./router");
router.use("/",routes);

module.exports = router;