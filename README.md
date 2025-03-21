# 🕌 Ar-Rahman Digital

**Ar-Rahman Digital** adalah platform berbasis web yang dirancang untuk membantu pengelolaan informasi masjid secara digital. Website ini menyediakan fitur-fitur utama seperti jadwal sholat, jadwal acara masjid, serta donasi online, sehingga jamaah dapat lebih mudah mengakses informasi dan berpartisipasi dalam kegiatan masjid.

## ✨ Fitur Utama

✅ Jadwal Sholat – Menampilkan jadwal sholat harian berdasarkan lokasi.
<br>
✅ Jadwal Acara – Informasi tentang kegiatan masjid seperti kajian, pengajian, dan acara lainnya.
<br>
✅ Donasi Online – Memudahkan jamaah untuk berdonasi langsung melalui platform, dengan dana yang langsung masuk ke rekening masjid.
<br>
✅ Pemilihan Kota – Mendukung beberapa kota untuk menampilkan jadwal sholat yang relevan.
<br>
✅ Hitung Mundur Waktu Sholat – Notifikasi waktu sholat berikutnya secara real-time.

## 🚀 Teknologi yang Digunakan

🔹 Astro – Framework utama untuk membangun antarmuka website.
<br>
🔹 TailwindCSS – Styling modern yang cepat dan responsif.
<br>
🔹 API Aladhan – Mengambil data jadwal sholat secara real-time.

## 🎯 Tujuan

Platform ini dikembangkan untuk memudahkan jamaah dalam mengakses informasi masjid dan meningkatkan keterlibatan dalam kegiatan keagamaan.

## 📦 Instalasi & Menjalankan Proyek

### 1️⃣ Clone Repository

```sh
git clone https://github.com/zoelabbb/ar-rahman.git
cd ar-rahman
```

### 2️⃣ Instal Dependencies

```sh
npm install
```

### 3️⃣ Jalankan di Localhost

```sh
npm run dev
```

Buka **http://localhost:3000** di browser.

## 🔗 API yang Digunakan

Menggunakan **Aladhan API**:

```
GET https://api.aladhan.com/v1/timingsByCity?city={city}&country=Indonesia&method=2
```

## 💡 Cara Menggunakan

1. Pilih kota dari dropdown.
2. Klik **Muat Jadwal** untuk mendapatkan jadwal sholat.
3. Lihat tabel jadwal sholat dan countdown menuju waktu sholat berikutnya.

## 📌 Todo List

- [x] Tambah fitur lokasi otomatis.
- [] Implementasi payment gateaway
- [ ] Tambah notifikasi untuk waktu sholat.
- [ ] Memperbaiki UI agar lebih interaktif.

## 🤝 Kontribusi

Pull request dan issue sangat diterima! 🚀

## 📜 Lisensi

Proyek ini menggunakan lisensi **MIT**, yang berarti siapa pun bebas menggunakan, menyalin, memodifikasi, dan mendistribusikan proyek ini, baik untuk keperluan pribadi maupun komersial, asalkan tetap mencantumkan kredit kepada pembuat asli.
