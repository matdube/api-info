const prefix = process.env.PREFIX || "INFO_";

let variables = [];

Object.keys(process.env).forEach(key => {
    if (key.startsWith(prefix)) {
        variables.push({
            key: key.substring(prefix.length).toUpperCase(),
            value: process.env[key]
        });
    }
});

module.exports = variables;
