console.log("El valor de mi nombre es");
import { series } from './data.js';
var list = series;
var seriesTable = document.getElementById("seriess");
imprimirSerie(series);
function imprimirSerie(list) {
    var numcur = 0;
    var numsea = 0;
    for (var index = 0; index < list.length; index++) {
        console.log("El valor de mi nombre es ".concat(list[index].name));
        var tbodyAprendiz_1 = document.createElement("tbody");
        tbodyAprendiz_1.innerHTML = "<tr><td><strong> ".concat(list[index].id, "</strong></td><td>").concat(list[index].name, "</td>\n    <td>").concat(list[index].channel, "</td><td>").concat(list[index].seasons, "</td></tr>");
        seriesTable.appendChild(tbodyAprendiz_1);
        numcur++;
        numsea += list[index].seasons;
    }
    var promedio = numsea / numcur;
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=4>Seasons Average:  ".concat(promedio, "</td></tr>");
    seriesTable.appendChild(tbodyAprendiz);
}
