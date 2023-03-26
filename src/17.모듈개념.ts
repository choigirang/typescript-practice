// <reference path="./main.d.ts" />
// 삼중 슬래시 지시자

// 파일명을 main.d.ts로 바꾸면
// lodash.d.ts를 자동으로 찾지 못해 인식하지 못 한다.
// reference를 이용해 main에서 lodash를 찾는다.
import _ from "lodash";
// npm i lodash
// lodash는 자바스크립트로 만들어졌기 때문에 ts로 가져오려면 마찬가지로 type선언이 필요하다.
// lodash라는 파일 /node_modules/에서 가져옴

// 모듈의 타입을 직접 선언해도 되지만 패키지로 설치도 가능하다.
// npm info @types/node-fetch
// npm i @types/lodash -D
// 개발 의존성으로 설치함

const str = "example";

console.log(_.camelCase(str));
console.log(_.snakeCase(str));

// Lodash는 배열(array), 객체(object), 숫자(number), 문자열(string) 등의 다양한 자료형에 대한 유틸리티 함수들을 제공합니다.
// 배열에서 첫 번째 요소를 반환합니다.
_.head([1, 2, 3]); // 출력 결과: 1

// 객체에서 특정 속성을 추출합니다.
_.pick({ name: "Alice", age: 25, email: "alice@example.com" }, [
  "name",
  "email",
]);
// 출력 결과: { name: "Alice", email: "alice@example.com" }

// 문자열에서 특정 문자를 치환합니다.
_.replace("Hello, World!", "World", "Lodash"); // 출력 결과: "Hello, Lodash!"
console.log(_.pick(str)); // lodash.d.ts에 선언을 해줘야한다.
