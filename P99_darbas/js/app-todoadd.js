const user = JSON.parse(sessionStorage.user_login);

document.body.onload = () => {
    document.getElementById("user-online").innerHTML = `<strong>${Object.values(user).join(' ')}</strong>`;
}

document.getElementById('button-logout')
    .addEventListener('click', () => {
        const user = {
            firstName: "",
            lastName: "",
        };
        sessionStorage.setItem("user_login");

    });

    document.getElementById('button-close')
    .addEventListener('click', () => {
        window.open('http://127.0.0.1:5500/P99_darbas/pages/todoapp.html', '_self');
    });


