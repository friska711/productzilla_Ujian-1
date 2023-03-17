//tidak sempat membuat ke file yg berbeda
//1
var nama = "Productzilla";

function gantiNama() {
  var nama = "Academy";
  console.log(nama);
}

gantiNama(); 

console.log(nama);
//2
function checkPositiveNegative(a, b) {
    if (a === 0 || b === 0) {
        return false;
    } else {
        return true;
    }
}
//3
function checkAccessLevel(accessLevel) {
    if (accessLevel === "admin") {
        console.log("Selamat datang, Admin!");
    } else if (accessLevel === "user") {
        console.log("Anda tidak memiliki akses ke halaman ini!");
    } else {
        console.log("Level akses tidak valid.");
    }
}
//4
// deklarasi variabel untuk harga barang
var hargaBaju = 75000;
var hargaCelana = 120000;
var hargaTas = 250000;

// deklarasi variabel untuk jumlah barang
var jumlahBaju = 3;
var jumlahCelana = 2;
var jumlahTas = 1;

// hitung total harga belanjaan
var totalHarga = (hargaBaju * jumlahBaju) + (hargaCelana * jumlahCelana) + (hargaTas * jumlahTas);

// tampilkan total harga belanjaan
console.log("Total harga belanjaan: " + totalHarga + " rupiah");
//5
// deklarasi variabel untuk harga barang
var hargaBaju = 75000;
var hargaCelana = 120000;
var hargaTas = 250000;

// deklarasi variabel untuk jumlah barang
var jumlahBaju = 3;
var jumlahCelana = 2;
var jumlahTas = 1;

// hitung total harga belanjaan
var totalHarga = (hargaBaju * jumlahBaju) + (hargaCelana * jumlahCelana) + (hargaTas * jumlahTas);

// cek apakah total harga melebihi 500.000 rupiah
if (totalHarga > 500000) {
    // hitung harga setelah diberikan diskon 10%
    var hargaSetelahDiskon = totalHarga * 0.9;
    console.log("Selamat, Anda mendapatkan diskon 10%!");
    console.log("Total harga belanjaan sebelum diskon: " + totalHarga + " rupiah");
    console.log("Total harga belanjaan setelah diskon: " + hargaSetelahDiskon + " rupiah");
} else {
    console.log("Total harga belanjaan: " + totalHarga + " rupiah");
}
//6
function ganjilgenapdesimal(bil){
    return;
}
var bil = Number
    if(bil % 2== 0) {
        console.log(`Bilangan Genap`)
    } else if( bil % 2 === 0) {
        console.log(`Bilangan Ganjil`)
    } else {
        console.log(`Bilangan Desimal`)
    }
//7
function bandingkan(angka1, angka2) {
    if (angka1 > angka2) {
      return angka1;
    } else if (angka1 < angka2) {
      return angka2;
    } else {
      return "Kedua bilangan sama besar";
    }
  }
  
  // contoh pemanggilan fungsi
  console.log(bandingkan(10, 5)); // Output: 10
  console.log(bandingkan(7, 12)); // Output: 12
  console.log(bandingkan(8, 8)); // Output: Kedua bilangan sama besar
//8
function luasSegitiga( a, t){
    return (a * t) / 2 ;
}
var hasil = luasSegitiga ( 8, 10);
console.log(hasil);
//
