const konstantaMat = require('./07-A-konstantaMath');

exports.hitungLuas = r => {
  let luas = konstantaMat.pie * r * r;
  return luas;
}

exports.hitungKeliling = r => {
  let keliling = 2 * konstantaMat.pie * r;
  return keliling;
}