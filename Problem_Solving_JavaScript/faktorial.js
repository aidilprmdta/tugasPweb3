// Membuat fungsi bernama 'hitungFaktorial' yang menerima satu masukan (parameter) bernama 'angka'
function hitungFaktorial(angka) {
    
    // Mengecek apakah angka yang dimasukkan kurang dari 0 (bilangan negatif)
    if (angka < 0) {
        // Jika negatif, hentikan fungsi dan kembalikan pesan error karena faktorial bilangan negatif tidak terdefinisi
        return "Error: Faktorial tidak berlaku untuk bilangan negatif.";
    }

    // Mengecek apakah angka yang dimasukkan adalah 0 atau 1
    if (angka === 0 || angka === 1) {
        // Sesuai aturan matematika, nilai 0! dan 1! selalu 1, jadi langsung kembalikan angka 1
        return 1;
    }

    // Mendeklarasikan variabel bernama 'hasil' dan memberikan nilai awal 1
    // Variabel ini akan kita gunakan sebagai tempat menampung hasil perkalian beruntun
    let hasil = 1;

    // Memulai perulangan (looping) dengan variabel 'i' yang diatur sama dengan nilai 'angka'
    // Perulangan akan terus berjalan selama 'i' lebih besar dari 0
    // Setiap kali satu putaran selesai, nilai 'i' akan dikurangi 1 (i--)
    for (let i = angka; i > 0; i--) {
        
        // Mengalikan nilai 'hasil' yang sekarang dengan nilai 'i', lalu menyimpannya kembali ke variabel 'hasil'
        // Putaran 1 (jika angka 5): hasil = 1 * 5
        // Putaran 2: hasil = 5 * 4
        // Putaran 3: hasil = 20 * 3, dan seterusnya hingga i bernilai 1
        hasil = hasil * i;
    }

    // Setelah perulangan selesai menghitung semuanya, kembalikan nilai akhir yang tersimpan di dalam 'hasil'
    return hasil;
}

// Mendeklarasikan variabel 'angkaUji' dan memberinya nilai 5 untuk kita hitung
let angkaUji = 5;

// Memanggil fungsi hitungFaktorial dengan memasukkan 'angkaUji' ke dalamnya
// Hasil dari perhitungan tersebut kemudian disimpan ke dalam variabel 'hasilAkhir'
let hasilAkhir = hitungFaktorial(angkaUji);

// Mencetak proses dan hasil akhir tersebut ke dalam layar Console browser
console.log("Faktorial dari " + angkaUji + "! adalah " + hasilAkhir);

// --- CONTOH PENGUJIAN LAIN ---
// Menguji fungsi secara langsung dengan mencetak hasil dari 4! (4 * 3 * 2 * 1 = 24)
console.log("Faktorial dari 4! adalah " + hitungFaktorial(4));