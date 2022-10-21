"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
var list = data_1.series;
imprimirSerie(data_1.series);
function imprimirSerie(list) {
    for (let index = 0; index < list.length; index++) {
        console.log(`El valor de mi nombre es ${list[index]}`);
    }
}
