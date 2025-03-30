alert ("web ini hanya sekedar tampilan, tidak berfungsi");
function isMobileDevice() {
    return /mobile|android|iphone|ipad|ipod/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    alert("Akses ditolak! Silakan gunakan PC atau Laptop.");
    history.back(); // Kembali ke halaman sebelumnya
}
