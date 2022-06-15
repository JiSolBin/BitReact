let func1 = function(){ return 'func1 run...' };
let result1 = func1();
let func2 =(a) => {
    console.log('run.. ' + a);
    return 'func2...';
}
let result2 = func2();
console.log(result1, result2);

let func3 = function(){ console.log(this); };
func3();