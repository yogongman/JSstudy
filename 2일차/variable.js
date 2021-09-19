'use strict';

// Variable
// let
let name = 'gongman'
console.log(name);
name = 'hi';
console.log(name);

let GlobalName = 'global';
{
    console.log(GlobalName);
    GlobalName = 'hello';
    console.log(GlobalName);
    let LocalName = 'local';
    console.log(LocalName);
}
// console.log(LocalName); 이건 에러뜸 블록안에는 지역변수로 할당됨.

var x = 1;
{
  var x = 2;
}
console.log(x); // 콘솔에 2를 출력합니다

const c = 1;
{
  const c = 2;
  //const인데 중복된 이름의 변수를 선언했음에도 에러 출력 x
}
console.log(c); // 1이 콘솔에 찍히며, SyntaxError 예외가 발생하지 않습니다.


console.log(mujivar);
console.log(mujilet);
var mujivar;
let mujilet = 'a';

