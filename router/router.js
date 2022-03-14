const express= require("express");
const Controller =require("../controller/controller");
const router = express.Router();

router.post("/register",Controller.controller);
router.post("/test",Controller.test);

router.get("/login",Controller.login);


module.exports =router;