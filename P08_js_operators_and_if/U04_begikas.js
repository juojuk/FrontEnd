/* Sukurti kodą, kuris naudodamasis if else kondicija, pagal iš anksto nustatytą bėgiko (naudojant let)
poziciją konsolėje išmestų bėgiko vardą ir kokį medalį jis gavo (pvz.: Jonas gavo sidabrinį medalį).
Jums reikės sukurti 3 kintamuosius ir du iš jų nustatyti iš anksto*/

let vardas = 'Jonas';
let vieta = 4;
let medalis = "paguodos";

if (vieta === 1) medalis = "auksinį";
else if (vieta === 2) medalis = "sidabrinį";
else if (vieta === 3) medalis = "bronzinį";

console.log(`${vardas} gavo ${medalis} medalį`);
