const winston = require("winston");
const pool = require("../db/database")

const logger = require('../logs/logger'); 



class Login {
    static async login(req, res) {
        const { emp_id, name, email_id, mobile_number, national_id,password } = req.body;
        const query1 = `SELECT * FROM employee WHERE email_id='${email_id}'`
        const find = await pool.query(query1);

        if (find.rowCount == 0) {
            logger.error('error','inavlid details')
            res.status(409).json({
                "payload": [
                    {
                        "Message": "Employee does not exist try with another email_id"
                    }
                ],
                "errors": [],
                "success": false
            });
           

        }
        else {
            const query = `SELECT * FROM employee where email_id='${email_id}' and password='${password}'`
             await pool.query(query);

             logger.error('info','succesfully login ')

            res.status(200).json({
                "payload": [
                    {
                        "Message": "login Sucssesful"
                    }
                ],
                "errors": [],
                "success": true
            });
        }

    } catch (error) {
        res.send({
            message:'error'
        })
        logger.error('error','inavlid details')
    }

}



module.exports = Login;

            