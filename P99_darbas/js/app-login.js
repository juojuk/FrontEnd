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
    });

function loadData() {
    const url = 'https://testapi.io/api/juojuk/resource/Users';
    const options = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const response = {};
    fetch(url, options)
        .then((response) => response.json())
        .then((user) => {
            const sessionStorageUser = JSON.parse(sessionStorage.user_login);
            let isUser = user.data
                .filter(item => item.firstName === sessionStorageUser.firstName && item.lastName === sessionStorageUser.lastName)
            if (isUser.length === 1) {
                window.open('http://127.0.0.1:5500/P99_darbas/pages/todoapp.html', '_self')
            }
            else {
                console.log("Klaida");
                let htmlElement = document.getElementsByClassName('column')[0];
                htmlElement.innerHTML =`<div class="error"><strong>User not exist</strong><span class="closebtn" onclick="window.location.reload()">&times;</span></div>`;
            }
        })
}

