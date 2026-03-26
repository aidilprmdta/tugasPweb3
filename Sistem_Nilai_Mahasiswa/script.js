// --- FUNGSI UTAMA MEMPROSES NILAI ---

// Membuat fungsi bernama 'prosesNilai' yang akan berjalan saat tombol "Simpan Data" di-klik
function prosesNilai() {
    
    // Mengambil teks yang diketik pengguna di kolom input "nama" menggunakan ID-nya
    let inputNama = document.getElementById("nama").value;
    
    // Mengambil teks yang diketik pengguna di kolom input "nim" menggunakan ID-nya
    let inputNim = document.getElementById("nim").value;
    
    // Mengambil angka yang diketik di kolom "nilai", lalu mengubahnya secara paksa menjadi tipe data angka desimal (parseFloat)
    let inputNilai = parseFloat(document.getElementById("nilai").value);

    // Mengecek apakah ada kolom yang kosong (belum diisi) atau apakah nilai yang dimasukkan bukan angka
    if (inputNama === "" || inputNim === "" || isNaN(inputNilai)) {
        // Jika ada yang kosong, tampilkan peringatan (alert) kepada pengguna
        alert("Harap isi semua data dengan benar!");
        // Hentikan proses fungsi di sini agar data kosong tidak masuk ke tabel
        return; 
    }

    // Mengecek apakah nilai angka yang dimasukkan berada di luar batas wajar (kurang dari 0 atau lebih dari 100)
    if (inputNilai < 0 || inputNilai > 100) {
        // Jika tidak masuk akal, tampilkan peringatan
        alert("Nilai harus berada di antara rentang 0 hingga 100!");
        // Hentikan proses fungsi di sini
        return;
    }

    // Mendeklarasikan variabel kosong untuk menampung huruf (A, B, C, D, E) nantinya
    let nilaiHuruf = "";
    // Mendeklarasikan variabel kosong untuk menampung status ("Lulus" atau "Tidak Lulus") nantinya
    let status = "";

    // Memulai pengkondisian logika IF-ELSE untuk menentukan Nilai Huruf berdasarkan Nilai Angka
    if (inputNilai >= 85) {
        // Jika nilai 85 ke atas, dapat A
        nilaiHuruf = "A";
    } else if (inputNilai >= 75) {
        // Jika nilai antara 75 sampai 84.9, dapat B
        nilaiHuruf = "B";
    } else if (inputNilai >= 60) {
        // Jika nilai antara 60 sampai 74.9, dapat C
        nilaiHuruf = "C";
    } else if (inputNilai >= 50) {
        // Jika nilai antara 50 sampai 59.9, dapat D
        nilaiHuruf = "D";
    } else {
        // Jika nilai di bawah 50, dapat E
        nilaiHuruf = "E";
    }

    // Menentukan Status kelulusan, jika hurufnya A, B, atau C maka Lulus, selain itu Tidak Lulus
    if (nilaiHuruf === "A" || nilaiHuruf === "B" || nilaiHuruf === "C") {
        // Memberikan teks HTML dengan class 'lulus' agar warnanya menjadi hijau (diatur di CSS)
        status = "<span class='lulus'>Lulus</span>";
    } else {
        // Memberikan teks HTML dengan class 'tidak-lulus' agar warnanya menjadi merah (diatur di CSS)
        status = "<span class='tidak-lulus'>Tidak Lulus</span>";
    }

    // Mengambil elemen HTML kerangka tabel ('daftar-nilai') tempat kita akan meletakkan data baru
    let tabel = document.getElementById("daftar-nilai");

    // Membuat baris baru di dalam tabel (tr = table row) menggunakan variabel teks HTML
    let barisBaru = `
        <tr>
            <td>${inputNama}</td>
            <td>${inputNim}</td>
            <td>${inputNilai}</td>
            <td>${nilaiHuruf}</td>
            <td>${status}</td>
        </tr>
    `;

    // Menyisipkan baris HTML baru tersebut ke dalam kerangka tabel yang sudah ada sebelumnya
    // Operator '+=' berarti menambahkan tanpa menghapus data mahasiswa yang sudah diinput sebelumnya
    tabel.innerHTML += barisBaru;

    // Menghapus kembali teks yang ada di dalam kolom input Nama agar pengguna bisa langsung input data baru
    document.getElementById("nama").value = "";
    // Menghapus kembali teks di dalam kolom input NIM
    document.getElementById("nim").value = "";
    // Menghapus kembali teks di dalam kolom input Nilai
    document.getElementById("nilai").value = "";
}