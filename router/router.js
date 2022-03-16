const express= require("express");
//const { controller } = require("../controller/RegisterController");
const Controller =require("../controller/RegisterController");
const login = require('../controller/Login')
const Regdelet= require('../controller/regdelet')
const router = express.Router();
const Update= require('../controller/Update')

router.post("/register",Controller.controller);

router.post("/login",login.login);
router.delete("/delete",Regdelet.regdelet);
router.put("/updates",Update.Update);


module.exports =router;