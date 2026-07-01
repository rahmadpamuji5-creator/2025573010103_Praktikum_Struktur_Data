class HashMapLinearProbing {
  constructor(initialCapacity = 8) {
    this.capacity = initialCapacity;
    this.size = 0;
    this.table = new Array(this.capacity).fill(null);
    
    this.TOMBSTONE = Symbol('TOMBSTONE');
  }

  _hash(key) {
    let hash = 5381;
    const keyStr = String(key);
    for (let i = 0; i < keyStr.length; i++) {
      hash = (hash * 33) ^ keyStr.charCodeAt(i);
    }
    return (hash >>> 0) % this.capacity;
  }

  _getLoadFactor() {
    return this.size / this.capacity;
  }

  _resize() {
    const oldTable = this.table;
    this.capacity *= 2;
    this.size = 0; 
    this.table = new Array(this.capacity).fill(null);

    for (const item of oldTable) {
      if (item !== null && item !== this.TOMBSTONE) {
        this.put(item.key, item.value);
      }
    }
  }

  put(key, value) {
    if (this._getLoadFactor() > 0.7) {
      this._resize();
    }

    let index = this._hash(key);
    let firstTombstoneIndex = -1;


    while (this.table[index] !== null) {
      if (this.table[index] === this.TOMBSTONE) {
        if (firstTombstoneIndex === -1) {
          firstTombstoneIndex = index; 
        }
      } else if (this.table[index].key === key) {
        this.table[index].value = value;
        return;
      }

      index = (index + 1) % this.capacity;
    }
    const targetIndex = firstTombstoneIndex !== -1 ? firstTombstoneIndex : index;
    this.table[targetIndex] = { key, value };
    this.size++;
  }

  get(key) {
    let index = this._hash(key);
    const startIndex = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== this.TOMBSTONE && this.table[index].key === key) {
        return this.table[index].value;
      }
      index = (index + 1) % this.capacity;
      if (index === startIndex) break;
    }
    return undefined;
  }

  delete(key) {
    let index = this._hash(key);
    const startIndex = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== this.TOMBSTONE && this.table[index].key === key) {
        this.table[index] = this.TOMBSTONE; 
        this.size--;
        return true;
      }
      index = (index + 1) % this.capacity;

      if (index === startIndex) break;
    }
    return false; 
  }

  printTable() {
    const display = this.table.map((item, idx) => {
      if (item === null) return 'null';
      if (item === this.TOMBSTONE) return '[TOMBSTONE]';
      return `{ ${item.key}: ${item.value} }`;
    });
    console.log(`Capacity: ${this.capacity}, Size: ${this.size}, Load Factor: ${this._getLoadFactor().toFixed(2)}`);
    console.log(display);
  }
}
const myMap = new HashMapLinearProbing(5);
myMap.put("Alice", "123");
myMap.put("Bob", "456");
myMap.put("Charlie", "789");
myMap.put("Dale", "011");

console.log("--- Setelah Insert ---");
myMap.printTable();

console.log("\n--- Get Data ---");
console.log("Get Alice:", myMap.get("Alice"));

console.log("\n--- Setelah Delete Bob ---");
myMap.delete("Bob");
myMap.printTable();

console.log("\n--- Get Setelah Delete ---");
console.log("Get Charlie (setelah tombstone):", myMap.get("Charlie")); 
//Perbandingan :
// Solusi naif melibatkan pencarian frekuensi setiap element secara berulang ulang menggunakan nested loop tanpa 
//struktur data penyimpanan sementara,lalu melakukan pengurutan manual atau pencarian nilai terbesar sebnayak k kali
//yang tidak efesien.