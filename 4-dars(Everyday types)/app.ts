// any hamda unknown typelari bir-biriga juda ham o’xshash hisoblanib, ikkisini ham
// avvaldan aniq bo’lmagan qiymatlarni biriktirishda qo’llaniladi. biror bir o’zgaruvchini
// type any bo’lsa uni boshqa bir o’zgaruvchiga hech qanday muammosiz biriktirish mumkin
// bo’lib qoladi. Albatta bu yaxshi emas. Bunday holatlarda unknown typedan foydalanish tavsiya qilinadi.

// let anyValue: any = 20;
// let anyNum: number = anyValue;

// let someValue: unknown = 20;
// // let someNum: number = someValue; // Type 'unknown' is not assignable to type 'number'
// let someNum1: number = <number>someValue; // let someNum1: number = someValue as number
// =================================================================================================

//Union type
// let age: number | string = 20;
// age = "twenty";

// let size: string | null = null;
// size = "Large";

// =================================================================================================
// literal type
// O’zgaruvchining qiymati biz avvaldan kiritib qo’ygan qiymatlardan biriga
// teng bo’lishini xohlasek, “literal” type dan foydalanamiz.
// let size: "sm" | "md" | "lg";
// size = "sm";
// size = "md";
// size = "lg";
// // size = "xl"; // Type '"xl"' is not assignable to type '"sm" | "md" | "lg"'.

// =================================================================================================
// Type Aliases
// TypeScript da mavjud bo’lmagan va bizga dastur davomida bir necha marotaba kerak bo’ladigan
// qiymatlarni bitta typega tenglab qo’yishimiz mumkin.Bunday type — “Type Aliases” deyiladi.
// type Sizes = "SM" | "MD" | "LG" | boolean;
// let someSize: Sizes = false;
// someSize = "SM";
// someSize = "MD";
// someSize = "LG";
// // someSize = "Salom"; // Type '"Salom"' is not assignable to type 'Sizes'
// type USER = {
//   name: string;
//   age: number;
//   email: string;
// };
// let newUser: USER = { name: "Ahmad", age: 20, email: "ahmad0101@gmail.com" };
// // let newUser: USER = { name: "Ahmad", age: 20 }; Property 'email' is missing in type '{ name: string; age: number; }' but required in type 'USER'.

// Avvaldan obyektning propertysi yoki funksiyaning parametrini e’lon qilganimizda
//  uni kiritish majburiy bo’lib qoldi. Agar ularni kiritmasak dasturimiz buziladi.
// Ushbu holatlarni oldini olish uchun, kiritish shart bo’lmagan ba’zi bir qiymatlarni
// ixtiyoriy qilib qo’yishimiz mumkin. Misol un:
type OBJ = {
  name: string;
  age: number;
  email?: string;
};
let newObj: OBJ = { name: "Mahmud", age: 20, email: "mahmud@gmail.com" };
newObj = { name: "Muhammad", age: 20 };

function fullInfo(firstName: string, lastName: string, age?: number) {
  if (age) {
    return `${firstName} ${lastName} is ${age} years old`;
  } else {
    return `${firstName} ${lastName}`;
  }
}
console.log(fullInfo("Mavlon", "Yusuf", 22)); // Mavlon Yusuf is 22 years old
console.log(fullInfo("Mavlon", "Yusuf")); // Mavlon Yusuf
