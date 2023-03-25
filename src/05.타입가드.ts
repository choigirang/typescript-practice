function logText(el: Element) {
  console.log(el.textContent);
}

const h1E1 = document.querySelector("hi");
logText(h1E1); // 없을 수도 있는 가능성을 내포함
// 타입어서션으로 없애줘도 되지만
// 단언이 잘못될 수도 있어서 타입 가드를 사용한다.

const d1E1 = document.querySelector("h1");
if (d1E1 instanceof HTMLHeadingElement) logText(d1E1);
// instanceof 어떤 클래스의 인스턴스인지

//
function ts05add(val: string | number) {
  let res = "Result =>";
  if (typeof val === "number") res += val.toFixed(2);
  if (typeof val === "string") res += val.toUpperCase();
}
