"use strict";
/* =================== Interface ===================
 Interface ⇒ bizda bir nechta obyekt mavjud bo’lib, ularning propertylari
deyarli bir xil bo’ladigan bo’lsa, ularga har doim typeni yozish vaqtimiz
va kodimizni ko’payib ketishiga sabab bo’ladi. Bunday holatlarda yuqoridagi
type ni bitta interface ga olib qo’yishimiz mumkin. Misol un: */
// Oddiy uslub
// let user: { name: string; age: number } = { name: "Ahmad", age: 23 };
// let admin: { name: string; age: number } = { name: "Muhammad", age: 25 };
// // Interface orqali
// interface IPerson {
//   name: string;
//   age: number;
// }
// let newUser: IPerson = { name: "Ahmad", age: 23 };
// let newAdmin: IPerson = { name: "Muhammad", age: 25 };
/* =================== Interface vs Type ===================
    Type aliases ham interface bilan deyarli bir xil bo’lib, bir-biridan asosiy 3 ta farqi mavjud.
        1.Interface bilan faqat obyektlar uchun type yasash mumkin,
        type aliases bilan esa istalgan typelarni yasashimiz mumkin.
*/
// interface IUser {
//   name: string;
//   id: number;
// }
// let newUser: IUser = { name: "Muhammad", id: 1 };
// type Lang = "Uz" | "Eng" | "Ru";
// type User = {
//   name: string;
//   id: number;
//   language: Lang;
// };
// let newAdmin: User = { name: "Muhammad", id: 1, language: "Uz" };
/* 2.Interfacelarda  bir nom bilan bir necha interface yaratish mumkin bo’lib,
    ularning fieldlari yig’ilib boradi. Ikkita interfacening fieldlari bir xil
    bo’lsa oxirigi yozilganining qiymati olinadi. Type aliaseslarda bir nom
    bilan ikkita type e’lon qilib bo’lmaydi */
// interface IUser {
//   firstName: string;
//   lastName: string;
// }
// interface IUser {
//   age: number;
// }
// let newUser: IUser = {
//   firstName: "Ahmad",
//   lastName: "Muhammad",
//   age: 20,
// };
// console.log(newUser); //{ firstName: "Ahmad", lastName: "Muhammad", age: 20}
/* 3. Interfacelarni kengaytirish uchun “extends” kalit so’zidan foydalaniladi.
        Type aliaseslarda  “ & ” yoki “ | ” lardan foydalaniladi. */
// interface IUser {
//   name: string;
//   age: number;
// }
// interface IAdmin extends IUser {
//   isAdmin: boolean;
// }
// let newAdmin: IAdmin = {
//   name: "Mavlon",
//   age: 23,
//   isAdmin: true,
// };
// console.log(newAdmin); // {name: 'Mavlon', age: 23, isAdmin: true}
// type User = {
//   name: string;
//   age: number;
// };
// type Admin = User & {
//   isAdmin: boolean;
// };
// let newAdmin1: Admin = { name: "Mavlon", age: 23, isAdmin: true };
// console.log(newAdmin1); // {name: 'Mavlon', age: 23, isAdmin: true}
//# sourceMappingURL=app.js.map