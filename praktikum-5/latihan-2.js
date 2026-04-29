// 1. ALGORITMA LAMBAT (O(n^2))
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

// 2. ALGORITMA CEPAT (O(n))
function cariPasanganCepat(arr, target) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const selisih = target - arr[i];

    if (map[selisih] !== undefined) {
      return [map[selisih], i];
    }

    map[arr[i]] = i;
  }

  return null;
}

// 3. TEST KECIL
const arrTest = [2, 7, 11, 15];
const targetTest = 9;

console.log("=== TEST KECIL ===");
console.log("Lambat:", cariPasanganLambat(arrTest, targetTest));
console.log("Cepat:", cariPasanganCepat(arrTest, targetTest));

// 4. FUNGSI UKUR WAKTU (lebih akurat)
function ukurWaktu(fn, arr, target) {
  const start = performance.now();
  const result = fn(arr, target);
  const end = performance.now();

  console.log(`${fn.name} → waktu: ${(end - start).toFixed(2)} ms, hasil:`, result);
}

// 5. TEST BESAR
const ukuran = 50000;

// buat array random
const arrBesar = Array.from({ length: ukuran }, () =>
  Math.floor(Math.random() * 100000)
);

const targetBesar = arrBesar[0] + arrBesar[1];

console.log("\n=== TEST BESAR ===");

// jalankan cepat dulu
ukurWaktu(cariPasanganCepat, arrBesar, targetBesar);
