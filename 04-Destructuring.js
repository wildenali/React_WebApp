console.log("----------------- Destructuring Array start -----------------");
/* 
Destructuring adalah mengambil bagian tertentu dari array/object.
Destructuring sangat berguna ketika kita bekerja dengan object atau array dengan banyak data,
namun di saat tertentu kita hanya memerlukan sebagian kecil saja
*/

var huruf = ['a', 'b', 'c', 'd'];
var [hurufPertama] = huruf
var [hurufA, hurufB, ...hurufSisa] = huruf
console.log(hurufPertama);
console.log(hurufA);
console.log(hurufB);
console.log(hurufSisa);

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, second, ...rest] = ["Mercury", "Earth", ...planets, "Saturn"];
console.log(first);
console.log(second);
console.log(rest);
console.log("----------------- Destructuring Array end -----------------\n");


console.log("----------------- Destructuring Object start -----------------");
var tinggi = {
  andi  : 150,
  budi  : 170,
  ucup  : 120,
  dena  : 160,
  edo   : 140,
}
var { budi } = tinggi;
console.log(budi);            // mengambil nilai budi saja dengan descructuring
console.log(tinggi.budi);     // mengambil nilai budi saja dengan object.key

// Memberikan nama alias
var { ucup : suracup } = tinggi;
console.log(suracup);
console.log("----------------- Destructuring Object end -----------------\n");