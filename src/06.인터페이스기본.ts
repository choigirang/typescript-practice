interface ts06User {
  name: string;
  age: number;
  isValid: boolean;
}

const ts06heropy: User = {
  name: "Heropy",
  age: 85,
  isValid: true,
};

const ts06neo: User = {
  name: "Neo",
  age: 102,
};

const ts06neo2: User = {
  name: "Neo",
  age: "102",
  isValid: true,
};

// 선택적 속성을 넣으면 " ? " 있어도 되고 없어도 된다.
interface Ts06example {
  maybe?: string;
}

const ts06example2: Ts06example = {
  // 없어도 되기 때문에 오류가 없음
};

// readonly를 사용하여 읽기 전용으로 사용할 수 있다.
interface Ts06example2 {
  readonly maybe: string;
}

const ts06example3: Ts06example2 = {
  maybe: "OK",
};

ts06example3.maybe = "NO";
// 읽기 전용이기 떄문에 변경 불가
