"use strict";
// TS da array e’lon qilib uni type ni avvaldan ko’rsatib o’tmasak bu array any type dan
// tashkil topib qoladi. Shuning uchun arrayning typeni oldindan ko’rsatib o’tish tavsiya qilinadi.
// let arrAny = [1, 2, 3, true, "salom"]; // let arrNum: any = [1, 2, 3, true, "salom"]
// let arrNum: number[] = [1, 2, 3, 4, 5]; //let arrNum: Array<number> = [1, 2, 3, 4, 5];
// let arrStr: string[] = ["salom", "TS"]; // let arrStr: Array<string> = ["salom", "TS"];
// let arrStrNum: (number | string)[] = [1, 2, 3, 4, 5, "Salom", "TS"];
// let arrStrNum1: Array<number | string> = [1, 2, 3, 4, 5, "Salom", "TS"];
// =================================================================
// Tuple
// Tuple JS da mavjud bo’lmagan data structure hisoblanib, u array bilan deyarli bir xil.
// Asosiy farqi tuple ichidagi ma’lumotlarni indeksi bo’yicha e’lon qilinib turgan
// vaqtda type kiritiladi. Misol un
// let arrNum: number[] = [1, 2, 3];
// // let tupleNum: [number, number, number] = [1, 2, 3];
// // let tupleNum: [number, number, string] = [1, 2, 3]; // Type 'number' is not assignable to type 'string'.
// let tupleNum: [number, number, string] = [1, 2, "Salom"];
// tupleNum.push("TS"); // [1, 2,"Salom", "TS"]
// =================================================================
// Enum
// Enum ham JS da mavjud bo’lmagan data structurelardan hisoblanib,
// JS ga IIFE ko’rinishida compile bo’ladi. uning keylariga qiymat bermasak,
// tartib bilan 0 dan qiymat olishni boshlaydi. Agar keylariga string
// typedagi qiymatni bersak barchasiga qiymat yozishimiz majburiy bo’lib qoladi. Misol un:
// enum Lang {
//   Uz,
//   Eng,
//   Ru,
// }
// console.log(Lang.Uz, Lang.Eng, Lang.Ru); // 0, 1, 2
// enum Lang {
//   Uz,
//   Eng = 5,
//   Ru,
// }
// console.log(Lang.Uz, Lang.Eng, Lang.Ru); // 0, 5, 6
var Lang;
(function (Lang) {
    Lang["Uz"] = "Uzbek";
    Lang["Eng"] = "English";
    Lang["Ru"] = "Russian";
})(Lang || (Lang = {}));
console.log(Lang.Uz, Lang.Eng, Lang.Ru); // Uzbek, English, Russian
//# sourceMappingURL=app.js.map