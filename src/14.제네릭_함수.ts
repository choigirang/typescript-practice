// 함수, 클래스, 인터페이스에서 사용

interface Obj {
  x: number;
}
type Arr = [number, number];

function toArray(a: string, b: string): string[]; // 문자 데이터만 받아서 string인 배열
function toArray(a: number, b: number): number[]; // 숫자 데이터만 받아서 number인 배열
function toArray(a: boolean, b: boolean): boolean[]; // boolean데이터만 받아서 boolean인 배열
function toArray(a: Obj, b: Obj): Obj[]; // 객체 타입 x는 숫자
function toArray(a: Arr, b: Arr): Arr[]; // 배열 타입
function toArray(a: any, b: any) {
  return [a, b];
}
// toArray 배열 데이터로 바꾼다.
// 함수 오버로드 방식

console.log(
  toArray("neo", "anderson"),
  toArray(1, 2),
  toArray(true, false),
  toArray({ x: 1 }, { x: 2 }),
  toArray([1, 2], [3, 4])
);
// 매 함수마다 위와같은 함수 오버로드를 진행하기 어렵기 때문에
// 제네릭 문법으로 보완한다.

function toArray1<T>(a: T, b: T) {
  // 파스칼 케이스로 작성하고 최대한 한 글자로 작성한다.
  return [a, b];
}
// T는 이름 , 꺽쇠괄호로 데이터의 타입이 들어온다.
console.log(
  toArray1("neo", "anderson"), // 앞에 string 타입이 들어왔기 떄문에 뒤에도 string이 와야한다. number오면 에러
  toArray1(1, 2), // 타입 추론 방식이 되어 number가 되는 거임
  toArray1(true, false),
  toArray1({ x: 1 }, { y: 2 }), // x속성만 가진 객체에서 y를 불러오기 때문에
  toArray1([1, 2], [3, 4]),
  toArray1<string>([1, 2], [3, 4]), // 제네릭 안에 타입을 명시적으로 지정 가능, a와 b도 T가 오기 때문에 T에 명시된 타입이 와야한다.
  toArray1([1, 2], [3, 4, 5]), // 튜플 타입으로 인식하는 게 아니라 그저 배열이구나, 그래서 요소 추가 가능 따라서 명시적으로 작성해줘야한다.
  toArray1<Arr>([1, 2], [3, 4, 5])
);
