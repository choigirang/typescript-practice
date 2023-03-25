// 타입에 대한 별명을 작성함
// 타입이 많아질수록 재사용성의 효율이 높은 예시

type TypeA = string;
type TypeB = string | number | boolean;
type Ts10a =
  | {
      name: string;
      age: number;
      isValid: boolean;
    }
  | [string, number, boolean];

const ts10userA: Ts10a = {
  name: "a",
  age: 1,
  isValid: true,
};

const ts10userB: Ts10a = ["이런것도", 1, true];

function someFunc(param: TypeB): TypeA {
  switch (typeof param) {
    case "string":
      return param.toUpperCase();
    case "number":
      return param.toFixed(2);
    default:
      return true;
    // TypeA를 반환하는데 string이 와야 한다.
  }
}

// 인터페이스로 사용이 가능하다.
type Ts10interface = {
  name: string;
  age: number;
}; // 타입은 할당을 해줘야 한다.

interface Ts10interfaceA {
  name: string;
  age: number;
}

const heropy: ?? = {
  name: "keke",
  age: 0,
}; // 둘 다 와도 가능
// 기능적으로는 차이가 없지만 취향에 맞게 사용할 수 있고
// interface를 사용하는 게 좋다.
// 타입은 그저 별칭을 위한 거, 인터페이스는 객체를 위하기 떄문
