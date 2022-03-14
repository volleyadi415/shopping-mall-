const pool = require("../db/database");

class Controller {
    static async controller(req, res) {
        try {
           

            const { emp_id, name, email_id, mobile_number, national_id, password } = req.body;


            console.log(emp_id);
            console.log(name);
            console.log(email_id);
            console.log(mobile_number);
            console.log(national_id);
            console.log(password);

            const query1 = `insert into employee values ('${emp_id}','${name}','${email_id}','${mobile_number}','${national_id}','${password}')`
            await pool.query(query1);
            res.status(200).json({
                "payload": [
                    {
                        "Message": "Employee Added"
                    }
                ],
                "errors": [],
                "success": true
            });

           
        }
        catch (err) {
            console.log(err)

        }


    }
    
}

module.exports = Controller;

