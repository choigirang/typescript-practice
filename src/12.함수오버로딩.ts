function add1(a: string, b: string) {
  return a + b;
}

function add2(a: number, b: number) {
  return a + b;
}

add1("a", "b");
add2(1, 3);
add1("a", 1);
add2("b", 1);

function add3(a: string, b: string): string;
function add3(a: number, b: number): number;
function add3(a: any, b: any) {
  return a + b;
}
// 함수의 타입을 호환시킬 수 있다.

add3("a", "a");
add3(1, 2);
add3("a", 1);
