function kuadratBiasa(x){
  return x*x ;
}
const kuadrat =(x)=> {
  return x * x ;
};

const kuadratRingkas = x=> x * x;
console.log ('=== perbandingan tulisan===');
console.log ('biasa   :',kuadratBiasa(5));
console.log ('arrow   :',kuadrat(5));
console.log ('ringkas :',kuadratRingkas(5));

const luas = (panjang,lebar) =>panjang * lebar ;
const salam = (nama, waktu) =>`selamat ${waktu} , ${nama} !`;

console.log ('luas 4x6 : ',luas(4,6));
console.log (salam('budi','pagi'));

function lakukanOperasi(angka,operasionalCallBack){
  console.log('angka awal : ${angka}');
  const hasil = operasionalCallBack(angka);
  console.log(`hasil setelah operasi : $ {hasil}`);
}
console.log('\n===callback===');
lakukanOperasi(7,kuadratRingkas);
lakukanOperasi(10, x => x + 100);
lakukanOperasi(20, function(x){
return x / 2 ;
});
console.log('\n=== setTimeout (Callback) ===');
console.log('Pesan 1: Sebelum timer');
setTimeout(() => {
console.log('Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)');
}, 1000); 
console.log('Pesan 2: Setelah mendaftarkan timer');

//LATIHAN 2
 console.log('===Latihan 2===');
 
const keHurufBesar = (str) => str.toUpperCase();

const tambahSeru = (str) => str + '!!!'

const hitungKata = (str) => str.split(' ').length;

function prosesKalimat(kalimat, transformasiCallback) {
  const hasil = transformasiCallback(kalimat);
  console.log(hasil);
}

const kalimat = 'belajar javascript itu menyenangkan';

prosesKalimat(kalimat, keHurufBesar);
prosesKalimat(kalimat, tambahSeru);
prosesKalimat(kalimat, hitungKata);
 
 

