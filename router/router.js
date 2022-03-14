const express= require("express");
const { controller } = require("../controller/controller");
const Controller =require("../controller/controller");
//const Login = require("../controller/Login");
const login = require('../controller/Login')
const Regdelet= require('../controller/regdelet')
const router = express.Router();

router.post("/register",Controller.controller);

router.post("/login",login.login);
router.delete("/delete",Regdelet.regdelet);

module.exports =router;