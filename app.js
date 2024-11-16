const bicicletas = require("./datosBici")
const dhBici = {
    bicicletas,
    buscarBici: function (id) {
        let biciEncontrada = this.bicicletas.filter(bici => bici.id == id);
        return biciEncontrada.length > 0 ? biciEncontrada[0] : null;
    },
    venderBici: function (id) {
        let bici = this.buscarBici(id);
        if (bici && !bici.vendida) {
            bici.vendida = true;
            return `La bicicleta con el ID ${id} ("${bici.marca} ${bici.modelo}" rodado ${bici.rodado}) fue vendida con éxito.`;
        } else if (bici && bici.vendida) {
            return `La bicicleta con el ID ${id} ("${bici.marca} ${bici.modelo}" rodado ${bici.rodado}) ya estaba vendida.`;
        } else {
            return `No se encontró ninguna bicicleta con ID ${id}.`;
        }
    },
    biciParaLaVenta: function () {
            return this.bicicletas.filter(bici => !bici.vendida);
    },
    totalDeVentas: function () {
        return this.bicicletas.filter(bici => bici.vendida).reduce((total, bici) => total + bici.precio, 0);
    },
    listarTodasLasBicis: function () {
        let marcas = []
        for (let nombres of this.bicicletas) {
            marcas.push(nombres.marca)
            marcas.push(nombres.modelo)
        }
        return marcas
    },
    aumentoBici: function (aumento) {
        this.bicicletas.map(function (elemento) {
            elemento.precio = elemento.precio*(aumento/100+1)
        })
        return this.bicicletas
    },
    biciPorRodado: function (rodado) {
        return this.bicicletas.filter(element => element.rodado == rodado)
    }
}


console.log(".buscarBici:");
console.log(dhBici.buscarBici("AA0"));
console.log("------------------------");
console.log(".biciParaLaVenta:");
console.log(dhBici.biciParaLaVenta());
console.log("------------------------");
console.log(".venderBici:");
console.log(dhBici.venderBici("AA1"))
console.log("------------------------");
console.log(".totalDeVentas:");
console.log(dhBici.totalDeVentas())
console.log("------------------------");
console.log("Extras: ");
console.log("------------------------");
console.log(".listarTodasLasBicis");
console.log(dhBici.listarTodasLasBicis());
console.log("------------------------");
console.log(".aumentoBici");
console.log(dhBici.aumentoBici(20));
console.log("------------------------");
console.log(".biciPorRodado")
console.log(dhBici.biciPorRodado(26))
