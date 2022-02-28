const http = require("http");
const variables = require("./variables");

const path = process.env.PATH || "";

const handleHealthProbe = (req, res) => {
  if (req.url === `${path}/health` && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/text" });
    res.end("OK");
    return true;
  }

  return false;
};

const handleGetVariable = (req, res) => {
  for (let i = 0; i < variables.length; i++) {
    const variable = variables[i];

    if (req.url.toUpperCase() === `${path.toUpperCase()}/${variable.key}` && req.method === "GET") {
      found = true;
      res.writeHead(200, { "Content-Type": "application/text" });
      res.end(variable.value);
      return true;
    }
  }

  return false;
};

const server = http.createServer(async (req, res) => {
  if (!(handleHealthProbe(req, res) || handleGetVariable(req, res))) {
    res.writeHead(404, { "Content-Type": "application/text" });
    res.end("Not found");
  }
});

module.exports = server;
