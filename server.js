const http = require("http");
const variables = require("./variables");

const server = http.createServer(async (req, res) => {

    let found = false;

    for (let i = 0; i < variables.length; i++) {
        const variable = variables[i];
        
        if (req.url.toUpperCase() === `/${variable.key}` && req.method === "GET") {
            found = true;
            res.writeHead(200, { "Content-Type": "application/text" });            
            res.end(variable.value);
        }
    }

    if (!found) {
        res.writeHead(404, { "Content-Type": "application/text" });
        res.end("Not found");
    }

});

module.exports = server;