// 05-perulangan.js
// ==============================================
// PERULANGAN: for, while, break, continue
// ==============================================

//--FOR LOOP--
// Struktur: for (inisialisasi; kondisi; update)
console.log('=== For Loop: Hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
console.log(`Iterasi ke-${i}`);
}
// --- WHILE LOOP ---
console.log('\n=== While Loop: Countdown ===');
let hitung = 5;
while (hitung > 0) {
console.log(`Hitung mundur: ${hitung}`);
hitung--; // WAJIB: kurangi nilai agar loop tidak berjalan selamanya
}
console.log('Selesai!');

// --FOR LOOP: Mencetak bilangan genap--
console.log('\n==Bilangan Genap antara 1-20==');
for (let i = 1; i<= 20; i++) {
  if (i % 2 == 0 ){ // jika i habis dibagi 2 (sisa =2),maka genap
    process.stdout.write( ' ');//cetak di abris yang sama
  }
}
console.log(' ');//pindah baris

//break dan continue
console.log('\n==break dan continue==');
for (let i = 1;i<=10; i++){
  if (i===4) {
    console.log(`melewati angka ${i} (continue)`);
    continue ; //lewati harga 4,lanjut ke i=5
    
  }
  if(i===8){
    console.log(`berhenti di angka ${i} (break)` );
    break;//hentikan loop

  }
  console.log( `angaka : ${i}`);
}

//latihan 3


console.log("Bentuk Segitiga Bintang");

for (let i = 1; i <= 5; i++) {
    let segitiga = "";
    for (let j = 1; j <= i; j++) {
        segitiga += "*";
    }
    console.log(segitiga);
}

console.log("Deret Bilangan Prima 1-50");
for (let angka = 1; angka <= 50; angka++) {
    let dibagi = 0;
    if (angka > 1) {
        for (let i = 1; i <= angka; i++) {
            if (angka % i == 0) {
                dibagi++;
            }
        }
        if (dibagi == 2) {
            console.log(angka);
        }
    }
}

