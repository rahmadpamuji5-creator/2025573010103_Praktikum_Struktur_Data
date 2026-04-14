function faktororial(n) {
  //base case : berhenti saat n=1
  if (n <= 1) return 1;

  return n * faktororial(n - 1);
}
console.log('===faktorial===');
console.log('0! =', faktororial(0));
console.log('1! =', faktororial(1));
console.log('5! =', faktororial(5));
console.log('7! =', faktororial(7));

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log('\n=== Fibonacci ===');
for (let i = 0; i <= 8; i++) {
  process.stdout.write(fibonacci(i) + ' ');
}
console.log("");

function jumlahArray(arr, indeks = 0) {
  if (indeks === arr.length) return 0;

  return arr[indeks] + jumlahArray(arr, indeks + 1);
}
const angka = [3, 7, 2, 9, 5];
console.log('\n=== Jumlah Array dengan Rekursi ===');
console.log('Array :', angka);
console.log('Jumlah :', jumlahArray(angka));

function countdown(n) {
  if (n < 0) {
    console.log('Selesai!');
    return;
  }
  console.log(n);
  countdown(n - 1);
}
console.log('\n=== Countdown Rekursif ===');
countdown(5);
