const signupFormSbmBtn = document.querySelector('#signup-form-submit');

// signupFormSbmBtn
//     .addEventListener('click', () => {
//         const userFirstName = document.getElementById("firstname").value;
//         const userLastName = document.getElementById('lastname').value;
//         const user = {
//             firstName: userFirstName,
//             lastName: userLastName,
//         };
//         sessionStorage.setItem("user_login", JSON.stringify(user));

//         sendData();
//     });


function sendData() {

    const signupForm = document.querySelector('#signup-form');
    const url = 'https://testapi.io/api/juojuk/resource/Users';


    let data = new FormData(signupForm);
    let obj = {};

    console.log(data);

    data.forEach((value, key) => obj[key] = value);

    fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(obj => window.open('http://127.0.0.1:5500/P99_darbas/pages/todoapp.html', '_self'))
        .catch((klaida) => console.log(klaida));
}


signupFormSbmBtn.addEventListener('click', (e) => {
    const userFirstName = document.getElementById("firstname").value;
    const userLastName = document.getElementById('lastname').value;
    const user = {
        firstName: userFirstName,
        lastName: userLastName,
    };
    sessionStorage.setItem("user_login", JSON.stringify(user));
    e.preventDefault();
    sendData();
})