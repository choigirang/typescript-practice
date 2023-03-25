// 타입스크립트 기본 개념 알아보기
// 타입 지정하기
let hello1: string = 123; // string 타입에 number 타입 할당 불가능
let hello2: string = "123";

hello1 = "hello";
hello1 = 123; // string 타입에 number 타입 할당 불가능

console.log(hello1);
console.log(hello2);
