//1. String concatenation

console.log('my'+'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 사칙연산, 선 후치연산, 비교연산은 기존에 알던대로.

//2. 논리연산 중에서도 or

const value1 = true;
const value2 = 4<2;

console.log(`or: ${value1 || value2 || check()}`);

function check(){
    for(let i = 0; i < 10; i++){
        console.log('no');
    }
    return true;
}

// or 연산에 해당하는 구문에서 순차적으로 논리식 확인.
// or은 하나라도 true면 true이기 때문에 앞선 식이 창이라면 굳이 그 뒤에 식의 참.거짓 여부를 판별하지 않음.

//따라서 위의 코드에서는 check함수가 실행되지 않음.

// and도 위의 원리와 같이 순차적으로 식 판별, false가 나오면 그 뒤의 식은 실행 x

//추가로 object의 null 체크를 하고, 안전하게 object의 변수 값을 받아올 때

// if(nullableObject != null){
//     nullableObject.something;
// }
//이런식으로 해야하지만 간편하게 and연산을 이용하여
//nullableObject && nullableObject.something 이런식으로 null체크를 할 수 있다.

//3. equality

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false 1과 2의 reference가 다름.
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3);  //true 1과 3의 3이 1의 reference value를 받았기 떄문에 true;

//equality - puzzler

console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); // true
console.log(null === undefined); // false