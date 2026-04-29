let n = 5; // <-- tambahan supaya tidak error

// Fungis A
function fn(n) {
  return  n * 2 ;
  // Big 0 : 0(1)
  // karena hanya satu kali perkalian  
}

// Fungsi B 
for (let i = 0 ;i < n ; i ++ ) {
  for ( let j = 0 ; j < n ; j ++ ) {
    console.log(i,j);
  }
}
// Big 0 : 0(n^2)
// karena melewati proses nested loop

// Fungsi C
for (let i = 1 ; i < n ; i*=2) {
  console.log(i);
}
// Big 0 : 0(log n)
// karena memiliki proses pencarian

// Fungsi D
let arr = Array.from({ length: n }, (_, i) => i);
arr.forEach (x => arr.forEach(y => arr.forEach(z => console.log(x,y,z))))
// Big 0 : 0(n^3)
//karena memiliki 3 kali perulangan 



//Implementasi 
function fungsiA(n) {
  return n * 2;
}

function fungsiB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      
    }
  }
}

function fungsiC(n) {
  for (let i = 1; i < n; i *= 2) {
    
  }
}

function fungsiD(n) {
  let arr = Array.from({ length: n }, (_, i) => i);
  arr.forEach(x => {
    arr.forEach(y => {
      arr.forEach(z => {
        
      });
    });
  });
}