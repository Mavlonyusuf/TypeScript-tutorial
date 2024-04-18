// type someType<T> = T;
// let text: someType<string> = "Hello Generics";
// let number: someType<number> = 2024;
// let obj: someType<{ name: string; age: number }> = { name: "Mavlon", age: 23 };
// let nums: someType<number[]> = [1, 2, 3];

// console.log(text); // Hello Generics
// console.log(number); // 2024
// console.log(obj); // { name: "Mavlon", age: 23 }
// console.log(nums); // [1, 2, 3]
// =================== Generic Classes & Interface ===================
// type ListType = number | string;

// interface IList<T> {
//   lists: T[];
//   add(el: T): void;
// }

// class List implements IList<ListType> {
//   lists: ListType[] = [];
//   add(el: ListType) {
//     this.lists.push(el);
//   }
// }
// =================== Extends Generic types ===================
// type Size<T> = T extends string ? string : never;
// type someType = Size<12>; // never

// type newSize = Size<"SM" | "MD" | "LG">;
// type oldSize = Size<"This size is not available">;
// type numSize = Size<40 | 41 | 42>;
// Type 'number' does not satisfy the constraint 'string'. Type 'number' is not assignable to type 'string'.
// interface IPerson {
//   name: string;
//   age: number;
// }
// function getInfo<T extends IPerson>(person: T): string {
//   return `My name is ${person.name} and I'm ${person.age} years old.`;
// }
// const userInfo = getInfo({ name: "Mavlon", age: 23 });
// console.log(userInfo); // My name is Mavlon and I'm 23 years old.
