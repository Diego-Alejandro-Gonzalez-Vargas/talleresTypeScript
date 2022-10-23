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
    tbodyAprendiz.innerHTML = `<tr><td><strong> ${list[index].id}</strong></td><td id="${list[index].id}"><a>${list[index].name}</a></td>
    <td>${list[index].channel}</td><td>${list[index].seasons}</td></tr>`;


    seriesTable.appendChild(tbodyAprendiz);
    numcur++;
    numsea+=list[index].seasons;

    document.getElementById(`${list[index].id}`)!.onclick = function() {
      let lacarta: HTMLElement = document.getElementById("lacarta")!;
      let laimagen: HTMLElement = document.getElementById("imgcard")!;
      let urlll:string = list[index].image;
      console.log(urlll)
      laimagen.setAttribute('src',urlll)
      //let textoCard: HTMLElement = document.getElementById("eltexto")!;
      lacarta.removeChild(document.getElementById("todotexto")!);
      let divtexto = document.createElement("div");
    divtexto.innerHTML = `<p class="card-text" id="eltexto">${list[index].descripcion}</p>
    <a href="${list[index].link}">${list[index].link}</a>`;
    divtexto.setAttribute('class', 'card-body');
    divtexto.setAttribute('id','todotexto');
    lacarta.appendChild(divtexto);

    };

  }
  let promedio: number = numsea/numcur;
  let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=4>Seasons Average:  ${promedio}</td></tr>`


    seriesTable.appendChild(tbodyAprendiz);

}