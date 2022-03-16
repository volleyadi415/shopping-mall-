const pool = require("../db/database");

class Controller {
    static async controller(req, res) {
        try {


            let { emp_id, name, email_id, mobile_number, national_id, password } = req.body;
             console.log(emp_id);
            console.log(name);
            console.log(email_id);
            console.log(mobile_number);
            console.log(national_id);
            console.log(password);

            if (password.length > 8 && password !=null ) {
                console.log("password is correct")
                const find = await pool.query(`select * from employee where email_id='${email_id}'`)
                
                if (find.rowCount > 0) {
                    res.status(409).json({
                        "payload": [
                            {
                                "Message": "email_id already registered plz try with different email_id"
                            }
                        ],
                        "errors": [], 
                        "success": false
                    });
                }
                else {
                    const query1 = `insert into employee values ('${emp_id}','${name}','${email_id}','${mobile_number}','${national_id}','${password}')`
                    await pool.query(query1);
                    res.status(200).json({
                        "payload": [
                            {
                                "Message": "employee added"
                            }
                        ],
                        "errors": [],
                        "success": true
                    });


                }

            }

            else {
                console.log("password is incorrect")
                res.status(403).json({
                    "payload": [
                        {
                            "Message": "password is invalid"
                        }
                    ],
                    "errors": [],
                    "success": false
                });

            }




            //     const query1 = `insert into employee values ('${emp_id}','${name}','${email_id}','${mobile_number}','${national_id}','${password}')`
            //     await pool.query(query1);
            //     res.status(200).json({
            //         "payload": [
            //             {
            //                 "Message": "Employee Added"
            //             }
            //         ],
            //         "errors": [],
            //         "success": true
            //     });


        }

        catch (err) {
            console.log(err)

        }


    }
}



module.exports = Controller;

