function changeFirstLi(){
    const ul = document.getElementsByTagName("ul")[0];
    const kavos_li = ul.getElementsByTagName("li")[0];
    kavos_li.innerHTML += "Kitas gėrimas";
}

function addMilkLi(){
    const ul = document.getElementsByTagName("ul")[0];
    ul.innerHTML += `<li>Milk</li>`;
}

function countLi(){
    const ul = document.getElementsByTagName("ul")[0];
    const li_count = ul.children.length;
    return `ul has ${li_count} items`
}