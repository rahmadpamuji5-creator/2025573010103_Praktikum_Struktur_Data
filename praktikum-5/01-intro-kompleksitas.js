function ukurWaktu(label, fn){
  const mulai =  Date.now();
  fn ();
  const selasai = Date.now();
  console.log(`${label} : ${selasai - mulai} ms`);

}
const N = 100_100 ; 

function JumlahkanLinear (n){
  let total = 0 ;
  for ( let i = 1 ;i<=n ; i++) total +=i ;
  return total ;
}
function JumlahkanRumus(n){
  return ( n * ( n + 1)) / 2 ;
}

function Caripasangan (arr){
  const pasangan = []
  for (let i = 0 ;  i<arr.length ; i ++){
    for (let j=1 +1 ; j < arr.length ; j ++){
      if (arr[i] + arr [j]=== 10) pasangan.push([arr[i],arr[i]]);
    }
  }  
  return pasangan;
}

const data = Array.from ({length : 5000 }, (_, i) => i);

console.log('===Perbandingan Waktu Eksekusi===');
ukurWaktu('0(1) JumlahkanRumus',()=> JumlahkanRumus(N));
ukurWaktu('0(n) JumlahkanLinear', ()=> JumlahkanLinear(N));
ukurWaktu('0(n^2) Caripasangan', () => Caripasangan(data));

console.log('\nhasil sama?',JumlahkanLinear(100) === JumlahkanRumus(100));


