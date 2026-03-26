// Mendeklarasikan variabel untuk menyimpan angka yang sedang diketik oleh pengguna
let inputSaatIni = '';
// Mendeklarasikan variabel untuk menyimpan angka pertama yang diketik sebelum operator dipilih
let inputSebelumnya = '';
// Mendeklarasikan variabel untuk menyimpan jenis operator matematika (+, -, *, /)
let operatorPilihan = null;

// Fungsi ini dipanggil ketika tombol angka (0-9 atau titik) ditekan
function tambahAngka(angka) {
    // Mencegah pengguna memasukkan lebih dari satu titik desimal dalam satu angka
    if (angka === '.' && inputSaatIni.includes('.')) return;
    // Menggabungkan angka yang baru ditekan ke belakang angka yang sudah ada (sebagai teks)
    inputSaatIni = inputSaatIni + angka;
    // Memanggil fungsi untuk memperbarui tampilan di layar HTML agar angka muncul
    perbaruiLayar();
}

// Fungsi ini dipanggil ketika tombol operator (+, -, *, /) ditekan
function pilihOperator(operator) {
    // Jika layar kosong (tidak ada angka yang diketik), batalkan fungsi agar tidak error
    if (inputSaatIni === '') return;
    // Jika sudah ada angka sebelumnya (berarti pengguna menekan operator kedua kalinya beruntun)
    if (inputSebelumnya !== '') {
        // Lakukan perhitungan angka pertama dan kedua terlebih dahulu sebelum lanjut
        hitung();
    }
    // Simpan operator matematika yang baru saja ditekan ke dalam variabel
    operatorPilihan = operator;
    // Pindahkan angka yang baru saja diketik ke variabel memori (inputSebelumnya)
    inputSebelumnya = inputSaatIni;
    // Kosongkan variabel inputSaatIni agar pengguna bisa mengetik angka kedua
    inputSaatIni = '';
}

// Fungsi ini dipanggil saat tombol Sama Dengan (=) ditekan atau saat perhitungan beruntun
function hitung() {
    // Mendeklarasikan variabel kosong untuk menampung hasil perhitungan sementara
    let hasil;
    // Mengubah variabel inputSebelumnya (yang tadinya teks) menjadi tipe data angka desimal (float)
    const angkaSebelumnya = parseFloat(inputSebelumnya);
    // Mengubah variabel inputSaatIni (yang tadinya teks) menjadi tipe data angka desimal (float)
    const angkaSaatIni = parseFloat(inputSaatIni);

    // Memastikan kedua input benar-benar angka, jika salah satunya bukan angka maka batalkan perhitungan
    if (isNaN(angkaSebelumnya) || isNaN(angkaSaatIni)) return;

    // Melakukan pengecekan terhadap operator matematika apa yang sedang dipilih
    switch (operatorPilihan) {
        // Jika pengguna memilih operator penambahan
        case '+':
            // Lakukan proses penambahan antara angka pertama dan kedua
            hasil = angkaSebelumnya + angkaSaatIni;
            // Keluar dari blok pengecekan switch
            break;
        // Jika pengguna memilih operator pengurangan
        case '-':
            // Lakukan proses pengurangan antara angka pertama dan kedua
            hasil = angkaSebelumnya - angkaSaatIni;
            // Keluar dari blok pengecekan switch
            break;
        // Jika pengguna memilih operator perkalian
        case '*':
            // Lakukan proses perkalian antara angka pertama dan kedua
            hasil = angkaSebelumnya * angkaSaatIni;
            // Keluar dari blok pengecekan switch
            break;
        // Jika pengguna memilih operator pembagian
        case '/':
            // Lakukan proses pembagian antara angka pertama dan kedua
            hasil = angkaSebelumnya / angkaSaatIni;
            // Keluar dari blok pengecekan switch
            break;
        // Jika operator tidak dikenali (mencegah error)
        default:
            // Hentikan fungsi dan jangan lakukan perhitungan apa-apa
            return;
    }

    // Mengubah hasil perhitungan yang berupa angka kembali menjadi teks dan menyimpannya ke inputSaatIni
    inputSaatIni = hasil.toString();
    // Mengosongkan variabel operator karena proses perhitungan sudah selesai
    operatorPilihan = null;
    // Mengosongkan variabel inputSebelumnya karena angkanya sudah selesai dihitung
    inputSebelumnya = '';
    // Memanggil fungsi untuk menampilkan hasil akhir tersebut ke layar kalkulator
    perbaruiLayar();
}

// Fungsi ini dipanggil ketika tombol C (Clear) ditekan
function bersihkan() {
    // Mengosongkan kembali variabel angka yang sedang diketik
    inputSaatIni = '';
    // Mengosongkan kembali variabel angka memori
    inputSebelumnya = '';
    // Mengosongkan kembali variabel operator matematika
    operatorPilihan = null;
    // Memanggil fungsi untuk mereset tampilan layar HTML menjadi angka 0
    perbaruiLayar();
}

// Fungsi khusus untuk memperbarui teks yang ada di dalam elemen HTML
function perbaruiLayar() {
    // Mengambil elemen HTML layar, jika inputSaatIni kosong tampilkan '0', jika tidak tampilkan inputSaatIni
    document.getElementById('layar').innerText = inputSaatIni === '' ? '0' : inputSaatIni;
}