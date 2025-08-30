let user1={
    name:"ravi",
    age:20
}
let user2={
    amount:40,
    
}
// here user2 is a prototype of user 1 that all properties inherity by user 1
// the all property shows in console is a prototype 
user2.__proto__=user1;

console.log(user2.age);