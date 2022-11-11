const animalForm = document.querySelector('#animal-form');
const animalFormSbmBtn = document.querySelector('#animal-form-submit');

function sendData() {
    let data = new FormData(animalForm);
    let obj = {};

    // #1 iteracija -> obj {name: 'asd'}
    // #2 iteracija -> obj {type: 'asd'}
    data.forEach((value, key) => {
        // console.log(`${key}(Key): ${value}(Value)`);
        obj[key] = value
    });

    const url = 'https://testapi.io/api/juojuk/resource/Animals/' + obj.id;

    const urlFetchAnimal = 'https://testapi.io/api/juojuk/resource/Animals/' + obj.id;
    const optionsFetchAnimal = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    fetch(urlFetchAnimal, optionsFetchAnimal)
    .then((response) => response.json())
    .then((a) => {
        console.log(`Animal exists: ${a}`);
        return fetch(url, {
            method: 'delete',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
    })
    .then(obj => { // Now we are working with our Delete fetch
        const res = obj;// .json()
        console.log(res);
        return res;
    })
    .catch((error) => {
        console.log(`Request failed with error: ${error}`);
    })
    
    
    
}

animalFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    sendData();
})