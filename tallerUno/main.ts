console.log(`El valor de mi nombre es`);

import {Serie} from './Serie.js';
import {series} from './data.js';
var list :Serie[] = series;
let seriesTable: HTMLElement = document.getElementById("seriess")!;


imprimirSerie(series);
function imprimirSerie(list: Serie[]): void  {
    let numcur:number =0;
    let numsea:number =0;
  for (let index = 0; index < list.length; index++) {   
      console.log(`El valor de mi nombre es ${list[index].name}`);
      let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td><strong> ${list[index].id}</strong></td><td>${list[index].name}</td>
    <td>${list[index].channel}</td><td>${list[index].seasons}</td></tr>`


    seriesTable.appendChild(tbodyAprendiz);
    numcur++;
    numsea+=list[index].seasons;

  }
  let promedio: number = numsea/numcur;
  let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=4>Seasons Average:  ${promedio}</td></tr>`


    seriesTable.appendChild(tbodyAprendiz);

}