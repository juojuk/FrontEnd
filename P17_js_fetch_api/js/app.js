const url = 'https://swapi.dev/api/species'


const options = {}

const rezult = {};

const loadDataSimple = () => {
    fetch(url, options)
        //.then( response => response.json()  )
        .then(res => {
            if (res.ok) {
                console.log(res);
                return res.json();
            } else {
                console.log("Got error. Status : " + res.status)
            }

        })
        .then(data => console.log(data.results[2]));
}

const loadDataAsync = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results[0]);
        showData(data.results);
    } catch (error) {
        console.error(error);
    }
}

function showData(data) {
    const list_of = document.getElementsByName('jsondata')[0];
    for (const item in data) {
        list_of.innerHTML +=  item + `: ${data[item].name}<br>`;
    }
}


const loadMultiData = async () =>{
    const url1 = 'https://regres.in/api/users?page=1'
    const url2 = 'https://regres.in/api/users?page=2'
    const url3 = 'https://regres.in/api/users?page=3'

    const responses = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3)
    ]);

    const multiPromises = responses.map( r => r.json());
    const finalData = await Promise.all(multiPromises);
}

const processData = (arr) => {
    //processing arr as data
}


loadDataAsync();
console.log("Mes dabar esam čia");

