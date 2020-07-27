console.log("----------------- Export Import start -----------------");
// Pakai Cara biasa
const phi = 22/7;
const hitungLuas = (r) => {
  let luas = phi * r * r;
  return luas;
}
let luasLingkaran = hitungLuas(3);
console.log(luasLingkaran);


// Pakai Import modul
const konstantMat = require('./07-A-konstantaMath');
console.log(konstantMat); // outputnya object
const hitungLuasLagi = (r) => {
  let luas = konstantMat.pie * r * r;
  return luas;
}
let luasLingkaranLagi = hitungLuasLagi(3);
console.log(luasLingkaranLagi);


console.log("----------------- Export Import end -----------------\n"); 