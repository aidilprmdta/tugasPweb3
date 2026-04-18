// Array untuk menyimpan daftar menu yang dipesan
let pesanan = [];

// Fungsi ini dipanggil setiap kali tombol menu kopi ditekan
function tambahMenu(namaItem, hargaItem) {
     
    // Mencari apakah minuman yang diklik sudah ada di dalam keranjang pesanan
    let itemSudahAda = pesanan.find(function(item) {
        return item.nama === namaItem;
    });

    if (itemSudahAda) {
        // Jika minumannya sudah ada, tambahkan saja jumlahnya (Qty) + 1
        itemSudahAda.jumlah += 1;
        // Hitung ulang subtotal untuk minuman tersebut
        itemSudahAda.subtotal = itemSudahAda.jumlah * itemSudahAda.harga;
    } else {
        // Jika minumannya belum ada di keranjang, masukkan sebagai data baru
        pesanan.push({
            nama: namaItem,
            harga: hargaItem,
            jumlah: 1,
            subtotal: hargaItem
        });
    }

    // Perbarui layar struk pesanan di kanan
    perbaruiTampilanKeranjang();
}

// Fungsi untuk mengurangi atau menghapus item dari pesanan
function kurangiItem(index) {
    // Mengecek apakah jumlah item tersebut lebih dari 1
    if (pesanan[index].jumlah > 1) {
        // Jika lebih dari 1, kurangi jumlahnya 1
        pesanan[index].jumlah -= 1;
        // Hitung ulang subtotalnya
        pesanan[index].subtotal = pesanan[index].jumlah * pesanan[index].harga;
    } else {
        // Jika jumlahnya sisa 1 dan ditekan kurangi, hapus item tersebut dari array
        pesanan.splice(index, 1);
    }
    
    // Perbarui layar
    perbaruiTampilanKeranjang();
}

// Fungsi utama untuk menggambar ulang daftar pesanan di HTML
function perbaruiTampilanKeranjang() {
    let wadahPesanan = document.getElementById('isi-keranjang');
    wadahPesanan.innerHTML = ''; // Kosongkan tampilan dulu
    
    let totalKeseluruhan = 0;

    // Jika array pesanan kosong, tampilkan pesan kosong
    if (pesanan.length === 0) {
        wadahPesanan.innerHTML = '<p class="teks-kosong">Belum ada pesanan.</p>';
        document.getElementById('totalHarga').innerText = '0';
        document.getElementById('areaKembalian').style.display = 'none';
        document.getElementById('btnCetak').style.display = 'none'; // Sembunyikan tombol cetak jika keranjang kosong
        return; // Hentikan fungsi karena tidak ada yang perlu dihitung
    }

    // Melakukan perulangan untuk mencetak setiap item pesanan
    for (let i = 0; i < pesanan.length; i++) {
        let item = pesanan[i];
        totalKeseluruhan += item.subtotal;

        // Membuat elemen HTML untuk setiap pesanan (menggantikan tabel dengan list struk)
        let barisItem = `
            <div class="item-pesanan">
                <div class="detail-item">
                    <p class="nama">${item.nama} (x${item.jumlah})</p>
                    <p class="subtotal">Rp ${item.subtotal}</p>
                </div>
                <button class="btn-kurang" onclick="kurangiItem(${i})">X</button>
            </div>
        `;
        
        wadahPesanan.innerHTML += barisItem;
    }

    // Memperbarui angka total di layar
    document.getElementById('totalHarga').innerText = totalKeseluruhan;
    
    // Menyembunyikan kembalian dan tombol cetak setiap kali ada perubahan pesanan
    document.getElementById('areaKembalian').style.display = 'none';
    document.getElementById('btnCetak').style.display = 'none'; 
}

// Fungsi untuk memproses pembayaran
function prosesPembayaran() {
    let teksTotal = document.getElementById('totalHarga').innerText;
    let totalKeseluruhan = parseFloat(teksTotal);
    let uangBayar = parseFloat(document.getElementById('uangBayar').value);

    // Pengecekan standar
    if (totalKeseluruhan === 0) {
        alert("Belum ada pesanan yang diinput!");
        return;
    }

    if (isNaN(uangBayar) || uangBayar <= 0) {
        alert("Masukkan nominal uang pembayaran dengan angka yang valid!");
        return;
    }

    // Proses hitung
    if (uangBayar < totalKeseluruhan) {
        alert("Maaf, uang pembayaran kurang!");
    } else {
        let kembalian = uangBayar - totalKeseluruhan;
        // Menampilkan angka kembalian ke layar
        document.getElementById('kembalian').innerText = kembalian;
        document.getElementById('areaKembalian').style.display = 'flex';
        
        // Menampilkan tombol cetak struk
        document.getElementById('btnCetak').style.display = 'block';

        // Membersihkan input kolom uang
        document.getElementById('uangBayar').value = '';
    }
}

// Fungsi untuk mempersiapkan dan mencetak struk
function cetakStruk() {
    // Mengambil data dari layar
    let namaPelanggan = document.getElementById('namaPelanggan').value || 'Pelanggan';
    let totalTagihan = document.getElementById('totalHarga').innerText;
    let kembalian = document.getElementById('kembalian').innerText;
    let uangBayar = parseFloat(totalTagihan) + parseFloat(kembalian);

    // Format tanggal dan waktu
    let now = new Date();
    let tanggal = now.toLocaleDateString('id-ID');
    let waktu = now.toLocaleTimeString('id-ID');

    // Membangun string HTML untuk daftar item di struk
    let itemStrukHTML = '';
    pesanan.forEach(item => {
        itemStrukHTML += `
            <div class="struk-item">
                <span>${item.nama} (x${item.jumlah})</span>
                <span>Rp ${item.subtotal}</span>
            </div>
        `;
    });

    // Template HTML lengkap untuk struk
    let strukHTML = `
        <div class="struk-header">
            <h3>Suska Coffee</h3>
            <p>Jl. Garuda Sakti KM 2, Panam, Pekanbaru</p>
            <p>Tanggal: ${tanggal} | Waktu: ${waktu}</p>
            <p>Kasir: Sky</p>
            <p>Pelanggan: ${namaPelanggan}</p>
        </div>
        <div class="struk-garis"></div>
        ${itemStrukHTML}
        <div class="struk-garis"></div>
        <div class="struk-item">
            <strong>Total</strong>
            <strong>Rp ${totalTagihan}</strong>
        </div>
        <div class="struk-item">
            <span>Tunai</span>
            <span>Rp ${uangBayar}</span>
        </div>
        <div class="struk-item">
            <span>Kembalian</span>
            <span>Rp ${kembalian}</span>
        </div>
        <div class="struk-footer">
            <p>-- Terima Kasih --</p>
            <p>Semoga harimu menyenangkan!</p>
        </div>
    `;

    // Memasukkan template ke area preview struk
    document.getElementById('area-struk').innerHTML = strukHTML;
    
    // Menampilkan area struk sebelum mencetak
    document.getElementById('area-struk').style.display = 'block';

    // Memanggil fungsi print bawaan browser
    window.print();
}
