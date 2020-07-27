console.log("----------------- const start -----------------");
const nama = 'wilden';
// nama = 'wildenali';

/* 
ini akan error, kenapa karena variable const ini variable yg fix nilainya
tidak bisa diubah2
*/
console.log(nama);
console.log("----------------- const end -----------------\n");

console.log("----------------- let start -----------------");
// mari bandingkan antara var dan let, kalau var kan variable yg udah lama di js
// kalau let kan yg terbaru dan muncul di Es6

// fungsi var
function belajarVar() {
  var pekerjaan = 'developer';
  var materiBelajar = 'belajar fisika, kenapa apel jatuh';

  if (pekerjaan == 'developer') {
    var materiBelajar = 'belajar kimia loh sekarang';
    console.log(materiBelajar);
  }
  console.log(materiBelajar);
}
console.log('-VAR-');
belajarVar();
console.log('\n');

// fungsi let
function belajarLet() {
  let pekerjaan = 'programmer';
  let materiBelajar = 'belajar programmer, kenapa komputer nyala';

  if (pekerjaan == 'programmer') {
    let materiBelajar = 'belajar potong kabel';
    console.log(materiBelajar);
  }
  console.log(materiBelajar);
}
console.log('-LET-');
belajarLet();

// Kesimpulannya: let ini di eksekusi di pada scope blok code nya, sedangkan var itu dia lebih ke scope global
console.log("----------------- let end -----------------\n");

console.log("----------------- Template Literas start -----------------");
/* Template literal adalah cara penulisan string yang memungkinkan kita menempelkan (embed) expression ataupun variabel pada string. Penulisannya dengan menggunakan backtick `` */
var name = 'wilden ali';
var profil = 'Robotics Engineer'

// Penggabungan String versi lama
console.log('name ' + name + ' hobby as ' + profil);

// Penggabungan String versi template iteral
console.log(`name ${name} hobby as ${profil}`);

// versi lama
var kalimat = 'Saya seorang developer\n' +
            'saya belajar Javascript\n' +
            'saya belajar di Codepolitan'

// menggunakan template literals
var kalimatKedua = `Saya seorang developer
                    saya belajar Javascript
                    saya belajar di Codepolitan`
console.log(kalimat);
console.log(kalimatKedua);
console.log("----------------- let end -----------------\n");