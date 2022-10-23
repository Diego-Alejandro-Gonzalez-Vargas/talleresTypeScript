console.log("El valor de mi nombre es");
import { series } from './data.js';
var list = series;
var seriesTable = document.getElementById("seriess");
imprimirSerie(series);
function imprimirSerie(list) {
    var numcur = 0;
    var numsea = 0;
    var _loop_1 = function (index) {
        console.log("El valor de mi nombre es ".concat(list[index].name));
        var tbodyAprendiz_1 = document.createElement("tbody");
        tbodyAprendiz_1.innerHTML = "<tr><td><strong> ".concat(list[index].id, "</strong></td><td id=\"").concat(list[index].id, "\"><a>").concat(list[index].name, "</a></td>\n    <td>").concat(list[index].channel, "</td><td>").concat(list[index].seasons, "</td></tr>");
        seriesTable.appendChild(tbodyAprendiz_1);
        numcur++;
        numsea += list[index].seasons;
        document.getElementById("".concat(list[index].id)).onclick = function () {
            var lacarta = document.getElementById("lacarta");
            var laimagen = document.getElementById("imgcard");
            var urlll = list[index].image;
            console.log(urlll);
            laimagen.setAttribute('src', urlll);
            //let textoCard: HTMLElement = document.getElementById("eltexto")!;
            lacarta.removeChild(document.getElementById("todotexto"));
            var divtexto = document.createElement("div");
            divtexto.innerHTML = "<p class=\"card-text\" id=\"eltexto\">".concat(list[index].descripcion, "</p>\n    <a href=\"").concat(list[index].link, "\">").concat(list[index].link, "</a>");
            divtexto.setAttribute('class', 'card-body');
            divtexto.setAttribute('id', 'todotexto');
            lacarta.appendChild(divtexto);
        };
    };
    for (var index = 0; index < list.length; index++) {
        _loop_1(index);
    }
    var promedio = numsea / numcur;
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=4>Seasons Average:  ".concat(promedio, "</td></tr>");
    seriesTable.appendChild(tbodyAprendiz);
}
