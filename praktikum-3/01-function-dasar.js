function sapa(){
console.log('Halo! Selamat datang di praktikum javascript.');
}
sapa ();
sapa();

function sapaNama(nama){
  console.log('Halo, ${nama} !Selamat Belajar.');
}
sapaNama('Budi');
sapaNama('Sitti');

function tambah(angka1,angka2){
  const hasil = angka1 +angka2 ;
  return hasil;
}

const hasilPenjualan =tambah (10,25);
console.log('10 + 25 =',hasilPenjualan);
console.log('7+13 =',tambah(7,13));

function hitung(nilai,pengali =2){
  return nilai * pengali ;
}
console.log(hitung(5));
console.log(hitung(5,4));

const pesanGlobal = 'saya ada dimana saja';

function cekScope(){
  const pesanLokal = 'saya ada didalam fungsi ini';
  console.log(pesanGlobal);
  console.log(pesanLokal);

}
cekScope();
console.log(pesanGlobal);

//LATIHAN 1 KALKULATOR LENGKAP.

console.log('===latihan 1===');

function kurang( a,b){
  return a - b ;
}
function kali (a, b){
  return a * b ;
}
function bagi (a, b){
  if ( b == 0 ) {
    console.log('Error,Tidak bisa dibagi dengan nol.');
    return null ;
  }
  return 1 / b;
}

function tambah(a , b ){
  return a + b ;
}


function kalkulator( a,operator,b){
  switch(operator){
    case '-':
      return kurang(a, b);
      case'x' :
      return kali(a, b);
      case '/':
        return bagi(a, b);
        case '+':
          return tambah(a,b );
          default :
          console.log('error');
          return null;
  }
}
console.log ('10 - 2 =',kalkulator(10, '-' ,5));
console.log (' 3 * 3 =',kalkulator(3,'x',3));
console.log ('12 / 12 =',kalkulator(12,'/',12));
console.log('23 + 40 =',kalkulator(23,'+',40));
console.log('12 / 0 =',kalkulator(12, '/',0));