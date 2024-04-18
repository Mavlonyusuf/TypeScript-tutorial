"use strict";
/*
=============================== Class access modifiers ===============================
Class fieldlarini dastur davomida nazorat qilish mumkin bo’lib, ular asosan
5 ta kalit so’z orqali amalga oshiriladi.
=============================== Readonly ===============================
1.Readonly ⇒ ushbu kalit so’z orqali istalgan fieldni faqat o’qish uchun qilib qo’yish mumkin.
Ya’ni, o’sha fieldda qiymatini o’zgartirish imkoniyat mavjud bo’lmaydi. Xuddi primitive ma’lumot
    turlarini “const” kalit so’zi bilan e’lon qilingandek bo’lib qoladi. Barcha kalit so’zlarni
    constructorni ichida ham yozib ketsa bo’ladi. Constructorni ichida yozgandan so’ng u fieldalrni
    yuqori e’lon qilish shart bo’lmay qoladi.
*/
// class Person {
//   readonly _name: string;
//   _age: number;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
// }
// let user: Person = new Person("Mavlon", 23);
// console.log(user); // Person {_name: 'Mavlon', _age: 23}
// user._name = "Yusuf"; // Cannot assign to '_name' because it is a read-only property.
// console.log(user); // Person {_name: 'Mavlon', _age: 23}
// class Person {
//   constructor(readonly name: string, readonly age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// let user: Person = new Person("Mavlon", 23);
// console.log(user); // Person {name: 'Mavlon', age: 23}
/*
=============================== Public ===============================
2. Public ⇒ classlarning fieldlari default holatda “public” hisoblanib,
    public bo’lgan fieldlarni istalgan joyda ishlatish imkoni mavjud.
*/
// class Person {
//   constructor(public name: string, public age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// let user: Person = new Person("Mavlon", 23);
// console.log(user); // Person {name: 'Mavlon', age: 23}
// user.name = "Yusuf";
// user.age = 24;
// console.log(user); // Person {name: 'Yusuf', age: 24}
/*
=============================== Ptotected ===============================
3. Protected ⇒ classning “protected” xususiyatiga ega bo’lgan fieldini faqat classning
    ichida yoki classdan meros olgan boshqa bir classning ichida ishlatish mumkin.
    Classdan yasalgan obyektni ichida ishlatish mumkin emas.
*/
// class User {
//   protected name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello(): void {
//     console.log(`Hi. My name is ${this.name}`);
//   }
// }
// const newUser: User = new User("Mavlon", 23);
// newUser.name = "Ahmad"; // Property 'name' is protected and only accessible within class 'User' and its subclasses
// newUser.sayHello();
/*
=============================== Private ===============================
4. Private ⇒ protected bilan deyarli bir xil xususiyat bo’lib, asosiy farqi
    "private" fieldni faqat e’lon qilingan classning ichida ishlatish mumkin.
    Meros olgan classlarda ham ishlatib bo’lmaydi.
*/
// class Flower {
//   name: string;
//   color: string;
//   private isBloom: boolean;
//   constructor(name: string, color: string, isBloom: boolean) {
//     this.name = name;
//     this.color = color;
//     this.isBloom = isBloom;
//   }
// }
// class Tree extends Flower {
//   harvest: number;
//   constructor(name: string, color: string, isBloom: boolean, harvest: number) {
//     super(name, color, isBloom);
//     this.harvest = harvest;
//   }
//   info(): void {
//     console.log(`${this.name} is ${this.isBloom ? "bloomed" : "not bloomed"}`);
//     // Property 'isBloom' is private and only accessible within class 'Flower'
//   }
// }
// const apple: Tree = new Tree("Apple", "green", true, 1000);
//
/*
=============================== Abstract ===============================
5. Abstract ⇒ ushbu kalit so’z agar classning oldidan yozilsa, undan obyekt hosil qilib bo’lmaydi.
    Faqatgina undan meroslik olish mumkin.

*/
// abstract class Base {
//   abstract getName(): string;
//   printName() {
//     console.log("Hello, " + this.getName());
//   }
// }
// const b = new Base(); //Cannot create an instance of an abstract class.
//# sourceMappingURL=app.js.map