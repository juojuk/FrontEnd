// Uzduotis 2
const child = {
    name: 'Susan',
    toysArray: ['doll', 'teddy bear', 'Robocop Destructor 9000X'],
    yearsOld: 5,
    birthday: true,
    totalToys: null,
    friends: [
        {
            name: 'Simon',
            currAction: 'Playing football'
        },
        {
            name: 'Mia',
            currAction: 'Fighting samurais'
        },
        {
            name: 'Emma',
            currAction: 'Brushing hair'
        }
    ]
}

function doBirthdayParty(name) {
    if(child.name === name && child.birthday) {
        // let [toysArray, yearsOld, friends] = child;
        let birthdayToy = child.toysArray.shift();
        console.log(`Toy that was taken: ${birthdayToy}`);
        child.toysArray.push('New toy');
        child.yearsOld++;
        child.totalToys = child.toysArray.length;

        console.log(child);
        for(let friend of child.friends) {
            console.log(`${friend.name}: ${friend.currAction}`);
        }
    }
}

doBirthdayParty('Susan');