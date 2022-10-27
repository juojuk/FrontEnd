// Uzduotis 3
const person = {
    name: 'Rosa',
    age: 120,
    alive: false,
    interests: ['swimming', 'cards']
}

function alterPerson(person, newName){
    person.name = newName;
    person.age = (Math.random()*101) + 21;

    if(person.age < 100){
        person.alive = true;
        person.interests.push('enjoying life');
        console.log(person.interests);
    }
}

alterPerson(person, 'Susan');