interface ts07GetName {
  // 함수타입인 호출 시그니처 작성
  (message: string): string;
  // 소괄호를 작성해서 사용하는 것을 호출 시그니처
}

interface ts07User {
  name: string;
  age: number;
  // getName: ts07GetName
  getName: (message: string) => string;
  // 인터페이스에서 다른 인터페이스를 사용하는 것이 가능하다.
  // 바로 함수 타입으로 작성해도 된다.
  // 재사용하기 위해 호출 시그니처
}

const ts07heropy: ts07User = {
  name: "he",
  age: 100,
  getName(message: string) {
    console.log(message);
    return this.name;
  },
};

ts07heropy.getName("hi");
