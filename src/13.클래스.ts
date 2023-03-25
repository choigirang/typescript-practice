// public 어디서나 자유롭게 접근이 가능하고 클래스 바디에서 사용이 가능하다.
// protected 나와 파생된 후손 클래스 내에서 접근 가능하다.
// private 내 클래스에서만 접근 가능하다.
// 위 내용은 메서드로도 사용 가능하다.

class UserA {
  // 여기가 바디 부분
  //   public first: string = "";
  //   // 다른 class에서 접근 가능
  //   last: string = "";
  //   age: number = 0;

  //   constructor(public first: string,public last: string,public age: number) {
  //     this.first = first;
  //     this.last = last;
  //     this.age = age;
  //     // 바디부분에 선언되어 있어야 한다.
  //     // 깔끔하게 위의 코드를 매개변수에 직접 처리
  //   }

  // 위 코드를 더욱 줄여서
  constructor(
    public first: string = "",
    public last: string = "",
    public age: number = 0
  ) {}

  public getAge() {
    return `${this.first}.${this.last}.${this.age}`;
  }
}

class UserB extends UserA {
  getAge(): string {
    return `${this.first}.${this.last}.${this.age}`;
  }
}

class UserC extends UserB {
  getAge(): string {
    return `${this.first}.${this.last}.${this.age}`;
  }
}

const neo = new UserA("neo", "anderson", 102);
console.log(neo.first);
console.log(neo.last);
console.log(neo.age);
