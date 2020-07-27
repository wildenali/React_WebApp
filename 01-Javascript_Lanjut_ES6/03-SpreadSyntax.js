console.log("----------------- Spread Syntax start -----------------");
/* 
Spread syntax dapat digunakan untuk melakukan clone/copy,
melakukan proses penggabungan dan kombinasi array atau object serta untuk parameter fungsi.
Spread syntax ditandai dengan tanda titik tiga kali (…).
*/

// Clone Array cara Biasa
var angkaX = [1,2,3,4];
var angkaY = angkaX;
console.log('angkaX = ' + angkaX);
console.log('angkaY = ' + angkaY);
angkaY[0] = 8;
console.log('angkaX = ' + angkaX);
console.log('angkaY = ' + angkaY);

// Clone Array pake Spread Syntax
var angkaA = [1,2,3,4];
var angkaB = [...angkaA];
console.log('angkaA = ' + angkaA);
console.log('angkaB = ' + angkaB);
angkaB[0] = 8;
console.log('angkaA = ' + angkaA);
console.log('angkaB = ' + angkaB);

// Clone Object pake Spread Syntax
var mobilSaya = {
  type: 'Mustang',
  merk: 'Ford',
  warna: 'Hitam'
}
console.log(mobilSaya);
var mobilWilden = {...mobilSaya}
console.log(mobilWilden);
console.log("----------------- Spread Syntax end -----------------\n");


console.log("----------------- Penggabungan dan Kombinasi Array/Object start -----------------");
var nilaiKelasA = [10, 20, 30];
var nilaiKelasB = [40, 50, 60];

var nilaiKelasAB = [...nilaiKelasA, ...nilaiKelasB];
console.log(nilaiKelasAB);

// Contoh lain
var namaMahasiswaC = ['wilden', 'ali', 'murtado'];
var namaMahasiswaGab = ['andrea', 'siapa', ...namaMahasiswaC ,'wkwk'];
console.log(namaMahasiswaGab);
console.log("----------------- Penggabungan dan Kombinasi Array/Object end -----------------\n");

console.log("----------------- Parameter Fungsi Array start -----------------");
var perkalianLimaAngka = (a, b, c, d, e) => a * b * c * d * e;
var data = [1, 2, 3, 4, 5];

// Memanggil fungsi dengan cara lama
var hasilA = perkalianLimaAngka(data[0], data[1], data[2], data[3], data[4])
console.log(hasilA);

// Memanggil fungsi dengan spread syntax
var hasilB = perkalianLimaAngka(...data);
console.log(hasilB);
console.log("----------------- Parameter Fungsi Array end -----------------\n");