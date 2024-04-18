"use strict";
/*
==================================== Namespaces ====================================
Namespace ⇒ bir xil turdagi classlarni dastur davomida adashtirib yubormaslik uchun boshqa
    fayl ochib modullardan foydalanishimiz mumkin edi. TypeScriptda modullarga muqobil ravishda
    namespace lar ham mavjud bo’lib, asosan bir turdagi vazifani bajarayotgan class yoki
    funksiyalarni o’rab olish uchun ishlatiladi. Xuddi interfacelar singari namespacelarda
    ham bir nom bilan bir nechta namespace yaratish mumkin bo’lib, birini ichidagi classlarni
    ikkinchi birida ishlatish uchun “export” qilish talab qilinadi.
*/
var Animals;
(function (Animals) {
    class Animal {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    Animals.Animal = Animal;
})(Animals || (Animals = {}));
(function (Animals) {
    class Tiger extends Animals.Animal {
        sound;
        constructor(name, sound) {
            super(name);
            this.sound = sound;
        }
        sayHello() {
            console.log(`%c${this.sound}`, `color: red; font-size: 24px`);
        }
    }
    let tiger = new Tiger("Sherxon", "ARRR");
    tiger.sayHello();
})(Animals || (Animals = {}));
//# sourceMappingURL=app.js.map