document.getElementById('login-form-submit')
    .addEventListener('click', () => {
        const userFirstName = document.getElementById("firstname").value;
        const userLastName = document.getElementById('lastname').value;
        const user = {
            firstName: userFirstName,
            lastName: userLastName,
        };
        sessionStorage.setItem("user_login", JSON.stringify(user));

        loadData();
        // txt_setLocalStorage.innerHTML = 'irasyta sekmingai';
        // txt_setLocalStorage.style.color = `green`;
    });

function loadData() {
    const url = 'https://testapi.io/api/juojuk/resource/Users';
    const options = {
        method: 'get',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        }
    }
    const response = {};
    fetch(url, options)
        .then((response) => response.json())
        .then((user) => {
            const sessionStorageUser = JSON.parse(sessionStorage.getItem("user_login"));
            let isUser = user.data
                .filter(item => item.firstName === sessionStorageUser.firstName && item.lastName === sessionStorageUser.lastName)
            if (isUser.length === 1) {
                window.open('http://127.0.0.1:5500/P99_darbas/pages/todoapp.html', '_self')
            }
            else {
                console.log("Klaida");
            }
        })

    // user.data.forEach(element => {
    //     console.log(element);
    //     let htmlElement = 
    //     `<p>${element.name}</p>
    //     <p>${element.type}</p>
    //     <p>${element.legs}</p>`;
    //     htmlAnimal += htmlElement;
    // });

    // animalEle.innerHTML = htmlAnimal;
}

