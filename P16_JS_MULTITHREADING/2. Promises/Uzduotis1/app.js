const sync = () => {
    let elementsCollection = document.getElementsByTagName('p');
    let ele = elementsCollection[0];
    ele.innerHTML = 'sync: kažkoks tekstas';
    alert(ele.innerHTML);
    ele.style.color = "red";

}

//sync();

const async = () => {
    let elementsCollection = document.getElementsByTagName('p');
    let ele = elementsCollection[0];
    ele.innerHTML = 'async: kažkoks tekstas';
    setTimeout(() => { alert(ele.innerHTML); }, 2000);
    ele.style.color = "red";

}

async();