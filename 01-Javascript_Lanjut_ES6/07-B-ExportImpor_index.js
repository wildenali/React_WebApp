console.log("----------------- Export Import start -----------------");

// import semua data yg di export oleh modul 07-B-Lingkaran
const lingkaran = require('./07-B-Lingkaran');
console.log(lingkaran);
let luasLingkaran = lingkaran.hitungLuas(7);
console.log(luasLingkaran);

// import beberapa data yg di export oleh modul 07-B-Lingkaran
const { hitungLuas, hitungKeliling } = require('./07-B-Lingkaran');
console.log(hitungLuas);
console.log(hitungKeliling);

let luasLingkaranA = hitungLuas(7);
console.log(luasLingkaranA);

let kelilingLingkaranA = hitungKeliling(7);
console.log(kelilingLingkaranA);

console.log("----------------- Export Import end -----------------\n"); 