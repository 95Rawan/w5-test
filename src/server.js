const http = require("http");
const router = require("./router");

const port = 3000;

const server = http.createServer(router);

server.listen(port, () => console.log(`Server up and running on http://localhost:${port}`));
