document.getElementById('button-logout')
    .addEventListener('click', () => {
        const user = {
            firstName: "",
            lastName: "",
        };
        sessionStorage.setItem("user_login");

        // txt_setLocalStorage.innerHTML = 'irasyta sekmingai';
        // txt_setLocalStorage.style.color = `green`;
    });

function loadUser() {
    const url = 'https://testapi.io/api/juojuk/resource/Users';
    const response = {};

    const options = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    fetch(url, options)
        .then((response) => response.json())
        .then((a) => {
            console.log(a);
            const userEle = document.getElementById('users-text');
            let htmlUser = '';

            a.data.forEach(element => {
                console.log(element);
                let htmlElement = `<p>${element.id} ${element.firstName} ${element.lastName}</p>`;
                htmlUser += htmlElement;
            });

            userEle.innerHTML = htmlUser;
        })
}

loadUser();


