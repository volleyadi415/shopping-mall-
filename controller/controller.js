const pool=require("../db/database");

class Controller {
    static async controller(req,res){
        try{
          //const name = req.body.name;
        
            const {emp_id,name,email_id,mobile_number,national_id,password }  = req.body;

           
            console.log(emp_id);
            console.log(name);
            console.log(email_id);
            console.log(mobile_number);
            console.log(national_id);
            console.log(password);
  
            
        await pool.query('insert into employees (emp_id,name,email_id,mobile_number,national_id,password ) values (?,?,?,?,?,?)',
                [emp_id, name, email_id, mobile_number, national_id, password],
                (err, result) => {
                    console.log(err)
                    res.status(200).json({
                        "payload": [
                            {
                                "Message": "Employee Added"
                            }
                        ],
                        "errors": [],
                        "success": true
                    });
                });

                console.log("employee added")
        }
        catch(err){
            console.log(err)

        }


    }
    static async login(req,res){
        try{
            pool.query("select * from  employees",(err,results)=>{
                if (err) throw err;
                res.status(200). json(results.rows);
                console.log("record display")
        });
        }catch(error){

        }
    }
    static async login(req,res){
        try{
            pool.query("select * from  employees",(err,results)=>{
                if (err) throw err;
                res.send(results.rows);
        });
        }catch(error){

        }
    }
    static async test(req,res){
        try{
                res.send("testing");
        
        }catch(error){

        }
    }
}

    module.exports=Controller;

    