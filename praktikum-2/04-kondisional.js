// 04-kondisional.js
//================================================
// KONDISIONAL: if/else, switch, ternary
//================================================

//---IF / ELSE IF / ELSE: Konversi nilai ke grade---
let nilaiUjian=78;

console.log('=== Konversi Grade');
console.log('Nilai :',nilaiUjian);

if (nilaiUjian >= 90) {
console.log('Grade: A (Sangat Baik)');}
 else if (nilaiUjian >= 80) {
console.log('Grade: B (Baik)');}
 else if (nilaiUjian >= 70) {
console.log('Grade: C (Cukup)');}
 else if (nilaiUjian >= 60) {
  console.log('Grade: D (Kurang)');}
 else {console.log('Grade: E (Tidak Lulus)');}

 //--SWITCH : Cek Nama Hari--

 let NamaHari='Rabu';
 console.log('\n ===Cek Jenis hari===');
 switch(NamaHari){
  case 'senin':
  case 'selasa':
  case 'rabu':
  case 'kamis':
  case 'jumat':
  case 'sabtu':
  case 'minggu':
  console.log(`${NamaHari} adalah hari kerja.`);
  break;
  default :
  console.log('nama hari tidak dikenal.');
 }

 //--ternary operator:cek kelulusan--
 let nilaiakhir=65;
 let statusLulus = nilaiakhir>=60 ? 'lulus' : 'Tidak Lulus';

 console.log('\n==Status Kelulusan==');
 console.log(`Nilai ${nilaiakhir} : ${statusLulus}`);

 //Latihan 2

 const bulan = 7;

if (bulan == 12 || bulan==1 ||bulan==2) {
  console.log('bulan ini Musim Dingin');
}
else if( bulan == 3 || bulan ==4 || bulan==5){
  console.log(' bulan ini Musim Semi');
}
else if( bulan == 6 || bulan == 7 || bulan== 8){
  console.log(' bulan ini Musim Panas');
}
else{
  console.log('bulan ini Musim Gugur');
}

console.log('=== Operator Logika ===');
let adaAwan = true;
let adaAngin = false;

console.log('Apakah Cuaca mendung sekaligus berangin :', adaAwan && adaAngin); 
console.log('Apakah Ada Awan Atau angins? :', adaAwan || adaAngin); 
console.log('Apakah Langit Cerah :', !adaAwan); 

 