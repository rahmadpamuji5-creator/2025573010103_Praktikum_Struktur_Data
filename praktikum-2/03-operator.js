// 03-operator.js
// ================================================
// OPERATOR JAVASCRIPT
// ================================================
// --- OPERATOR ARITMATIKA ---

let a = 17;
let b = 5;

console.log('=== Aritmatika ===');
console.log(`${a} + ${b} = ${a + b}`); // 22
console.log(`${a} - ${b} = ${a - b}`); // 12
console.log(`${a} * ${b} = ${a * b}`); // 85
console.log(`${a} / ${b} = ${a / b}`); // 3.4
console.log(`${a} % ${b} = ${a % b}`); // 2 (sisa bagi: 17 = 5x3 + 2)
console.log(`${a} ** ${b} = ${a ** b}`); // 1419857 (17 pangkat 5)


console.log('=== Perbandingan ===');
console.log('10 > 5 :', 10 > 5); // true
console.log('10 < 5 :', 10 < 5); // false
console.log('10 >= 10 :', 10 >= 10); // true
console.log('10 <= 9 :', 10 <= 9); // false


console.log('--- Perbedaan == dan === ---');
console.log('5 == "5" :', 5 == '5'); // true (JANGAN gunakan ini!)
console.log('5 === "5" :', 5 === '5'); // false (SELALU gunakan ini)
console.log('5 !== 3 :', 5 !== 3); // true (tidak sama dengan)

console.log('=== Logika ===');
let sudahMakan = true;
let punyaUang = false;

console.log('Makan && Uang :', sudahMakan && punyaUang); // false

// OR (||): salah satu kondisi cukup true
console.log('Makan || Uang :', sudahMakan || punyaUang); // true

// NOT (!): membalik nilai bolean
console.log('!sudahMakan :', !sudahMakan); // false
console.log('!punyaUang :', !punyaUang); // true

//latihan 1

const panjang = '12';
const lebar = '8';

console.log('=== Hitung Luas Persegi Panjang===');
console.log(`panjang = ${panjang}  lebar = ${lebar}`);
console.log(`Luas persegi Panjang = ${ panjang * lebar}`);

console.log('===Hitung keliling persegi panjang===');
console.log(`Panjang = ${panjang} Lebar = ${lebar}`);
console.log(`Keliling persegi panjang = ${2* panjang * lebar}`);

console.log('===Logika True and False===');

let luas = 96
console.log('luas = 96');

if( luas > 100){
console.log(' Hasilnya adalah : true');
}
else{
  console.log('Hasilnya adalah : false');
}
  

