"use strict";
// any hamda unknown typelari bir-biriga juda ham o’xshash hisoblanib, ikkisini ham
// avvaldan aniq bo’lmagan qiymatlarni biriktirishda qo’llaniladi. biror bir o’zgaruvchini
// type any bo’lsa uni boshqa bir o’zgaruvchiga hech qanday muammosiz biriktirish mumkin
// bo’lib qoladi. Albatta bu yaxshi emas. Bunday holatlarda unknown typedan foydalanish tavsiya qilinadi.
let newObj = { name: "Mahmud", age: 20, email: "mahmud@gmail.com" };
newObj = { name: "Muhammad", age: 20 };
function fullInfo(firstName, lastName, age) {
    if (age) {
        return `${firstName} ${lastName} is ${age} years old`;
    }
    else {
        return `${firstName} ${lastName}`;
    }
}
console.log(fullInfo("Mavlon", "Yusuf", 22)); // Mavlon Yusuf is 22 years old
console.log(fullInfo("Mavlon", "Yusuf")); // Mavlon Yusuf
//# sourceMappingURL=app.js.map