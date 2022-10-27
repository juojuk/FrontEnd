let accords = ["D", "G", "C", "C7", "F"];

function updateAccord(accord) {
    if(!accord.endsWith('7')) {
        accord += '7';
    }
    return accord;
    // console.log(accord);
}

for (let i = 0; i < accords.length; i++) {
    console.log(updateAccord(accords[i]));
}

// accords.forEach(function(accord) {
//     console.log(accord);
//     accord = updateAccord(accord);
// });