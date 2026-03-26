// --- BAGIAN 1: FUNGSI PENGECEKAN BILANGAN PRIMA ---

// Membuat fungsi bernama 'cekBilanganPrima' yang menerima satu inputan (parameter) bernama 'angka'
function cekBilanganPrima(angka) {
    // Memeriksa apakah angka yang dimasukkan kurang dari atau sama dengan 1
    if (angka <= 1) {
        // Jika ya, langsung kembalikan nilai 'false' karena 1, 0, dan bilangan negatif BUKAN bilangan prima
        return false;
    }

    // Memulai perulangan (looping) dengan variabel 'i' yang dimulai dari angka 2 (bilangan prima terkecil)
    // Perulangan ini akan terus berjalan selama 'i' lebih kecil atau sama dengan akar kuadrat dari 'angka'
    // (Menggunakan Math.sqrt() membuat kinerja program jauh lebih cepat karena tidak perlu mengecek semua angka)
    for (let i = 2; i <= Math.sqrt(angka); i++) {
        
        // Mengecek apakah 'angka' habis dibagi dengan 'i' (menggunakan operator modulus '%')
        // Jika sisa baginya adalah 0, berarti 'angka' tersebut bisa dibagi dengan bilangan lain selain 1 dan dirinya sendiri
        if (angka % i === 0) {
            // Jika kondisi di atas benar, maka kembalikan 'false' karena itu PASTI BUKAN bilangan prima
            return false;
        }
    }

    // Jika perulangan di atas sudah selesai dan program tidak menemukan angka yang bisa membagi habis,
    // maka kembalikan nilai 'true' yang berarti angka tersebut ADALAH bilangan prima
    return true;
}


// --- BAGIAN 2: CONTOH PENGGUNAAN DAN PENGUJIAN KODE ---

// Mendeklarasikan variabel 'angkaDites' dengan nilai 13 untuk kita uji coba
let angkaDites = 13;

// Memanggil fungsi cekBilanganPrima dan mengecek apakah hasilnya true
if (cekBilanganPrima(angkaDites)) {
    // Jika hasilnya true, cetak teks ini ke dalam Console browser
    console.log(angkaDites + " adalah bilangan prima.");
} else {
    // Jika hasilnya false, cetak teks ini ke dalam Console browser
    console.log(angkaDites + " bukan bilangan prima.");
}


// --- (BONUS) Menampilkan deret bilangan prima dari 1 sampai 20 ---
// Mencetak teks pembuka ke console
console.log("Deret bilangan prima dari 1 sampai 20:");

// Membuat perulangan dari angka 1 hingga 20
for (let j = 1; j <= 20; j++) {
    // Menggunakan fungsi yang sudah kita buat di atas untuk mengecek setiap angka 'j'
    if (cekBilanganPrima(j)) {
        // Jika angka 'j' adalah bilangan prima, cetak angka tersebut ke console
        console.log(j);
    }
}