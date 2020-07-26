console.log("----------------- Arrow Function start -----------------");
/* Arrow function adalah fitur baru di ES6. Sesuai dengan namanya, sintaks fungsi ini menggunakan tanda panah (=>). Penggunaan arrow function dapat mempersingkat penulisan fungsi, karena tidak memerlukan keyword function. Sintaks return juga dapat dihilangkan ketika menggunakan arrow function. */

// ES5
function perkalian(a, b) {
  return a * b;
}
console.log(perkalian(4, 5));

// Arrow Function ES6
var perkalianArrow = (a, b) => a * b;
console.log(perkalianArrow(2, 3));

// Arrow Function ES6 atau cara penulisan lainnya
var perkalianArrow2 = (a, b) => {
  return a * b;
}
console.log(perkalianArrow2(10, 3));
console.log("----------------- Arrow Function end -----------------\n");


console.log("----------------- Arrow Function with 1 Prameter start -----------------");
// Cara lama, tanpa parameter
function sayHai() {
  console.log('Hai, saya Siapa???')
}
sayHai();

// Arrow Function ES6, tanpa parameter
var sayHaiArrow = () => {
  console.log('Hai, saya Arrow Siapa???')
}
sayHaiArrow();

// Cara baru dengan 1 parameter
function sayHai(saySiapa) {
  console.log(`sayHai, saya ${saySiapa}`);
}
sayHai('aliw');

// Arrow Function ES6, tanpa parameter
var sayHaiArrow2 = sayArrow => console.log(`sayHaiArrow, saya ${sayArrow}`);
sayHaiArrow2('murtado');

// Cara Lama, contoh pakai method array.map()
var angka = [1,2,3,4];
var angkaBaru = angka.map(function(element) {
  return element * 2;
})
console.log(angkaBaru);

// Arrow Function Es6, contoh pakai method array.map()
var angka2 = [1,2,3,4];
var angkaBaru2 = angka2.map(element2 => element2 * 3);
console.log(angkaBaru2);
console.log("----------------- Arrow Function with 1 Prameter end -----------------\n");