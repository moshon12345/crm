import mysql from 'mysql';

export const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crmproject',
});

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('Confirm: DB Connected @!@!');
});