const mysql = require("mysql");

let connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "password",
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

connection.query("use jack;", function (err, result, fields) {
    if (err)
        throw err;
    console.log(result)
})

connection.query("create table user(name varchar(50) not null,age int(3) not null);", function (err, result, fields) {
    if (err)
        throw err;
    console.log(result)
})

connection.query("desc user;", function (err, result, fields) {
    if (err)
        throw err;
    console.log(result)
})