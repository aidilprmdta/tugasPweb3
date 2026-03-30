function prosesNilai() {
    let inputNama = document.getElementById("nama").value;
    let inputNim = document.getElementById("nim").value;
    let inputNilai = parseFloat(document.getElementById("nilai").value);

    // Validasi input standar kampus
    if (inputNama.trim() === "" || inputNim.trim() === "" || isNaN(inputNilai)) {
        alert("⚠️ Perhatian: Mohon lengkapi Nama, NIM, dan Nilai Angka dengan benar.");
        return; 
    }

    if (inputNilai < 0 || inputNilai > 100) {
        alert("⚠️ Perhatian: Nilai Angka harus berada dalam rentang 0 hingga 100.");
        return;
    }

    let nilaiHuruf = "";
    let kelasHuruf = "";
    let statusHTML = "";

    // Logika Penilaian Standar Akademik
    if (inputNilai >= 85) {
        nilaiHuruf = "A"; kelasHuruf = "huruf-a";
    } else if (inputNilai >= 75) {
        nilaiHuruf = "B"; kelasHuruf = "huruf-b";
    } else if (inputNilai >= 60) {
        nilaiHuruf = "C"; kelasHuruf = "huruf-c";
    } else if (inputNilai >= 50) {
        nilaiHuruf = "D"; kelasHuruf = "huruf-d";
    } else {
        nilaiHuruf = "E"; kelasHuruf = "huruf-e";
    }

    // Penentuan Kelulusan (A, B, C Lulus)
    if (nilaiHuruf === "A" || nilaiHuruf === "B" || nilaiHuruf === "C") {
        statusHTML = `<span class="label label-lulus">LULUS</span>`;
    } else {
        statusHTML = `<span class="label label-gagal">GAGAL</span>`;
    }

    let tabel = document.getElementById("daftar-nilai");
    let barisKosong = document.getElementById("baris-kosong");
    
    // Menghapus tulisan "Belum ada data" jika data pertama masuk
    if (barisKosong) {
        barisKosong.remove();
    }

    // Membuat baris baru dengan struktur tabel profesional
    let barisBaruHTML = `
        <tr>
            <td><strong style="color: #111827; font-weight: 600;">${inputNama}</strong></td>
            <td style="color: #4b5563;">${inputNim}</td>
            <td class="col-angka" style="font-weight: 500;">${inputNilai}</td>
            <td class="col-huruf ${kelasHuruf}">${nilaiHuruf}</td>
            <td class="col-status">${statusHTML}</td>
        </tr>
    `;

    // Menambahkan baris ke dalam tabel (paling bawah)
    tabel.insertAdjacentHTML('beforeend', barisBaruHTML);

    // Reset Form & Fokus kembali ke kolom Nama
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("nilai").value = "";
    document.getElementById("nama").focus();
}