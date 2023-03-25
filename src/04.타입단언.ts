// 타입 단언(assertion)
// 1
const el = document.querySelector("body");
el.textContent = "123";
el!.textContent = "123";

const el2 = document.querySelector("body") as HTMLElement;
el2.textContent = "123";

// 2
function getNumber(x: number | null | undefined) {
  return Number(x.toFixed(2));
}

function getNumber2(x: number | null | undefined) {
  return Number(x!.toFixed(2));
}

function getNumber3(x: number | null | undefined) {
  return Number((x as number).toFixed(2));
}
getNumber3(null); // null을 toFixed 할 수 없지만 우리가 단언해줬기 떄문에 가능
// 오류임, 잘못된 타입 단언을 통한

// 3
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number(x.toFixed(2));
  }
}

function getValue2(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2));
  }

  return (x as string).toUpperCase();
}

getValue2("hello", false);
getValue2(3.123123, true);
getValue2(123123, true); // 에러가 발생해야 하는데 문제가 된다.

// 4
let ts04num2: number;
// 할당단언 연산자인 "!"를 붙여서 내가 이미 할당을 했다고
// 단언(거짓말)을 해줄 수 있다.
// 자바스크립트에서는 그저 undefined를 출력하면 되지만
// 타입스크립트에서는 허용하지 않기 때문에
console.log(ts04num2);
ts04num2 = 2;

let ts04num3!: number;
console.log(ts04num3);
