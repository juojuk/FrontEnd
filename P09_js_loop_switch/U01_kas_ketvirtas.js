/*Parašykite for loop‘ą kuriame bus sukurtas kažkoks variable kuris išves 
consolėje skaičius 0 4 8 12 16. */
let str = '';
for (let i = 0; i <= 16; i += 4) {
  str = str + i + ' ';
}
console.log(`   ${str}`);
