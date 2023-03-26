class User {
  //   public payload
  payload;
  constructor(payload: string) {
    this.payload = payload;
  }
  getPayload() {
    return this.payload;
  }
}

class User1<P> {
  //   public payload
  constructor(public payload: P) {}
  getPayload() {
    return this.payload;
  }
}

interface UserAType {
  name: string;
  age: number;
  isValid: boolean;
}

interface UserBType {
  name: string;
  age: number;
  email: string[];
}

const ts15User = new User1<UserAType>({
  name: "string",
  age: 1,
  isValid: true,
  emails: [], // UserAType과 일치하지 않음
});
// 함수에서의 제네릭과 같이 사용가능

const neo = new User1<UserBType>({
  name: "string",
  age: NaN,
  email: ["asd"],
});

export {};
