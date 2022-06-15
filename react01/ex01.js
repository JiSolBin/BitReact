// const

const a = 1223;
const b = 'abcd';

// const여도 객체일 경우, 값은 변경 가능함 (객체 자체를 바꾸진 못함)
const c = [];
c.push('item1');
const d = {};
d.key = 'val';

console.log(a,b,c,d);