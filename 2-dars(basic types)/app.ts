// TypeScriptda o'zgaruvchi e'lon qilish ushbu ko'rinishda bo'ladi
let text: string = "Salom TS";
// o'zgaruvchi nomidan so'ng uni qaysi type(tur)ga tegishliligini yozib ketiladi.
// Yozib ketmasa ham primitive turlarda null va undefined dan boshqa typelarni vscode ni o'zi qaysi typega
// tegishliligini biriktirib qo'yadi

let num = 20; // let num:number = 20
// Agar biror-bir o'zgaruvchini qiymatini boshqa typedagi qiymat bilan o'zgartirmoqchi bo'lsak, vscode bizga xato qaytaradi
// num = true; //Type 'boolean' is not assignable to type 'number'

// null yoki undefined typelarini oldindan aytib o'tmasak uni any typega o'tkazib qo'yadi

let value = null; // let value:any = null
// any typega tegishli bo'lgan o'zgaruvchini istalgan typega tegishli bo'lgan qiymatga o'zgartirish mumkin
// bo'lib, bundan foydalanish tavsiya qilinmaydi. Chunki, bu holatda typeScriptni manosi yo'qolib qoladi

// Agar biz biror obyekt e'lon qilmoqchi bo'lsak ushbu ko'rinishda yozish tavsiya qilinadi

let obj: { name: string; age: number } = { name: "Ahmad", age: 20 };
console.log(obj.name); // Ahmad
