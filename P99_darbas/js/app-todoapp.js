const user = JSON.parse(sessionStorage.user_login);
document.getElementById("user-online").innerHTML = `<strong>${Object.values(user).join(' ')}</strong>`;


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
            'Accept': 'application/json */*',
            'Content-Type': 'application/json */*'
        }
    }

    fetch(url, options)
        .then((response) => response.json())
        .then((a) => {
            console.log(a);
            let htmlData = '';

            const filteredData = a.data.filter(element => element.userid===Object.values(user).join(''))

            filteredData.forEach(element => {
                console.log(element);
                htmlEle = `<form id="output-form${element.id}">
                <input type="text" name="type" value="${element.type}">
                <input type="text" name="content" value="${element.content}">
                <input type="date" name="addDate" value="${element.addDate}">
                <input type="image" onclick="putData()" id="${element.id}"class="output-form-put" value="put">
                <input type="image" id="${element.id}" class="output-form-del" value="del">
                </form>`;
                htmlData += htmlEle;
            });
            document.getElementById("output-form").outerHTML = htmlData;

            // const inputs = document.querySelectorAll('#type, #content, #addDate');
            // inputs.forEach(input => { input.value = '' })
        })
}

const inputForm = document.querySelector('#input-form');
const inputFormSbmBtn = document.querySelector('#input-form-sub');
//const putFormSbmBtn = document.getElementById('put');


//const outputForm = document.querySelector('#output-form');



function postData() {
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


function putData() {
    // const outputForm = document.getElementById('output-form'+id);

    // let data = new FormData(outputForm);
    let obj = {};
    //let obj = {id: 7,firstName: "Septynetas",lastName: "",email: "septyni@septyni.lt"};
    obj["id"] = "20";
    obj["type"] = "Septynetas";
    obj["content"] = "Septintokas";
    obj["addDate"] = "2022-11-30";
    obj["userid"] = "DevynetasDevintokas";

    // data.forEach((value, key) => {
    //     // console.log(`${key}(Key): ${value}(Value)`);
    //     obj[key] = value
    // });

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
    .catch((klaida) => console.log(klaida));}

getData();


// putFormSbmBtn.addEventListener('click', (e) => {
//     //e.preventDefault();
//     putData();
//     //getData();

// })

inputFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    putData();
    //getData();

})

// const outputForm = document.getElementById('output-form'+id);
// const animalFormSbmBtn = document.querySelector('#animal-form-submit');

// function sendData() {
//     let data = new FormData(animalForm);
//     let obj = {};

//     // #1 iteracija -> obj {name: 'asd'}
//     // #2 iteracija -> obj {type: 'asd'}
//     data.forEach((value, key) => {
//         // console.log(`${key}(Key): ${value}(Value)`);
//         obj[key] = value
//     });

//     const url = 'https://testapi.io/api/juojuk/resource/Animals/' + obj.id;

//     const urlFetchAnimal = 'https://testapi.io/api/juojuk/resource/Animals/' + obj.id;
//     const optionsFetchAnimal = {
//         method: 'get',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     }

//     fetch(urlFetchAnimal, optionsFetchAnimal)
//     .then((response) => response.json())
//     .then((a) => {
//         console.log(`Animal exists: ${a}`);
//         return fetch(url, {
//             method: 'delete',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//             }
//         })
//     })
//     .then(obj => { // Now we are working with our Delete fetch
//         const res = obj;// .json()
//         console.log(res);
//         return res;
//     })
//     .catch((error) => {
//         console.log(`Request failed with error: ${error}`);
//     })
    
    
    
// }

// animalFormSbmBtn.addEventListener('click', (e) => {
//     e.preventDefault(); // Breaks manual refresh after submit
//     sendData();
// })
