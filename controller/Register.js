const winston = require("winston");
const pool = require("../db/database");
const logger = require('../logs/logger');

class Controller {
    static async controller(req, res) {
        try {


            let { emp_id, name, email_id, mobile_number, national_id, password } = req.body;
           
            if (password.length > 8 && password !=null ) {
                console.log("password is correct")
                const find = await pool.query(`select * from employee where email_id='${email_id}'`)
                
                if (find.rowCount > 0) {
                    logger.error('error','inavlid details')
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
                    
                    loggererror('info','succesfully login ')
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
                logger.error('error','inavlid details')
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


        }

        catch (err) {
            console.log(err)
            logger.error('error','inavlid details')

        }


    }
}



module.exports = Controller;

