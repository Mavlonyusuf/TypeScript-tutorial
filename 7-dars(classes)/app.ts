// class Person {
//   readonly _name: string;
//   _age: number;

//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
// }
// const user: Person = new Person("Mavlon", 23);
// console.log(user); // Person {_name: 'Mavlon', _age: 23 }
// class Admin extends Person {
//   _isAdmin: boolean;

//   constructor(_name: string, _age: number, isAdmin: boolean) {
//     super(_name, _age);
//     this._isAdmin = isAdmin;
//   }
//   info(): string {
//     return `Hello. My name is ${this._name} and I'm ${
//       this._age
//     } years old. I'm ${this._isAdmin ? "a admin" : "a not admin"}`;
//   }
// }
// const newAdmin: Admin = new Admin("Yusuf", 23, true);
// console.log(newAdmin._name); // Admin {_name: 'Yusuf', _age: 23, _isAdmin: true}
// console.log(newAdmin.info()); // Hello. My name is Yusuf and I'm 23 years old. I'm a admin
//Classning metodlarini meros qilib olib uni qayta ishlatish ham mumkin.

// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   info(): string {
//     return `Hello my name is ${this.name} and I'm ${this.age} years old.`;
//   }
// }
// class Admin extends Person {
//   isAdmin: boolean;
//   constructor(name: string, age: number, isAdmin: boolean) {
//     super(name, age);
//     this.isAdmin = isAdmin;
//   }
//   fullInfo(): string {
//     const parentMethod = super.info();
//     return `${parentMethod} I'm a ${this.isAdmin ? "admin" : "not admin"}`;
//   }
// }
// const admin: Admin = new Admin("Mavlon", 23, true);
// console.log(admin.fullInfo()); // Hello my name is Mavlon and I'm 23 years old. I'm a admin
