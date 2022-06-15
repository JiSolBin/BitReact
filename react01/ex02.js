// let

var a = 1234;
var a = 4321;
console.log(a);

//let은 중복 선언 불가능
//let b = 1234;
let b = 4321;
console.log(b);

{
    let c = 1234;
}
//not defined
console.log(c);