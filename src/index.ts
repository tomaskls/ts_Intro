import { studentsAverage } from "./object.js";

const n1 = 5;
const n2 = 17;

function sum(a:number|string, b:number|string) {
    let k = 0;
    if (typeof a === 'string') {
        k = parseFloat(a);
    }
    let l = 0;
    if (typeof b === 'string') {
        l = parseFloat(b);
    }
    return k + l
}

console.log(sum(n1,n2));
console.log(sum(55,"95"));


function marksAverage(list:Array<number>) {
    let sum = 0;
    for (const n of list){
      sum += n  
    }
    return sum / list.length
}
console.log(marksAverage([1, 2, 3]));

console.log(studentsAverage);
