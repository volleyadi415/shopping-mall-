const pool = require("../db/database");
class Regdelet {
    static async regdelet(req, res) {
        try {
            const{email_id}= req.body;
            
            const query2 =`delete from employee where email_id='${email_id}'`
            const deleteuser = await pool.query(query2);

console.log(query2)

            if(deleteuser.rowCount>0) {
                res.status(200).json({
                    "payload": [
                        {
                            "Message": "record delete"
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
                            "Message": "record not found"
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

module.exports =Regdelet;
