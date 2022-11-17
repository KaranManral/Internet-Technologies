const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello world, This is my Node.js server");
    res.end();
});

server.listen(10000, (err) => {
    if (err)
        throw err;
    console.log("Server Listening at 10000");
})