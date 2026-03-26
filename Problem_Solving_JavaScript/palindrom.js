// --- FUNGSI PENGECEKAN PALINDROM ---

// Membuat fungsi bernama 'cekPalindrom' yang menerima satu masukan (parameter) bernama 'teks'
function cekPalindrom(teks) {
    
    // Mengubah seluruh huruf di dalam teks menjadi huruf kecil semua (lowercase)
    // Ini penting karena huruf 'A' besar dan 'a' kecil dianggap karakter yang berbeda oleh komputer
    let teksKecil = teks.toLowerCase();

    // Menghapus semua spasi dan tanda baca dari teks menggunakan Regular Expression (Regex)
    // /[^a-z0-9]/g mencari karakter yang BUKAN huruf a-z atau angka 0-9, lalu replace() menggantinya dengan kosong ('')
    let teksBersih = teksKecil.replace(/[^a-z0-9]/g, '');

    // Memecah teks utuh menjadi potongan huruf-huruf tunggal di dalam sebuah Array (daftar)
    // Contoh: "malam" akan berubah menjadi ['m', 'a', 'l', 'a', 'm']
    let arrayHuruf = teksBersih.split('');

    // Membalikkan urutan (posisi) dari huruf-huruf di dalam Array tersebut dari belakang ke depan
    // Contoh: huruf yang tadinya di indeks paling akhir akan dipindah ke indeks paling awal
    let arrayDibalik = arrayHuruf.reverse();

    // Menggabungkan kembali huruf-huruf yang posisinya sudah dibalik tersebut menjadi satu kesatuan teks utuh
    let teksDibalik = arrayDibalik.join('');

    // Membandingkan apakah teks asli yang sudah bersih SAMA PERSIS dengan teks yang posisinya sudah dibalik
    if (teksBersih === teksDibalik) {
        
        // Jika teksnya sama persis saat dibaca dari depan dan belakang, kembalikan nilai 'true' (Ini Palindrom)
        return true;
        
    } else {
        
        // Jika teksnya berbeda, kembalikan nilai 'false' (Ini BUKAN Palindrom)
        return false;
        
    }
}


// --- CONTOH PENGGUNAAN DAN PENGUJIAN KODE ---

// Mendeklarasikan variabel 'kataUji1' dengan nilai string "Kasur Rusak"
let kataUji1 = "Kasur Rusak";
// Mendeklarasikan variabel 'kataUji2' dengan nilai string "Pemrograman"
let kataUji2 = "Pemrograman";

// Mengecek 'kataUji1' menggunakan fungsi cekPalindrom, dan memeriksa apakah hasilnya true (benar)
if (cekPalindrom(kataUji1)) {
    // Jika benar (true), cetak ke console bahwa kata tersebut adalah Palindrom
    console.log("'" + kataUji1 + "' adalah Palindrom.");
} else {
    // Jika salah (false), cetak ke console bahwa kata tersebut bukan Palindrom
    console.log("'" + kataUji1 + "' bukan Palindrom.");
}

// Mengecek 'kataUji2' menggunakan fungsi cekPalindrom, dan memeriksa apakah hasilnya true (benar)
if (cekPalindrom(kataUji2)) {
    // Jika benar (true), cetak ke console bahwa kata tersebut adalah Palindrom
    console.log("'" + kataUji2 + "' adalah Palindrom.");
} else {
    // Jika salah (false), cetak ke console bahwa kata tersebut bukan Palindrom
    console.log("'" + kataUji2 + "' bukan Palindrom.");
}