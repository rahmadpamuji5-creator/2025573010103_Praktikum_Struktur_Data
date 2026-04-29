// O(1)
function fn_O1(n) {
  // Time: O(1), Space: O(1)
  return n + 1;
}

// O(n)
function fn_On(n) {
  // Time: O(n), Space: O(1)
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// O(n log n)
function fn_OnLogn(n) {
  // Time: O(n log n), Space: O(1)
  let count = 0;
  const logN = Math.floor(Math.log2(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < logN; j++) {
      count++;
    }
  }
  return count;
}

// O(n^2)
function fn_On2(n) {
  // Time: O(n^2), Space: O(1)
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}

// BENCHMARK FUNCTION
function benchmarkSemua(ukuranData) {
  console.log("===== HASIL BENCHMARK =====");

  for (let n of ukuranData) {
    console.log(`\nUkuran data: ${n}`);

    console.time("O(1)");
    fn_O1(n);
    console.timeEnd("O(1)");

    console.time("O(n)");
    fn_On(n);
    console.timeEnd("O(n)");

    console.time("O(n log n)");
    fn_OnLogn(n);
    console.timeEnd("O(n log n)");

    console.time("O(n^2)");
    fn_On2(n);
    console.timeEnd("O(n^2)");
  }
}

benchmarkSemua([100, 500, 1000, 5000, 10000]);