const signuplForm = document.querySelector('#signup-form');
const signupFormSbmBtn = document.querySelector('#signup-form-submit');

function sendData() {
    let data = new FormData(signuplForm);
    let obj = {};

    console.log(data);

    data.forEach((value, key) => obj[key] = value);

    fetch('https://testapi.io/api/juojuk/resource/Animals', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(obj => console.log(obj.json()))
        .catch((klaida) => console.log(klaida));
}

signupFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendData();
})