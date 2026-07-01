class Pasien {
  constructor(id, nama, prioritas) {
    this.id = id;
    this.nama = nama;
    this.prioritas = (prioritas === 'darurat' || prioritas === 'biasa') ? prioritas : 'biasa';
    this.waktuDaftar = new Date().toLocaleTimeString();
  }
}

class AntrianRS {
  constructor() {
    this.antrianDarurat = [];
    this.antrianBiasa = [];
  }

  daftar(pasien) {
    if (pasien.prioritas === 'darurat') {
      this.antrianDarurat.push(pasien);
      console.log(`[Daftar] pasien ${pasien.nama} (id : ${pasien.id}) Masuk antrean DARURAT.`);  
    } else {
      this.antrianBiasa.push(pasien);
      console.log(`[Daftar] pasien ${pasien.nama} (id : ${pasien.id}) Masuk antrean BIASA.`);  
    }
  }

  layani() {
    let pasienDilayani = null;
    if (this.antrianDarurat.length > 0) {
      pasienDilayani = this.antrianDarurat.shift();
    } else if (this.antrianBiasa.length > 0) {
      pasienDilayani = this.antrianBiasa.shift();
    } else {
      console.log('\n[layani] Semua antrian kosong. tidak ada pasien yang dilayani');
      return;
    }
    console.log(`\n[melayani] -> Pasien Id : ${pasienDilayani.id} | Nama : ${pasienDilayani.nama} | prioritas : ${pasienDilayani.prioritas.toUpperCase()} | Terdaftar : ${pasienDilayani.waktuDaftar}`);
  }

  tampilkanAntrian() {
    console.log('\n======= ANTRIAN =======');
    console.log(`Antrian Darurat (${this.antrianDarurat.length}) :`);
    if (this.antrianDarurat.length === 0) console.log(' - kosong');
    this.antrianDarurat.forEach((p, index) => {
      console.log(`  ${index + 1}. [${p.id}] ${p.nama}`);
    });

    console.log(`Antrian Biasa (${this.antrianBiasa.length}):`);
    if (this.antrianBiasa.length === 0) console.log(" - Kosong");
    this.antrianBiasa.forEach((p, index) => {
      console.log(`  ${index + 1}. [${p.id}] ${p.nama}`);
    });
    console.log("================================================\n");
  }
}

const rsSehat = new AntrianRS();

const daftarNama = ["Andi", "Budi", "Chandra", "Dewi", "Eko", "Fani", "Gita", "Hadi", "Indah", "Joko"];
const opsiPrioritas = ["darurat", "biasa"];

console.log("=== PROSES PENDAFTARAN 10 PASIEN SECARA ACAK ===");
for (let i = 1; i <= 10; i++) {
  const namaAcak = daftarNama[i - 1];
  const prioritasAcak = opsiPrioritas[Math.floor(Math.random() * opsiPrioritas.length)];
  
  const pasienBaru = new Pasien(`P-${100 + i}`, namaAcak, prioritasAcak);
  rsSehat.daftar(pasienBaru);
}

rsSehat.tampilkanAntrian();

console.log("=== PROSES PELAYANAN PASIEN ===");
for (let i = 0; i <= 10; i++) {
  rsSehat.layani();
}