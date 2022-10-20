//let a = window.prompt("sdfgsdfgs","0");
/* Parašykite programą, kuri prašo įvesti du skaičius ir išveda kuris didesnis*/

let a = parseInt(window.prompt("sdfgsdfgs",""));
let b = parseInt(window.prompt("sdfgsdfgs",""));

if (a === b){
    console.log('Skaičiai yra lygūs');
} else if (+a > +b){
    console.log('a yra didesnis');
}else{
    console.log('b yra didesnis');
}

