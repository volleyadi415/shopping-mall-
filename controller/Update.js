const winston = require("winston");
const pool = require("../db/database");

const logger = require('../logs/logger'); 
class Update {
    static async Update(req, res) {
        try {
           
            let { emp_id,email_id, name, mobile_number, national_id, password } = req.body

            const find = await pool.query(`select * from employee where email_id='${email_id}'`)

            if (find.rowCount == 0) {
                logger.error('error','inavlid details')
                res.send("employee not found")
            } else {

                if (emp_id == undefined || emp_id == "" || emp_id == null) {
                    emp_id = find.rows[0].emp_id;
                }
                if (name == undefined || name == "" || name == null) {
                    name = find.rows[0].name;
                }
                if (mobile_number == undefined || mobile_number == "" || mobile_number == null) {
                    mobile_number = find.rows[0].mobile_number;
                }
                if (national_id == undefined || national_id == "" || national_id == null) {
                    national_id = find.rows[0].national_id;
                }
                if (password == undefined || password == "" || password == null) {
                    password = find.rows[0].password;
                }

                console.log(national_id,password,mobile_number,emp_id,name);

                const query1 = `update employee set emp_id='${emp_id}',
                                name='${name}',mobile_number='${mobile_number}',
                                national_id='${national_id}',password='${password}' 
                                  WHERE email_id='${email_id}'`

                await pool.query(query1);
                
                loggererror('info','succesfully login ')

                res.status(200).json({
                    "payload": [
                        {
                            "Message": "Employee updated"
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

module.exports =Update;
