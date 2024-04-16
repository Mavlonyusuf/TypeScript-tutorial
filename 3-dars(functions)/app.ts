// TypeScriptda funksiyalarning ushbu ko’rinishda e’lon qilinadi :
// function pow(x: number, y: number): number {
//   return x ** y;
// }
// console.log(pow(6, 4)); // 1296

// let addNums = (x: number, y: number): number => x + y;
// console.log(addNums(6, 4)); // 10
// O’zidan hech qanday qiymat qaytarmaydigan funksiyalar “void” typedagi funksiyalar hisoblanadi. Misol un:

// function log(x: number, y: number) {
//   console.log(x, y);
// }
// Avvaldan qanday bo’lishini e’lon qilib qo’yilgan hamda dastru davomida turli
// xil ko’rinishda ishlatiladigan funksiyalarga — Signatures Function deyiladi.
// type SomeFuncType = (x: number, y: number) => number;

// const add: SomeFuncType = (a, b) => a + b;
// const mul: SomeFuncType = (a, b) => a * b;

// console.log(add(1, 3)); // 4
// console.log(mul(1, 3)); // 3

// TS da bir xil nom bilan e’lon qilinib, bir nechta vazifani bajaradigan funksiyalar
//   — “Overload Function” deyiladi.
// function add(a: number, b: number, c: number): number;
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

// function add(a: any, b: any, c?: any): any {
//   if (c) {
//     return a + c;
//   }
//   if (typeof a === "string") {
//     return `a is ${a}, b is ${b}`;
//   } else if (typeof b === "string") {
//     return `a is ${a}, b is ${b}`;
//   } else {
//     return a + b;
//   }
// }
// console.log(add(1, "2"));

// Hech qanday qiymatga ega bo’lmagan yoki o’zidan xatolik qaytaradigan yokida cheksiz loopdan
// iborat bo’lgan funksiyalar — “Never” typeli funksiyalar deyiladi.

function raiseError(message: string): never {
  throw new Error(message);
}

function forever(): never {
  while (true) {
    console.log("Hello");
  }
}
