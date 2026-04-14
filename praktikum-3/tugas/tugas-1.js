const dataMahasiswa = [
    { nama: 'Rachmad', nilai: 92 },
    { nama: 'Pamuji', nilai: 78 },
    { nama: 'Zafir', nilai: 85 },
    { nama: 'Ol', nilai: 60 },
    { nama: 'Miftah', nilai: 45 },
    { nama: 'Yoenjung', nilai: 71 }
];

function hitungStatistik(arrMahasiswa) {
    const total = arrMahasiswa.length;
    const jumlahNilai = arrMahasiswa.reduce((sum, mhs) => sum + mhs.nilai, 0);
    const rataRata = jumlahNilai / total;
    const tertinggi = arrMahasiswa.reduce((max, mhs) => mhs.nilai > max ? mhs.nilai : max, 0);
    const terendah = arrMahasiswa.reduce((min, mhs) => mhs.nilai < min ? mhs.nilai : min, 100);

    return { total, rataRata, tertinggi, terendah };
}

function filterLulus(arrMahasiswa, batasLulus) {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
    return arrMahasiswa.map(mhs => {
        let grade;
        if (mhs.nilai >= 90)      grade = 'A';
        else if (mhs.nilai >= 80) grade = 'B';
        else if (mhs.nilai >= 70) grade = 'C';
        else if (mhs.nilai >= 60) grade = 'D';
        else                      grade = 'E';

        return { ...mhs, grade };
    });
}

const statistik = hitungStatistik(dataMahasiswa);
console.log('Statistik Nilai:');
console.log(`Total Mahasiswa : ${statistik.total} orang`);
console.log(`Rata-rata Nilai : ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

const batasLulus = 70;
const mahasiswaLulus = filterLulus(dataMahasiswa, batasLulus);
console.log(`\nMahasiswa Lulus (Nilai >= ${batasLulus}):`);
mahasiswaLulus.forEach(mhs => {
    console.log(`- ${mhs.nama}: ${mhs.nilai}`);
});

const mahasiswaGrade = tambahGrade(dataMahasiswa);
console.log('\nDaftar Nilai & Grade:');
mahasiswaGrade.forEach(mhs => {
    console.log(`- ${mhs.nama}: ${mhs.nilai} (${mhs.grade})`);
});