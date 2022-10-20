/* Parašykite algoritmą pagal pateiktą diagramą*/
let a = -5;
let b = -6;
let c = -2;
let d = 0;
let f = -11;

if ( a > b && a > c && a > d && a > f ){
    console.log(`${a}`); 
} else if( b > a && b > c && b > d && b > f ){
    console.log(`${b}`); 
} else if( c > a && c > b && c > d && c > f ){
    console.log(`${c}`); 
} else if( d > a && d > c && d > b && d > f ){
    console.log(`${d}`); 
} else {
    console.log(`${f}`); 
}