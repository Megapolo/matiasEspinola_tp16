const fs = require('fs')
let bicis = fs.readFileSync("./bicicletas.json")
bicis = JSON.parse(bicis)

module.exports = bicis
