const winston = require("winston");
const pool = require("../db/database");
const logger = require("../logs/logger");

class Regdelet {
    static async regdelet(req, res) {
        try {
            const {email_id}=req.body;
            const query1 = `SELECT * FROM employee WHERE email_id='${email_id}'`
            const find = await pool.query(query1);

            if(find.rowCount == 0){
                logger.error('error','inavlid details')
        
                res.status(409).json({
                    "payload": [
                        {
                            "Message": "Employee does not exist try with another email id"
                        }
                    ],
                    "errors": [],
                    "success": false
                })

            }
            else{

                const query = `DELETE FROM EMPLOYEE WHERE email_id='${req.body.email_id}'`

             await pool.query(query);

            


             loggererror('info','succesfully login ')
                    res.status(200).json({
                        "payload": [
                            {
                                "Message": "Employee deleted"
                            }
                        ],
                        "errors": [],
                        "success": true
                    });
             
            
            }

        } catch (error) {
            console.log(error)
            logger.error('error','inavlid details')
        }


    }
}

module.exports =Regdelet;