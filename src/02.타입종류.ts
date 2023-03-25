// 타입 종류

// 문자
// 콜론 기호를 사용하고 다음엔 타입, 그리고 할당
let str: string
let red: string = "Red";
let green: string = "Green";
let myColor: string = `myColor ${red}`;
let yourColor: string = "yourColor" + green;

// 숫자
let num: number;
let interger: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

// 불리언
let isBoolean: boolean;
let isDone: boolean = false;

// null/undefined
let nul: null;
let und: undefined;
// nul = null; 가능
// nul = undefined; 불가능
console.log(nul); // null 타입에 아무것도 할당하지 않았기에 불가능
console.log(und); // 아무것도 할당하지 않으면 들어가는 게 undefined 이기 때문에 가능

// 배열
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const numbers: number[] = [1,2,3,4,5];
const union: (string|number)[] = ["Aplle", 1, 2, 3, "banana"];
// 괄호로 감싸주지 않으면 하나라고 인식하지 못 한다.
// (string|number)[ ] = string이나 number 타입의 요소를 가진 배열
// string|number[] = string의 요소나 혹은 number의 요소만을 가진 배열
const ex1:[] = [1,2,3]; // 빈 배열의 타입만 와야함
const ex2:[number, number] = [1,2]; // 와 같이도 표현이 가능

// 객체
// 세 가지 모두 object로 인식하기 때문에 타입이 엄격하지 않아
// 잘 사용하지 않는다.
const obj: object = {}
const arr: object = []
const func: object = function(){}

// 따라서 아래와 같이 사용한다.
const userA : {
    name: string
    age: number
    isValid: boolean
} = {
    name: "history",
    age: 85,
    isValid: true
}

// 인터페이스는 대문자로 시작해야하며
// 다른 변수들과 구분하기 위해서이다.
interface User {
    name: string
    age: number
    isValid: boolean
}

// 객첸는 인터페이스로 활용 가능함
const userB: User = {
    name: "history",
    age: 85,
    isValid: true
}

// 함수
// 변수와 할당 연산자 사이에 타입을 지정한다.
const add: (x: number, y: number) => number = function (x,y) {
    return x+y;
}

const sameAdd = function(x:number, y:number): number{
    return x+y
}
const a: number = add(1,2)
// add가 number를 return 하기에
// a가 number를 갖게 된다.

const hello: () => void = function (){
    console.log("hollo")
}

const h: void = hello()

// any
// 타입을 관리하지 않기 때문에 되도록 피한다.
let hello3: any = "hool"
hello3 = 123
hello3 = false
hello3 = null
hello3 = []
hello3 = {123}
hello3 = function(){}

// unknown
const c: any = 123
// 어떤 데이터든 상관없음
const u: unknown = 123
// 어떤 데이터인지 알 수 없음

const any: any = c
const boo: boolean = c
const num2: number = c
const arr2: string[] = c
const obj2: {} = c

// tuple
const tuple : [string,number,boolean] = ["a",1,false];
const users: [number, string, boolean][] = [[1,"2",true],[2,"3",false],[3,"4",true]];

// void
function hb(msg: string): void{
    console.log(`'hello ${msg}`)
}

const hbye: void = hello('hello')

// never
const nev: [] =[]
nev.push(3)
// 절대 값을 반환하지 않음
// 절대 값이 지정될 수 없다고 never타입으로 인식함

// union
let union2: string|number;
union2 = 123
union = false

// intersection
interface User1{
    name: string,
    age: number
}

interface Validation {
    isValid: boolean
}

const heropy: User1 & Validation = {
    name: '123',
    age: 85,
    isValid: true
}

const heropy2: User1 & Validation = {
    age: 85,
    isValid: true
}