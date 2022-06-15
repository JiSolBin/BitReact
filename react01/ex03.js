// object

let obj1 = {'key1':'val1'};
let obj2 = {key2:'val2'};
// 전엔 var key2의 값이 들어가서 ['key2'] 이렇게 썼음 -> 이젠 상관 없음
let obj3 = {['key3']:'val3'};
console.log(obj1, obj2, obj3);

var key4 = 'val4';
let obj4 = {key4};
let obj5 = {key4:key4};
console.log(obj4, obj5);

let obj6 = {key1:1111, key2:2222};
obj6.key3 = 3333;
obj6[key4] = 4444; // line 8, key4 = 'val4'
console.log(obj6);

let obj7 = {...obj6, key1:1234};
console.log(obj7);

let obj8 = JSON.stringify(obj6);
console.log(obj8);
obj8 = JSON.parse(obj8); // 새로운 객체를 obj8에 집어넣음
console.log(obj8);

// target에다가 source를 복사, target은 새로운 객체 -> obj9에 return
let obj9 = Object.assign({},obj6);
console.log(obj9);

let obj10 = { func1(){console.log('func1');} };
let obj11 = { func2:function(){console.log('func2');} };
obj10.func1();
obj11.func2();