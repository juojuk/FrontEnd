const animalForm = document.querySelector('#animal-form');
const animalFormSbmBtn = document.querySelector('#animal-form-submit');

function sendData() {
    let data = new FormData(animalForm);
    let obj = {};

    console.log(data);

    // #1 iteracija -> obj {name: 'asd'}
    data.forEach((value, key) => obj[key] = value);

    fetch('https://testapi.io/api/juojuk/resource/Animals', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj) // Naudojame , nes objekte neturim .json() metodo 
    })

        .then(obj => console.log(obj.json()))
        .catch((klaida) => console.log(klaida));
}



animalFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    sendData();
})