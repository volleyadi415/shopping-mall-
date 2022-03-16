const pool = require("../db/database");
class Update {
    static async Update(req, res) {
        try {
            //const{email_id}= req.params.email_id
           // const { emp_id, name,mobile_number,national_id, password } =

        
            let email_id = req.body.email_id //body

            let { emp_id, name, mobile_number, national_id, password } = req.body

            const find = await pool.query(`select * from employee where email_id='${email_id}'`)
            console.log(find)

            if (find.rowCount == 0) {
                // throw error
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

                res.send("emp updated")
                // console.log(query1)
                // console.log(put)

            //     if (put.rowCount > 0) {

            //         res.status(200).json({
            //             "payload": [
            //                 {
            //                     "Message": "Employee Updated"
            //                 }
            //             ],
            //             "errors": [],
            //             "success": true
            //         });



            //     } else {

            //         res.status(404).json({
            //             "payload": [
            //                 {
            //                     "Message": "Employee Not Found"
            //                 }
            //             ],
            //             "errors": [],
            //             "success": false
            //         });
            //     }
            }

        } catch (error) {
            console.log(error)
        }

    }
}

module.exports =Update;
