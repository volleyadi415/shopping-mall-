const express= require("express");
const { controller } = require("../controller/controller");
const Controller =require("../controller/controller");
const login = require('../controller/Login')
const Regdelet= require('../controller/regdelet')
const router = express.Router();
const Update= require('../controller/Update')

router.post("/register",Controller.controller);

router.post("/login",login.login);
router.delete("/delete",Regdelet.regdelet);
router.put("/update",Update.Update);


module.exports =router;