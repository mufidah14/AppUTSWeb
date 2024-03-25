
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman formulir

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Lakukan validasi login disini
    if (email === 'mufidahhaniyah949@gmail.com' && password === 'mufidah') {
        alert('Login berhasil!');
        // Redirect ke halaman lain
         window.location.href = 'order.html';
    } else {
        alert('Email atau password salah.');
    }
});


function submitOrder() {
    // Ambil semua elemen menu
    let menuItems = document.querySelectorAll('.menu-item');

    let totalHarga = 0;
    let pesan = '';

    // Loop melalui setiap item menu
    menuItems.forEach(function(menuItem) {
        let nama = menuItem.querySelector('span:nth-child(1)').innerText;
        let harga = parseInt(menuItem.querySelector('span:nth-child(2)').innerText.replace('Rp. ', ''));

        // Periksa apakah item menu dipilih
        let checkbox = menuItem.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            // Tambahkan harga ke total harga
            totalHarga += harga;
            // Tambahkan nama item ke pesan
            pesan += nama + '\n';
        }
    });

    // Update total harga dan pesan
    document.getElementById('totalHarga').innerText = totalHarga;
    document.getElementById('pesan').innerText = pesan;
}
function updateTotal() {
    // Ambil semua elemen menu
    let menuItems = document.querySelectorAll('.menu-item');

    let totalHarga = 0;
    let pesan = '';

    // Loop melalui setiap item menu
    menuItems.forEach(function(menuItem) {
        let nama = menuItem.querySelector('span:nth-child(1)').innerText;
        let harga = parseInt(menuItem.querySelector('span:nth-child(2)').innerText.replace('Rp. ', ''));

        // Periksa apakah item menu dipilih
        let checkbox = menuItem.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            // Tambahkan harga ke total harga
            totalHarga += harga;
            // Tambahkan nama item ke pesan
            pesan += nama + '\n';
        }
    });

    // Update total harga
    document.getElementById('totalHarga').innerText = totalHarga;
}

function submitOrder() {
    // Ambil pesan
    let pesan = document.getElementById('pesan').value;
    let totalHarga = document.getElementById('totalHarga').innerText;
    alert('Pesanan Anda:\n\n' + pesan + '\nTotal Harga: Rp. ' + totalHarga);
}
