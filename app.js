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
            return `La bicicleta con ID ${id} fue vendida con éxito.`;
        } else if (bici && bici.vendida) {
            return `La bicicleta con ID ${id} ya estaba vendida.`;
        } else {
            return `No se encontró ninguna bicicleta con ID ${id}.`;
        }
    },
    biciParaLaVenta: function () {
            return this.bicicletas.filter(bici => !bici.vendida);
    },
    totalDeVentas: function () {
        return this.bicicletas.filter(bici => bici.vendida).reduce((total, bici) => total + bici.precio, 0);
    }
}

console.log(dhBici.totalDeVentas());
