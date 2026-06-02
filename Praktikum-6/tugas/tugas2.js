class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function palindromLL(head) {
  const arr = [];
  let curr = head;

  while (curr) {
    arr.push(curr.data);
    curr = curr.next;
  }

  let kiri = 0;
  let kanan = arr.length - 1;
  while (kiri < kanan) {
    if (arr[kiri] !== arr[kanan]) return false;
    kiri++;
    kanan--;
  }
  return true;
}

function hapusNDariAkhir(head, n) {
  const dummy = new Node(0);
  dummy.next = head;

  let cepat = dummy;
  let lambat = dummy;

  for (let i = 0; i <= n; i++) {
    cepat = cepat.next;
  }

  while (cepat) {
    cepat = cepat.next;
    lambat = lambat.next;
  }

  lambat.next = lambat.next.next;
  return dummy.next;
}

function tengahLinkedList(head) {
  let lambat = head;
  let cepat = head;

  while (cepat && cepat.next) {
    lambat = lambat.next;
    cepat = cepat.next.next;
  }

  return lambat;
}

function buatList(arr) {
  if (!arr.length) return null;
  const head = new Node(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new Node(arr[i]);
    curr = curr.next;
  }
  return head;
}

function cetakList(head) {
  let s = "";
  let curr = head;
  while (curr) {
    s += curr.next ? `[${curr.data}] → ` : `[${curr.data}]`;
    curr = curr.next;
  }
  console.log(s || "Kosong");
}

console.log("=== UJI COBA 1: palindromLL ===");
const p1 = buatList([1, 2, 3, 2, 1]);
const p2 = buatList(["r", "a", "d", "a", "r"]);
const p3 = buatList([1, 2, 3, 4]);
console.log("Kasus 1:", palindromLL(p1));
console.log("Kasus 2:", palindromLL(p2));
console.log("Kasus 3:", palindromLL(p3));

console.log("\n=== UJI COBA 2: hapusNDariAkhir ===");
let h1 = buatList([1, 2, 3, 4, 5]);
let h2 = buatList([10, 20, 30]);
let h3 = buatList([100, 200]);

console.log("Kasus 1 (Awal):"); cetakList(h1);
h1 = hapusNDariAkhir(h1, 2);
console.log("Kasus 1 (Hasil):"); cetakList(h1);

console.log("Kasus 2 (Awal):"); cetakList(h2);
h2 = hapusNDariAkhir(h2, 1);
console.log("Kasus 2 (Hasil):"); cetakList(h2);

console.log("Kasus 3 (Awal):"); cetakList(h3);
h3 = hapusNDariAkhir(h3, 2);
console.log("Kasus 3 (Hasil):"); cetakList(h3);

console.log("\n=== UJI COBA 3: tengahLinkedList ===");
const t1 = buatList([1, 2, 3, 4, 5]);
const t2 = buatList([1, 2, 3, 4, 5, 6]);
const t3 = buatList([10, 20]);

console.log("Kasus 1 Tengah:", tengahLinkedList(t1).data);
console.log("Kasus 2 Tengah:", tengahLinkedList(t2).data);
console.log("Kasus 3 Tengah:", tengahLinkedList(t3).data);