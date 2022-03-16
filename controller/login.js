const pool = require("../db/database");

class Login {
    static async login(req, res) {
        const { emp_id, name, email_id, mobile_number, national_id,password } = req.body;
        const query1 = `SELECT * FROM employee WHERE email_id='${email_id}'`
        const find = await pool.query(query1);

        if (find.rowCount == 0) {

            res.status(409).json({
                "payload": [
                    {
                        "Message": "Employee does not exist try with another email_id"
                    }
                ],
                "errors": [],
                "success": false
            })

        }
        else {
            const query = `SELECT * FROM employee where email_id='${email_id}' and password='${password}'`
            const find1 = await pool.query(query);

            res.status(200).json({
                "payload": [
                    {
                        "Message": "login Sucssesful"
                    }
                ],
                "errors": [],
                "success": false
            });
        }

    } catch (error) {
        console.log(error)
    }

}



module.exports = Login;

            