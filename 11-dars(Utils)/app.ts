/*
====================================== Utility Types ======================================
TypeScript umumiy turdagi o'zgarishlarni osonlashtirish uchun bir nechta “Utilities”
(yordamchi dasturlarni) taqdim etadi. Ulardan dasturning istalgan qismida foydalanish mumkin.  

====================================== Partial ======================================
Partial ⇒ ma’lum bir typening barcha fieldlarini optional(ixtiyoriy) qilib qaytaradi.
*/
// interface IUser {
//   name: string;
//   age: number;
// }
// type User = Partial<IUser>[];
// // type User = {
// //   name?: string;
// //   age?: number;
// // };
// let user: User = [{ name: "Mavlon" }, { age: 23 }];
// My partial by handle
// type MyPartial<T> = {
//   [K in keyof T]?: T[K];
// };
// interface IUser {
//   name: string;
//   age: number;
// }
// type User = MyPartial<IUser>[];
// let user: User = [];
/*
====================================== Required ======================================
Required ⇒ ma’lum bir typening barcha optional(ixtiyoriy) fieldlarini 
    required(kiritish shart) qilib qaytaradi.
*/
// interface IUser {
//   name?: string;
//   age?: number;
// }
// type User = Required<IUser>;
// let user: User = { name: "Mavlon" };
// Property 'age' is missing in type '{ name: string; }' but required in type 'Required<IUser>'.

// My required by handle

// type MyRequired<T> = {
//   [K in keyof T]-?: T[K];
// };
// interface IUser {
//   name?: string;
//   age?: number;
// }
// type User = MyRequired<IUser>;
// // Property 'age' is missing in type '{ name: string; }' but required in type 'MyRequired<IUser>'
// let user: User = { name: "Mavlon" };
/*
====================================== NonNullable ======================================
NonNullable ⇒ ma’lum bir typening ichidagi type null yoki undefined bo’lgan qiymatlarni chiqarib yuboradi.
*/
// interface IPerson {
//   name: string;
//   age: number;
//   email: null;
//   family: undefined;
// }
// type Person = NonNullable<IPerson>;
// type Person = {
//   name: string;
//   age: number;
// };
// let user: Person = {
//   name: "Mavlon",
//   age: 23,
// };
// erroe: Type '{ name: string; age: number; }' is missing the following properties from type 'IPerson': email, family
// type MyNonNullable<T> = {
//   [K in keyof T]: T[K] extends null | undefined ? never : T[K];
// };
// type Person = MyNonNullable<IPerson>;
// let user: Person = {
//   name: "Mavlon",
//   age: 23,
// };
// error: Type '{ name: string; age: number; }' is missing the following properties from type 'MyNonNullable<IPerson>': email, family
// ====================================== Record ======================================
// interface FlowerInfo {
//   age: number;
//   color: string;
// }
// type FlowerName = "Rose" | "Tulip" | "Daisy";
// const flowers: Record<FlowerName, FlowerInfo> = {
//   Rose: { age: 5, color: "pink" },
//   Tulip: { age: 2, color: "Red" },
//   Daisy: { age: 3, color: "Yellow" },
// };
// // by hand
// type MyRecord<K extends string, T> = {
//   [P in K]: T;
// };
// const flowers: MyRecord<FlowerName, FlowerInfo> = {
//   Rose: { age: 5, color: "pink" },
//   Tulip: { age: 2, color: "Red" },
//   Daisy: { age: 3, color: "Yellow" },
// };
// ====================================== Readonly ======================================
// Readonly ⇒ biror typening barcha fieldlarini readnly qilib qo’yish uchun ishlatiladi
// interface FlowerInfo {
//   age: number;
//   color: string;
// }
// const rose: Readonly<FlowerInfo> = {
//   age: 4,
//   color: "darkred",
// };
// rose.age = 5; // Cannot assign to 'age' because it is a read-only property.
// type MyReadonly<T> = {
//   readonly [K in keyof T]: T[K];
// };
// const rose: MyReadonly<FlowerInfo> = {
//   age: 4,
//   color: "darkred",
// };
// const rose = {
//   age: 4,
//   color: "darkred",
// } as const;
// rose.age = 5; // Cannot assign to 'age' because it is a read-only property.
// const tulip = <const>{
//   age: 4,
//   color: "darkred",
// };
// tulip.age = 5; // Cannot assign to 'age' because it is a read-only property.
// console.log(rose);
// ====================================== ReadonlyArray ======================================
// ReadonlyArray ⇒ Istalgan turdagi arrayni readonly holatga o’tkazib beradi.
