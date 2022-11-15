const user = JSON.parse(sessionStorage.user_login);
let data;


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

function loadData() {
    const url = 'https://testapi.io/api/juojuk/resource/Data';
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
            const dataEle = document.getElementById('data-text');
            let htmlData = '';

            a.data.forEach(element => {
                console.log(element);
                htmlEle = `<input type="text" name="type" value=${element.type}>
                <input type="text" name="content" value=${element.content}>
                <input type="date" name="addDate" value=${element.addDate}>
                <input type="image" onclick="updateData()" class="data-text-put" value="put">
                <input type="image" class="data-text-del" value="del">`;
                htmlData += htmlEle;
            });

            dataEle.innerHTML = htmlData;

            const inputs = document.querySelectorAll('#type, #content, #addDate');
            inputs.forEach(input => { input.value = '' })
        })
        .then(()=> {
            const outputForm = document.getElementById('data-text');
            data = new FormData(outputForm);
            return data;
        })
}

loadData();

const inputForm = document.querySelector('#input-form');
const inputFormSbmBtn = document.querySelector('#input-form-sub');
//const outputForm = document.querySelector('#data-text');



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



function updateData() {
    //let data = new FormData(outputForm);
    let obj = {};

    // #1 iteracija -> obj {name: 'asd'}
    // #2 iteracija -> obj {type: 'asd'}
    data.forEach((value, key) => {
        // console.log(`${key}(Key): ${value}(Value)`);
        obj[key] = value
    });

    console.log(obj);


    const url = 'https://testapi.io/api/juojuk/resource/Data/' + obj.id;

    fetch(url, {
        method: 'put',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        // Naudojame JSON.stringify, nes objekte neturim .json() metodo
        body: JSON.stringify(obj)
    })
        .then(obj => {
            const res = obj.json()
            console.log(res);
            return res;
        })
        .catch((klaida) => console.log(klaida));
}


inputFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendData();
    loadData();
    //outputForm = document.querySelector('#data-text');

})


