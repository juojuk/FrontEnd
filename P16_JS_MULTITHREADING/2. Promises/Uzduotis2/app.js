const pica = () => {
    return new Promise((resolve, reject) => {
    let toppings = ['alyvuoges','paprika','ananasas']
    if(toppings.includes('ananasas')){
        reject("Oh no!" )
    }
    else{
        resolve("Tavo picos ingredientai: " + toppings)
    }
})
}

pica().then((res) => console.log(res)).catch((err) => console.log(err));


