// Mengambil elemen yang dibutuhkan dari HTML
const form = document.getElementById("formKegiatan");
const input = document.getElementById("inputKegiatan");
const daftar = document.getElementById("daftarKegiatan");
const peringatan = document.getElementById("peringatan");
const tombolTema = document.getElementById("tombolTema");

// Fungsi untuk menambahkan kegiatan
function tambahKegiatan(nama) {
    const item = document.createElement("li");
    const teks = document.createElement("span");
    teks.textContent = nama;

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.addEventListener("click", function () {
        hapusKegiatan(item);
    });

    item.appendChild(teks);
    item.appendChild(tombolHapus);
    daftar.appendChild(item);
}

// Fungsi untuk menghapus kegiatan
function hapusKegiatan(item) {
    item.remove();
}

// Fungsi untuk mengganti tema
function toggleTema() {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
        tombolTema.textContent = "Mode Terang";
    } else {
        tombolTema.textContent = "Mode Gelap";
    }
}

// Fungsi untuk menampilkan pesan
function tampilkanPesan() {
    document.getElementById("pesan").textContent =
        "Semangat menyelesaikan kegiatanmu!";
}

// Event submit dan validasi input
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaKegiatan = input.value.trim();

    if (namaKegiatan === "") {
        peringatan.textContent = "Nama kegiatan tidak boleh kosong.";
        input.focus();
    } else {
        tambahKegiatan(namaKegiatan);
        input.value = "";
        peringatan.textContent = "Kegiatan berhasil ditambahkan.";
    }
});

// Event klik untuk mengganti tema
tombolTema.addEventListener("click", toggleTema);

// Event klik untuk menampilkan pesan saat bagian Beranda dibuka
document.querySelector('a[href="#beranda"]').addEventListener("click", tampilkanPesan);
