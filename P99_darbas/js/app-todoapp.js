const inputForm = document.querySelector('#input-form');
const inputFormSbmBtn = document.querySelector('#input-form-sub');

const user = JSON.parse(sessionStorage.user_login);
document.body.onload = () => {
    document.getElementById("user-online").innerHTML = `<strong>${Object.values(user).join(' ')}</strong>`;
    getData();
}


document.getElementById('button-logout')
    .addEventListener('click', () => {
        const user = {
            firstName: "",
            lastName: "",
        };
        sessionStorage.setItem("user_login");

    });

function getData() {
    const url = 'https://testapi.io/api/juojuk/resource/Data';
    const response = {};

    const options = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    fetch(url, options)
        .then((response) => response.json())
        .then((a) => {
            console.log(a);
            let htmlData = '';

            const filteredData = a.data.filter(element => element.userid === Object.values(user).join(''))

            filteredData.forEach(element => {
                console.log(element);
                htmlEle = `<form id="output-form${element.id}">
                <input type="text" name="type" value="${element.type}">
                <input type="text" name="content" value="${element.content}">
                <input type="date" name="addDate" value="${element.addDate}">
                <input type="image" onclick="putData(${element.id})" id="${element.id}"class="output-form-put" value="put">
                <input type="image" onclick="delData(${element.id})" id="${element.id}" class="output-form-del" value="del">
                </form>`;
                htmlData += htmlEle;
            });
            document.getElementById("output-form").innerHTML = htmlData;

            const inputs = document.querySelectorAll('#type, #content, #addDate');
            inputs.forEach(input => { input.value = '' })
        })
}



function postData() {
    let data = new FormData(inputForm);
    let obj = {};

    console.log(data);

    data.forEach((value, key) => obj[key] = value);
    obj['userid'] = Object.values(user).join('');

    fetch('https://testapi.io/api/juojuk/resource/Data', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })

        .then(obj => console.log(obj.json()))
        .catch((klaida) => console.log(klaida));

    getData();
}


function putData(id) {

    const outputForm = document.getElementById('output-form' + id);

    let data = new FormData(outputForm);

    let obj = {};

    data.forEach((value, key) => {
        obj[key] = value
    });

    obj["id"] = id;
    obj["userid"] = Object.values(user).join('');

    console.log(obj);

    const url = 'https://testapi.io/api/juojuk/resource/Data/' + obj.id;

    fetch(url, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(obj => {
            const res = obj.json();
            console.log(res);
            return res;
        })
        .catch((klaida) => console.log(klaida));

    getData();
}


function delData(id) {

    const outputForm = document.getElementById('output-form' + id);

    let data = new FormData(outputForm);

    let obj = {};

    data.forEach((value, key) => {
        obj[key] = value
    });

    obj["id"] = id;
    obj["userid"] = Object.values(user).join('');

    console.log(obj);

    const url = 'https://testapi.io/api/juojuk/resource/Data/' + obj.id;

    fetch(url, {
        method: 'delete',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(obj => {
            const res = obj.json();
            console.log(res);
            return res;
        })
        .catch((klaida) => console.log(klaida));

    getData();

}


inputFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    postData();
})