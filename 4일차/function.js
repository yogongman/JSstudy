// 2.parameters

// primitive 파라미터는 값으로 전달.
// object 파라미터는 참조(reference)해서 전달.

function changeName(obj){
    obj.name = 'coder';
}
const dahoon = {name: 'dahoon'};
changeName(dahoon);
console.log(dahoon.name);

// 3.Default parameters (added in ES6)
function showMessage(message,from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('HI'); //비어놓으면 undefined로 되지만 default 값을 지정 가능

// 4.Rest parameters(added in ES6)
function printAll(...args){
    for( let i=0; i<args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
        //for(auto i: args) 같이 쓴다.
    }
    args.forEach((arg) => console.log(arg));
}
printAll('hi','hello','1');

//배열 형태로 받을 수 있음.

// 5. Early return, early exit



//First-class function
//변수처럼 할당받을 수 있고
//다른 함수의 인자로 전달될 수 있고
//함수가 다른 함수의 리턴값이 될 수 있다.
const print = function(){
     // anonymous function
     console.log('print');
};
print();
const printAgain = print;
printAgain();
//1. Function expresstion
//호이스팅 가능

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}
//anonymous function
const printYes = function(){
    console.log('yes!');
}
//named function, 디버깅 할 때 stack traces에 보임.
const printNo = function print(){
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//arrow function
const simplePrint = function(){
    console.log('simple print!');
};

const simpleprint = () => consolg.log('silePrint!');
const add = (a,b) => a + b; // 파라미터, 리턴값
const simpleMultiply = (a,b) => {
    // do something more
    return a*b; //리턴 값 명시 해주어야함.
}
//IIFE: Immediately Invoked Function Expression
function hello(){
    console.log('IIFE');
}
hello(); // 기존의 호출 방법은 선언 후 호출을 했어야함.

(function hello(){
    console.log('IIFE');
})();

// 선언과 동시에 호출 가능.