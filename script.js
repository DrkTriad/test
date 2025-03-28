// Ambil elemen canvas
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

// Atur posisi tengah canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
let scale = 1; // Untuk animasi berdenyut
let scaleDirection = 0.005; // Kecepatan animasi berdenyut

// Fungsi untuk menggambar hati
function drawHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas
    ctx.save();
    ctx.translate(centerX, centerY); // Pindah ke tengah canvas
    ctx.scale(scale, scale); // Skala untuk animasi berdenyut

    // Gambar hati menggunakan Bezier Curve
    ctx.beginPath();
    ctx.moveTo(0, -50);
    ctx.bezierCurveTo(-70, -110, -150, -20, 0, 100);
    ctx.bezierCurveTo(150, -20, 70, -110, 0, -50);
    ctx.closePath();

    // Atur warna dan efek glow pada hati
    ctx.fillStyle = '#ff69b4'; // Warna merah muda seperti gambar Anda
    ctx.fill();
    ctx.strokeStyle = '#ff1493';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Tambahkan efek glow
    ctx.shadowColor = '#ff69b4';
    ctx.shadowBlur = 20;

    ctx.restore();
}

// Animasi berdenyut
function animate() {
    // Update skala untuk efek berdenyut
    scale += scaleDirection;
    if (scale > 1.1 || scale < 0.9) {
        scaleDirection = -scaleDirection; // Balik arah jika mencapai batas
    }

    // Gambar ulang hati
    drawHeart();

    // Panggil fungsi animate lagi untuk animasi berulang
    requestAnimationFrame(animate);
}

// Mulai animasi
animate();