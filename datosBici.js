const {readFileSync} = require('fs')
let bicis = readFileSync("./bicicletas.json")
bicis = JSON.parse(bicis)

module.exports = bicis
