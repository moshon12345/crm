import { con } from '../sqlConnect';

let googleUser = '';

export function GoogleSignUp(req, res) {
    googleUser = req.body;
    const sqlQueryCheck = "SELECT * FROM `users` WHERE `userName`=? AND `password`=MD5(?)";
    const paramArrCheck = [googleUser.name.trim()+googleUser.id.trim(), googleUser.id.trim()];

con.query(sqlQueryCheck, paramArrCheck, (err, result) => {
        if (!result.length) {
            // console.log('אין דבר כזה בדטה בייס אז רשמתי בדטה בייס')
            const sqlQuery = "INSERT INTO `users`(`createdTime`, `fullName`, `email`, `userName`, `password`) VALUES (CURRENT_TIME, ?, ?, ?, MD5(?))";
            const paramArr = [req.body.name, req.body.email, req.body.name+req.body.id, req.body.id];

        con.query(sqlQuery, paramArr, (err, result) => {
        if (err) {
            throw err;
        } 
       res.send(result);   
});  

} else {
        delete req.session.user;
    if (!req.session.attempts) {
        req.session.attempts = 0;
    }
    if (req.session.attempts >= 7) {
        res.send({
            status: 'error',
            message: "נסיונות חיבור מרובים",
        });
        return;
    }
    const sqlQuery = "SELECT * FROM `users` WHERE `userName`=? AND `password`=MD5(?)";
    const paramArr = [googleUser.name.trim()+googleUser.id.trim(), googleUser.id.trim()];
    con.query(sqlQuery, paramArr, (err, result) => {
    if (err) {
            console.log(err);

            req.session.attempts++;

            res.send({
                status: 'error',
                message: "שגיאה לא מוגדרת",
            });

            return;
    }
    if (!result.length) {
            req.session.attempts++;
            res.send({
                status: 'error',
                message: "שם משתמש או סיסמה לא נכונים",
            });
    } else {
            delete req.session.attempts;
            const user = result[0];
            req.session.user = user;

            res.send({
                status: 'success',
                user,
            });
    } 
    });
        } 
    }); 
} 

export function googleLogIn(req, res) {

    console.log("LoginPoel")
    // const sqlQuery = "SELECT * FROM `users` WHERE `userName`=? AND `password`=MD5(?)";
    // const paramArr = [googleUser.name.trim(), googleUser.id.trim()];

    // con.query(sqlQuery, paramArr, (err, result) => {
    //     console.log(result)
        // if (err) {
        //     console.log(err);

        //     res.send({
        //         status: 'error',
        //         message: "שגיאה לא מוגדרת",
        //     });

        //     return;
        // }

        // if (!result.length) {

        //     res.send({
        //         status: 'error',
        //         message: "שם משתמש או סיסמה לא נכונים",
        //     });
        // } else {
        //     const user = result[0];

        //     res.send({
        //         status: 'success',
        //         user,
        //     });
        // }
    // });
}