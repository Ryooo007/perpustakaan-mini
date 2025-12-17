let bukuList = [
    { judul: "Algoritma", kode: "ALGO-001", stok: 5 },
    { judul: "Pemrograman C++", kode: "CPP-001", stok: 3 },
    { judul: "Matematika Diskrit", kode: "MTK-001", stok: 2 }
];

function pinjamBuku() {
    let daftar = "Pinjam Buku\n";
    bukuList.forEach((b, i) => {
        daftar += `${i + 1}. ${b.judul} (${b.kode}) Stok: ${b.stok}\n`;
    });
    daftar += "\nPilih nomor buku:";

    let pilih = prompt(daftar);
    let index = parseInt(pilih) - 1;
    let output = document.getElementById("output");

    if (index >= 0 && index < bukuList.length) {
        if (bukuList[index].stok > 0) {
            bukuList[index].stok--;
            output.innerText = `Anda meminjam: ${bukuList[index].judul}\nSisa Stok: ${bukuList[index].stok}`;
        } else {
            output.innerText = `Stok buku ${bukuList[index].judul} habis!`;
        }
    } else {
        output.innerText = "Pilihan tidak valid.";
    }
}

function kembalikanBuku() {
    let kode = prompt("Masukkan kode buku yang dikembalikan:");
    let output = document.getElementById("output");

    let buku = bukuList.find(b => b.kode === kode);

    if (buku) {
        buku.stok++;
        output.innerText = `Buku ${buku.judul} (${kode}) berhasil dikembalikan!`;
    } else {
        output.innerText = "Kode buku tidak ditemukan!";
    }
}

function lihatDaftar() {
    let daftar = "Daftar Buku\n";
    bukuList.forEach((b, i) => {
        daftar += `${i + 1}. ${b.judul} (${b.kode}) - Stok: ${b.stok}\n`;
    });

    document.getElementById("output").innerText = daftar;
}

function tambahBuku() {
    let judul = prompt("Masukkan judul buku:");
    let kode = prompt("Masukkan kode buku (misal: CRP-001):");
    let stok = parseInt(prompt("Masukkan stok awal:"));

    if (!judul || !kode || isNaN(stok)) {
        alert("Input tidak valid!");
        return;
    }

    bukuList.push({
        judul: judul,
        kode: kode,
        stok: stok
    });

    document.getElementById("output").innerText =
        `Buku baru berhasil ditambahkan:\n${judul} (${kode}) Stok: ${stok}`;
}

function keluar() {
    alert("Terima kasih, keluar dari sistem.");
    location.reload();
}