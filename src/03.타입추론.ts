// 타입 추론 (inference)

const ts03num = 12;
ts03num = "12";
// 타입을 선언하진 않았지만 할당된 값이 숫자이기 때문에
// 숫자가 와야되는구나 하고 추론을 하게 된다.

let ts04num = 12;

function ts04add(a: number, b = 2) {
  return a + b;
}

// function ts04add(a: number, b:number = 2):number{
//     return a + b
// }

ts04add(1, 3); // b가 number이기 때문에 추론함
// 리턴값이 : number라고 함수에게 알려주지 않아도
// 숫자와 숫자를 더 하면 숫자이기 떄문에 추론하게 됨
