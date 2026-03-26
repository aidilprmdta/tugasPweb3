// Mendeklarasikan sebuah array kosong untuk menampung daftar barang yang diinput ke keranjang
let keranjangBelanja = [];

// Membuat fungsi untuk memasukkan data barang baru ke dalam keranjang
function tambahKeKeranjang() {
    // Mengambil teks nama barang dari kolom input HTML
    let nama = document.getElementById('namaBarang').value;
    
    // Mengambil nilai harga dari input HTML dan mengubahnya menjadi angka desimal (float)
    let harga = parseFloat(document.getElementById('hargaBarang').value);
    
    // Mengambil jumlah barang dari input HTML dan mengubahnya menjadi angka bulat (integer)
    let jumlah = parseInt(document.getElementById('jumlahBarang').value);

    // Mengecek apakah input nama kosong, atau harga bukan angka, atau jumlah di bawah 1
    if (nama === '' || isNaN(harga) || isNaN(jumlah) || jumlah < 1) {
        alert("Harap masukkan nama, harga, dan jumlah barang yang valid!");
        return;
    }

    // Menghitung subtotal untuk barang ini (harga dikali jumlah barang)
    let subtotal = harga * jumlah;

    // Menggabungkan data-data tersebut ke dalam satu objek JavaScript
    let barangBaru = {
        nama: nama,
        harga: harga,
        jumlah: jumlah,
        subtotal: subtotal
    };

    // Memasukkan objek barang baru tersebut ke dalam array keranjangBelanja
    keranjangBelanja.push(barangBaru);

    // Mengosongkan kembali kolom input di tampilan web
    document.getElementById('namaBarang').value = '';
    document.getElementById('hargaBarang').value = '';
    document.getElementById('jumlahBarang').value = '1';

    // Memanggil fungsi untuk memperbarui tampilan tabel keranjang di layar
    perbaruiTampilanKeranjang();
}

// Membuat fungsi untuk menghapus barang dari keranjang berdasarkan urutannya (index)
function hapusBarang(index) {
    keranjangBelanja.splice(index, 1);
    perbaruiTampilanKeranjang();
}

// Membuat fungsi untuk mencetak isi array keranjangBelanja ke dalam tabel HTML
function perbaruiTampilanKeranjang() {
    let isiKeranjang = document.getElementById('isi-keranjang');
    isiKeranjang.innerHTML = '';
    
    let totalKeseluruhan = 0;

    // Memulai perulangan untuk mengekstrak setiap barang
    for (let i = 0; i < keranjangBelanja.length; i++) {
        let barang = keranjangBelanja[i];
        totalKeseluruhan = totalKeseluruhan + barang.subtotal;

        let baris = `
            <tr>
                <td>${barang.nama}</td>
                <td>Rp ${barang.harga}</td>
                <td>${barang.jumlah}</td>
                <td>Rp ${barang.subtotal}</td>
                <td><button onclick="hapusBarang(${i})" class="btn-hapus">Hapus</button></td>
            </tr>
        `;
        
        isiKeranjang.innerHTML += baris;
    }

    // Memperbarui total dan menyembunyikan kembalian
    document.getElementById('totalHarga').innerText = totalKeseluruhan;
    document.getElementById('teksKembalian').style.display = 'none';
}

// Membuat fungsi untuk memproses uang pembayaran pelanggan
function prosesPembayaran() {
    let totalKeseluruhan = parseFloat(document.getElementById('totalHarga').innerText);
    let uangBayar = parseFloat(document.getElementById('uangBayar').value);

    // Pengecekan keamanan input
    if (totalKeseluruhan === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    if (isNaN(uangBayar)) {
        alert("Masukkan nominal uang yang valid!");
        return;
    }

    // Proses hitung kembalian
    if (uangBayar < totalKeseluruhan) {
        alert("Uang pembayaran kurang!");
    } else {
        let kembalian = uangBayar - totalKeseluruhan;
        document.getElementById('kembalian').innerText = kembalian;
        document.getElementById('teksKembalian').style.display = 'block';
    }
}