import {Serie} from "./Serie";
import {series} from "./data";
var list :Serie[] = series;


imprimirSerie(series);
function imprimirSerie(list: Serie[]): void  {
  for (let index = 0; index < list.length; index++) {   
      console.log(`El valor de mi nombre es ${list[index].name}`);
  }
}