const inputForm = document.querySelector('#input-form');
const inputFormSbmBtn = document.querySelector('#input-form-sub');

const user = JSON.parse(sessionStorage.user_login);
document.getElementById("user-online").innerHTML = `<strong>${Object.values(user).join(' ')}</strong>`

document.body.onload = getData;

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


            const filteredData = a.data.filter(element => element.userid === Object.values(user).join(''));
            const outputFormSet = document.createElement("div")
            outputFormSet.setAttribute("id", "output-forms");


            newOutputElements = filteredData.map(element => {
                let outputForm = document.createElement("form");
                let inputType = document.createElement("input");
                let inputContent = document.createElement("input");
                let inputAddDate = document.createElement("input")
                let inputPutData = document.createElement("input")
                let inputDelData = document.createElement("input")

                outputFormSet.append(outputForm);
                outputForm.setAttribute("id", "output-form" + element.id);
                outputForm.setAttribute("class", "output-form");
                inputType.setAttribute("type", "text");
                inputType.setAttribute("name", "type");
                inputType.setAttribute("value", element.type);
                outputForm.append(inputType);
                inputContent.setAttribute("type", "text");
                inputContent.setAttribute("name", "content");
                inputContent.setAttribute("value", element.content);
                outputForm.append(inputContent);
                inputAddDate.setAttribute("type", "text");
                inputAddDate.setAttribute("name", "addDate");
                inputAddDate.setAttribute("value", element.addDate);
                outputForm.append(inputAddDate);
                inputPutData.setAttribute("type", "image");
                inputPutData.addEventListener("click", (e) => { e.preventDefault(); putData(e.target.id) });
                inputPutData.setAttribute("id", element.id);
                inputPutData.setAttribute("class", "output-form-put");
                inputPutData.setAttribute("value", "put");
                outputForm.append(inputPutData);
                inputDelData.setAttribute("type", "image");
                inputDelData.addEventListener("click", (e) => { e.preventDefault(); delData(e.target.id) });
                inputDelData.setAttribute("id", element.id);
                inputDelData.setAttribute("class", "output-form-del");
                inputDelData.setAttribute("value", "del");
                outputForm.append(inputDelData);
            });

            const inputs = document.querySelectorAll('#type, #content, #addDate');
            inputs.forEach(input => { input.value = '' })

            inputForm.after(outputFormSet);

        })
}

//insert

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
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })

        .then(obj => {
            console.log(obj.json());
            document.getElementById("output-forms").remove();
        })
        .then(() => {
            getData();
            console.log(obj);
        })
        .catch((klaida) => console.log(klaida));

}

//Update

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
            document.getElementById("output-forms").remove();
            getData();
            return res;
        })
        .catch((klaida) => console.log(klaida));
}

//Delete

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


    console.log(url);

    fetch(url, {
        method: "delete",
    })
    // .then(obj => console.log(obj.json()))
    .then(() => {
        document.getElementById("output-forms").remove();
        getData();
    })
    .catch((klaida) => console.log(klaida));

}


inputFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    postData();
})
