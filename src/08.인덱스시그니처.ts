// 인터페이스 안에서 대괄호를 사용하여 배열을 나타내는
// 인덱스 시그니처
// 생략가능
interface ts08Fruits {
  [item: number]: string;
}

const ex23: ts08Fruits = {};

const ts08fruits: ts08Fruits = {
  0: "1",
  1: "2",
  2: "3",
};

const ts08fruits2: ts08Fruits = ["1", "2", "3"];
// 타입스크립트에서는 배열도 객체로 취급한다.
// 따라서 배열도 추상화할 수 있다.
//(3)["1","2","3"]
// 0: "1",
// 1: "2",
// 2: "3", 과 동일하다.

interface ts08User {
  [key: string]: unknown; // undefined이기 때문에 없어도 된다.
  [key2: number]: string;
  name: string;
  age: number;
}

const ts08heropy: ts08User = {
  name: "hi",
  age: 100,
};

interface DifferenceUnknownAny {
  [key: string]: unknown;
  [key: number]: any;
}

const uA: DifferenceUnknownAny = {};

uA["a"] = "aa";
uA[1] = "bb";

uA["a"].length;
uA[1].toFixed(2); // any 타입이기 때문에 가능

////////////////
interface Ts08payload {
  [key: string]: unknown;
}

function ts08function(payload: Ts08payload) {
  for (const key in payload) {
    console.log(payload[key]);
  }
}

interface Ts80User2 {
  // 그냥은 payload로 사용이 불가능하다.
  // payload는 Ts08payload의 형식을 갖고 있기 때문에
  // 인덱스에 접근할 수 있게 인덱스 시그니처로 만들어줘야한다.
  // [key: string]: unknown 추가
  name: string;
  age: number;
}

const ts08example: Ts80User2 = {
  name: "hi",
  age: 32,
};

ts08function(ts08example);
