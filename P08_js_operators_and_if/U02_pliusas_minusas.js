/*parašykite programą, kurioje įvedami 3 skaičiai ir išvedama ar yra neigiamų skaičių tarp tų trijų
*/ 

let x = '-3'; //window.prompt('įveskite pirmą skaičių','0')
let y = '-7';
let z = '2';

if (+x < 0 || +y < 0 || +z < 0){
    console.log(`yra neigiamų skaičių`); 
} else{
    console.log(`visi teigiami skaičiai`);
}
console.log(`--------------------------`);
/* parašykite programą, kurioje įvedami 3 skaičiai ir išvedama ar yra neigiamų skaičių tarp tų trijų
suskaičiuokite kiek yra neigiamų skaičių*/
let kiekis = 0;
if (+x < 0 ){
    kiekis++;
}
if(+y < 0){
    kiekis++;
}
if(+z < 0){
    kiekis++;
}

if (kiekis > 0){
    console.log(`yra neigiamų skaičių`); 
} else{
    console.log(`visi teigiami skaičiai`);
}
console.log(`neigiamų kiekis yra ${kiekis}`);





