console.log("----------------- Filter() start -----------------");
var angka = [1,2,3,4,5,6,'a'];

// membuat array baru dengan angka element sama persis
var daftarAngka = angka.filter(element => true)
console.log(daftarAngka);

// membuat array baru dengan element angka2 dia atas 3
var angkaDiatasBatas = angka.filter(element => element > 3)
console.log(angkaDiatasBatas);
console.log("----------------- Filter() end -----------------\n");

console.log("----------------- FindIndex() start -----------------");
/* Method ini digunakan untuk mencari index atau posisi suatu value / element dalam array.
Method ini berguna ketika kita menggunakan array yang memiliki element cukup banyak,
atau array yang element-element nya dinamis (berubah-ubah posisi), 
sehingga sulit diketahui secara pasti saat ini di posisi index berapa element berada. 
Method ini mengembalikan nilai berupa index array atau -1 jika element yang dicari tidak ditemukan. */

// array of object
var daftarSiswa = [
  {id: 1, nama: 'Aura'},
  {id: 2, nama: 'Bryan'},
  {id: 3, nama: 'Charlie'},
  {id: 4, nama: 'Diandra'}
]

// Mencari posisi Bryan
var posisiDoi = daftarSiswa.findIndex(element => element.nama == "Bryan");
console.log(posisiDoi);

// Parameternya ga harus bernama element, bisa nama lain misalnya
var posisiDoiCoy = daftarSiswa.findIndex(siDoi => siDoi.nama == 'Diandra');
console.log(posisiDoiCoy);

// Testing kalau salah
var posisiDia = daftarSiswa.findIndex(siDia => siDia.nama == 'Ucup');
console.log(posisiDia);
console.log("----------------- FindIndex() end -----------------\n");

console.log("----------------- Splice() start -----------------");
/* 
Method splice dapat digunakan untuk menghapus dan menyisipkan element pada array.
Method shift() dan pop() dapat digunakan untuk menghapus element paling awal dan paling akhir,
sedangkan untuk menghapus element yang berada di tengah, gunakanlah splice().

Format penulisan :
array.splice(indexAwal, jumlahElementDiDelete, itemTambahan1, itemTambahan2, …, … )
*/
var namaBulan = ['Jan', 'Mar', 'Apr'];

// Menyispkan bulan Feb ke index 1
namaBulan.splice(1, 0, 'Feb');  // Menyisipkan ke index 1, dan menghapus 0 element
console.log(namaBulan);

// Menyispkan bulan Mei ke index 4
namaBulan.splice(4, 0, 'Mei');
console.log(namaBulan);

// Menghapus elemet Apr
namaBulan.splice('Apr', 1);
console.log(namaBulan);
console.log("----------------- Splice() end -----------------\n");

console.log("----------------- Sort() start -----------------");
var daftarSiswaA = ['bryan', 'dyandra', 'charlia', 'aura'];
console.log(daftarSiswaA.sort());

var angkaA = [3,5,4,7,2,1,10];
console.log(angkaA.sort()); 
// timbul keanehan, angka sepuluh di anggap lebih kecil dari 2, why? karena ada angka 1 di depannya
// cara nge solve nya ada;ah, pakai compare function
console.log(angkaA.sort(function(a, b){return a - b}));

// mengurutkan terbalik
console.log(angkaA.sort(function(a, b){return b - a}));

console.log("----------------- Sort() end -----------------\n");

console.log("----------------- Looping For..of end -----------------");
var dataSiswa = [
  {id: 1, nama: 'Aura'},
  {id: 2, nama: 'Bryan'},
  {id: 3, nama: 'Charlie'},
  {id: 4, nama: 'Diandra'}
]
for (const siswa of dataSiswa) {
  console.log(siswa.nama);
}
console.log("----------------- Looping For..of end -----------------\n");