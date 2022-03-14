const pool = require('./db/database')                       
const express =require("express");
const router = require('./router/router');
const app = express();




app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/",router);
const PORT = 3435;
app.listen(PORT,()=>{
    console.log( `This users app listening at : http://localhost:${PORT}`);

});


