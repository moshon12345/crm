import { con } from "../sqlConnect";

export function getCustomers(req, res) {
    // let isDeleted = 0;

    // if (req.query.deleted) {
    //     isDeleted = 1;
    // }
    con.query("SELECT * FROM `customers`", (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}


export function addCustomer(req, res) {
       const sqlQuery = "INSERT INTO `customers`(`createdTime`, `firstName`, `lastName`, `email`, `phone`, `companyName`, `position`, `firstConvSum`, `notes`) VALUES (CURRENT_TIME, ?, ?, ?, ?, ?, ?, ?, ?)";
    const paramArr = [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.companyName, req.body.position, req.body.firstConvSum, req.body.notes];

    con.query(sqlQuery, paramArr, (err, result) => {
        if (err) {
            throw err;
        }

       res.send(result);
    });
}

// "DELETE FROM `customers` WHERE `customers`.`id` = 17"

export function deleteCustomer(req, res) {
    // console.log(req.params.customerId)
    con.query("DELETE FROM `customers` WHERE `customers`.`id` = ?", [req.params.customerId], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}

export function getCustomer(req, res) {
con.query("SELECT * FROM `customers` WHERE `id` = ?", [req.params.id], (err, result) => {
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

export function updateCustomer(req, res) {
    // console.log(req.params.id);
    con.query("UPDATE `customers` SET `firstName` = ?, `lastName` = ?, `email` = ?, `phone` = ?, `companyName` = ?, `position` = ?, `firstConvSum` = ?, `notes` = ? WHERE `id` = ?", [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.companyName, req.body.position, req.body.firstConvSum, req.body.notes, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

export function getCustomerDetails(req, res) {
con.query("SELECT * FROM `customers` WHERE `id` = ?", [req.params.id], (err, result) => {
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