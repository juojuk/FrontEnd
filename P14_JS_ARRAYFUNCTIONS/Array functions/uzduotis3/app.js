let first = ["slice","splice","concat"];
let second = ["push","pop","shift","unshift"];



let third = first.concat(second);
third.push('length',7,{subject: 'methods'});

console.log(third);