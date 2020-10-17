const server = require("./app");

server.listen(process.env.PORT || 8000);

console.log("Server Runing", process.env.PORT || 8000)