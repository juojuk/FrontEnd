const user = JSON.parse(sessionStorage.user_login);

document.body.onload = () => {
    document.getElementById("user-online").innerHTML = `<strong>${Object.values(user).join(' ')}</strong>`;
}

//let htmlElement = document.getElementsByClassName('column')[0];
//htmlElement.innerHTML =`<div class="add"><strong>Add data</strong><span class="closebtn" onclick="window.open('http://127.0.0.1:5500/P99_darbas/pages/todoapp.html', '_self')">&times;</span></div>`;
//window.location.
document.getElementById('button-logout')
    .addEventListener('click', () => {
        const user = {
            firstName: "",
            lastName: "",
        };
        sessionStorage.setItem("user_login");

    });

// function loadData() {
//     const url = 'https://testapi.io/api/juojuk/resource/Users';
//     const response = {};

//     const options = {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         }
//     }

//     // fetch(url, options)
//     //     .then((response) => response.json())
//     //     .then((a) => {
//     //         console.log(a);
//     //         const userEle = document.getElementById('users-text');
//     //         let htmlUser = '';

//     //         a.data.forEach(element => {
//     //             console.log(element);
//     //             let htmlElement = `<p>${element.id} ${element.firstName} ${element.lastName}</p>`;
//     //             htmlUser += htmlElement;
//     //         });

//     //         userEle.innerHTML = htmlUser;
//     //     })
// }

// loadData();

const inputForm = document.querySelector('#input-form');
const inputFormSbmBtn = document.querySelector('#input-form-submit');

function sendData() {
    let data = new FormData(inputForm);
    let obj = {};

    console.log(data);

    data.forEach((value, key) => obj[key] = value);
    obj['userid'] = Object.values(user).join('');

    console.log(JSON.stringify(obj));


    fetch('https://testapi.io/api/juojuk/resource/Data', {
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



inputFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendData();
})


