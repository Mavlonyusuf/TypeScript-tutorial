/*
==================================== Namespaces ====================================
Namespace ⇒ bir xil turdagi classlarni dastur davomida adashtirib yubormaslik uchun boshqa 
    fayl ochib modullardan foydalanishimiz mumkin edi. TypeScriptda modullarga muqobil ravishda 
    namespace lar ham mavjud bo’lib, asosan bir turdagi vazifani bajarayotgan class yoki 
    funksiyalarni o’rab olish uchun ishlatiladi. Xuddi interfacelar singari namespacelarda 
    ham bir nom bilan bir nechta namespace yaratish mumkin bo’lib, birini ichidagi classlarni 
    ikkinchi birida ishlatish uchun “export” qilish talab qilinadi. 
*/
namespace Animals {
  export abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    abstract sayHello(): void;
  }
}
namespace Animals {
  class Tiger extends Animals.Animal {
    sound: string;
    constructor(name: string, sound: string) {
      super(name);
      this.sound = sound;
    }
    sayHello(): void {
      console.log(`%c${this.sound}`, `color: red; font-size: 24px`);
    }
  }
  let tiger: Tiger = new Tiger("Sherxon", "ARRR");
  tiger.sayHello();
}
