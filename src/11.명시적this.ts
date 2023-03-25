interface Cat {
  name: string;
  age: number;
}

const cat: Cat = {
  name: "choi",
  age: 10,
};

function ts11Hello(message: string) {
  console.log(`${this.name}, ${message}`);
}

ts11Hello(cat, "string");
ts11Hello.call(cat, "string");

function ts11Hello2(this: Cat, message: string) {
  console.log(`${this.name}, ${message}`);
}
// 여기서 인자로 넘겨지는 this는 매개변수가 아니라
// 타입스크립트의 문법 this를 명시할 수 있음
