const mysql = require("mysql");

let connection = mysql.createConnection({
    port: 8000,
    host: "localhost",
    user: "root",
    password: "Ksm@0192",
})

connection.connect((err) => {
    if (err)
        console.log(err);
    else
        console.log("Connected")
})

connection.query("create database jack;", function (err, result, fields) {
    if (err)
        throw err;
    console.log(result)
})
