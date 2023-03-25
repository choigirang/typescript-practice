interface Ts09A {
  name: string;
  age: number;
}

interface Ts09B extends Ts09A {
  example: boolean;
}

const ts09user: Ts09A = {
  name: "1",
  age: 1,
  // Ts09A 인터페이스 타입이기 떄문에
  // 다른 속성은 추가 및 삭제 불가능
};

const ts09user2: Ts09B = {
  age: 1,
  example: false,
  // Ts09B 인터페이스 타입
  // Ts09A를 확장하고 있기 때문에 name도 있어야 함
};

// 인터페이스 의 이름이 중복됐을 때 후속 인터페이스는
// 앞서 작성한 인터페이스의 속성을 참조하여야 한다.
interface Ts09C {
  a: string;
  b: string;
}

interface Ts09C {
  // a: string;
  // b: string
  c: number;
  a: number;
}
