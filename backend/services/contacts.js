import { con } from "../sqlConnect";

export function getContacts(req, res) {
    con.query("SELECT * FROM `contacts`", (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}

export function addContact(req, res) {
       const sqlQuery = "INSERT INTO `contacts` (`createdTime`, `firstName`, `lastName`, `birthday`, `email`, `phone`, `state`, `country`, `city`, `street`, `houseNumber`, `zipCode`, `notes`) VALUES (CURRENT_TIME, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const paramArr = [req.body.firstName, req.body.lastName, req.body.birthday, req.body.email, req.body.phone, req.body.state, req.body.country, req.body.city, req.body.street, req.body.houseNumber, req.body.zip, req.body.notes];

    con.query(sqlQuery, paramArr, (err, result) => {
        if (err) {
            throw err;
        }

       res.send(result);
    });
}

export function deleteContact(req, res) {
    con.query("DELETE FROM `contacts` WHERE `contacts`.`id` = ?", [req.params.contactId], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}

export function getContact(req, res) {
con.query("SELECT * FROM `contacts` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length) {
            res.send(result[0]);
        } else {
            res.send();
        }
    });
}

export function updateContact(req, res) {
    con.query("UPDATE `contacts` SET `firstName` = ?, `lastName` = ?, `birthday` = ?, `email` = ?, `phone` = ?, `state` = ?, `country` = ?, `city` = ?, `street` = ?, `houseNumber` = ?, `zipCode` = ?, `notes` = ? WHERE `id` = ?", [req.body.firstName, req.body.lastName, req.body.birthday, req.body.email, req.body.phone, req.body.state, req.body.country, req.body.city, req.body.street, req.body.houseNumber, req.body.zipCode, req.body.notes, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

export function getContactDetails(req, res) {
con.query("SELECT * FROM `contacts` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length) {
            res.send(result[0]);
        } else {
            res.send();
        }
    });
}

export function getContactSearch(req, res) {
    con.query('SELECT title FROM ? WHERE ? LIKE "%?%"', [req.params.search, req.params.select, req.params.search], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length) {
            res.send(result[0]);
        } else {
            res.send();
        }
    });
}