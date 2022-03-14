const express =require("express");
const controller = require("../controllers/controller")
const router = express.Router();

const routes =require("./router");
router.use("/",routes);

module.exports = router;