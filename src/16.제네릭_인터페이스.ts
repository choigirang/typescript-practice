// 인터페이스 제약 조건

interface MyData<T> {
  name: string;
  value: T;
}

const dataA: MyData<string> = {
  name: "string",
  value: "asdasd",
};

const dataB: MyData<number> = {
  name: "string",
  value: 1,
};

const dataC: MyData<boolean> = {
  name: "string",
  value: true,
};

const dataD: MyData<number[]> = {
  name: "string",
  value: [123, 4124],
};

interface MyData2<T extends string | number> {
  name: string;
  value: T;
}
// extends를 활용하여 T는 string이거나 number만
