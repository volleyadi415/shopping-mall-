const pool = require("../db/database");

class Login {
    static async login(req, res) {
        try {
            const{email_id,password}= req.body;
            
            const query2 =`select * from employee where email_id='${email_id}' and password ='${password}'`
            const find = await pool.query(query2);

            if(find.rowCount>0) {
                res.status(200).json({
                    "payload": [
                        {
                            "Message": "login Sucssesfull"
                        }
                    ],
                    "errors": [],
                    "success": true
                });
            }
            else {

                res.status(403).json({
                    "payload": [
                        {
                            "Message": "invalid credentials"
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

}

module.exports = Login;

            