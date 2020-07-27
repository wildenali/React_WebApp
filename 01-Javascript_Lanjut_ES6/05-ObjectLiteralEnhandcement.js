console.log("----------------- Object Literal Enhancement start -----------------");
/* 
Object Literal Enhancement (OLE) adalah proses penyusunan object yang lebih singkat.
Sesuai nama nya, OLE hanya dapat digunakan pada object, dan tidak dapat digunakan pada array.
*/

var nama          = "Sahbian";
var usia          = "1";
var jenisKelamin  = "Perempuan"

// Penulisan object normal
var anakA = {
  nama          : nama,
  usia          : usia,
  jenisKelamin  : jenisKelamin,
  hobi          : 'Mengaji'
}
console.log(anakA);

// Penulisan object literal enhancement
var anakB = {
  nama,
  usia,
  jenisKelamin,
  hobi          : 'Mengaji'
}
console.log(anakB);

/* Perhatikan pada contoh diatas, kita tidak perlu menuliskan kembali pasangan key : value,
jika nama key dan nama value nya sama */
console.log("----------------- Object Literal Enhancement end -----------------\n");