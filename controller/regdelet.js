const pool = require("../db/database");
class Regdelet {
    static async regdelet(req, res) {
        try {
            const {emp_id,name,email_id,mobile_number,national_id,password}=req.body;
            const query1 = `SELECT * FROM employee WHERE email_id='${email_id}'`
            const find = await pool.query(query1);

            if(find.rowCount == 0){
        
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

                const del = await pool.query(query);

                console.log(query)

                    if (del.rowCount > 0) {

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
            }

        } catch (error) {
            console.log(error)
        }


    }
}

module.exports =Regdelet;